import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshuagrofarms.com";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${baseUrl}${path}`;
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
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
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
