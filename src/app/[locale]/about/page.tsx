import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Leaf, Target, Eye, Sprout } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { getCoreValues, getStringList } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { Card, CardContent } from "@/components/ui/card";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "about", "/about");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");
  const tRoot = await getTranslations();
  const coreValues = getCoreValues((key) => tRoot(key));
  const practices = getStringList((key) => tRoot(key), "practices", 6);
  const futurePlans = getStringList((key) => tRoot(key), "futurePlans", 5);
  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.pageBg}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label={t("storyLabel")}
                title={t("storyTitle")}
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.goatFarm}
                alt={t("farmImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-forest/20">
              <CardContent className="pt-8">
                <Target className="mb-4 size-10 text-forest dark:text-gold" />
                <h3 className="font-heading text-2xl font-bold">{t("missionTitle")}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t("missionDesc")}
                </p>
              </CardContent>
            </Card>
            <Card className="border-gold/30">
              <CardContent className="pt-8">
                <Eye className="mb-4 size-10 text-forest dark:text-gold" />
                <h3 className="font-heading text-2xl font-bold">{t("visionTitle")}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t("visionDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("valuesLabel")}
            title={t("valuesTitle")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-8">
                  <Leaf className="mx-auto mb-4 size-8 text-gold" />
                  <h3 className="font-heading font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Sprout className="mb-4 size-10 text-gold" />
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("sustainTitle")}
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                {t("sustainDesc")}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {practices.map((practice) => (
                <li
                  key={practice}
                  className="flex items-start gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm backdrop-blur-sm"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("futureLabel")}
            title={t("futureTitle")}
            description={t("futureDesc")}
          />
          <ul className="mx-auto max-w-2xl space-y-4">
            {futurePlans.map((plan, i) => (
              <li
                key={plan}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white dark:bg-gold dark:text-forest">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{plan}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
