import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { GalleryClient } from "@/app/[locale]/gallery/gallery-client";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "gallery", "/gallery");
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.gallery");

  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.goatFarm}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GalleryClient />
        </div>
      </section>
    </PageWrapper>
  );
}
