import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { BlogList } from "@/app/[locale]/blog/blog-list";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "blog", "/blog");
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.blog");

  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.goatFarm}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("resourcesLabel")}
            title={t("resourcesTitle")}
          />
          <BlogList locale={locale} />
        </div>
      </section>
    </PageWrapper>
  );
}
