import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Dna, Heart, Shield, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { getStringList } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { Card, CardContent } from "@/components/ui/card";

type Props = { params: Promise<{ locale: string }> };

const standardIcons = [Dna, Heart, Stethoscope, Shield];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "breeding", "/breeding");
}

export default async function BreedingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.breeding");
  const tBreed = await getTranslations("breeding");

  const standards = [0, 1, 2, 3].map((i) => ({
    title: tBreed(`standards.${i}.title`),
    description: tBreed(`standards.${i}.description`),
    icon: standardIcons[i],
  }));
  const geneticsPoints = getStringList(
    (key) => tBreed(key),
    "genetics",
    5
  );
  const healthProcess = [0, 1, 2, 3, 4, 5].map((i) => ({
    step: String(i + 1).padStart(2, "0"),
    title: tBreed(`healthSteps.${i}.title`),
    desc: tBreed(`healthSteps.${i}.description`),
  }));

  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.breedingPageHero}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("standardsLabel")}
            title={t("standardsTitle")}
            description={t("standardsDesc")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((item) => (
              <Card key={item.title} className="border-border/60">
                <CardContent className="pt-8">
                  <item.icon className="mb-4 size-10 text-forest dark:text-gold" />
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label={t("geneticsLabel")}
                title={t("geneticsTitle")}
                align="left"
                className="mb-6"
              />
              <ul className="space-y-3">
                {geneticsPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Dna className="mt-0.5 size-5 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                label={t("welfareLabel")}
                title={t("welfareTitle")}
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("welfareP1")}</p>
                <p>{t("welfareP2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("healthLabel")}
            title={t("healthTitle")}
            description={t("healthDesc")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {healthProcess.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-6">
                  <span className="font-heading text-3xl font-bold text-gold/60">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-heading font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
