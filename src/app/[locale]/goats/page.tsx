import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoatCard } from "@/components/shared/goat-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { getGoats } from "@/lib/content";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.goats" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/goats",
    locale,
  });
}

export default async function GoatsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.goats");
  const tRoot = await getTranslations();
  const goats = getGoats((key) => tRoot(key), (key) => tRoot(key));

  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.goatsPageHero}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("inventoryLabel")}
            title={t("inventoryTitle")}
            description={t("inventoryDesc")}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {goats.map((goat, index) => (
              <GoatCard key={goat.id} goat={goat} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
