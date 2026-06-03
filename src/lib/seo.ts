import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshuagrofarms.com";

function localePath(locale: string, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) return normalized || "/";
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export async function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  locale = routing.defaultLocale,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  locale?: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "site" });
  const siteName = t("name");
  const tagline = t("tagline");
  const defaultDescription = t("description");

  const pageTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | ${tagline}`;
  const pageDescription = description ?? defaultDescription;
  const url = `${baseUrl}${localePath(locale, path)}`;
  const ogImage =
    image ?? `${baseUrl}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName,
      locale: locale === "bn" ? "bn_IN" : "en_IN",
      alternateLocale: locale === "bn" ? ["en_IN"] : ["bn_IN"],
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    keywords: [
      "Black Bengal goats",
      "goat farming",
      "livestock",
      "West Bengal",
      "Arshu Agro Farms",
      "breeding stock",
      "sustainable farming",
    ],
  };
}

export { baseUrl };
