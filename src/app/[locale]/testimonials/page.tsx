import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { getTestimonials } from "@/lib/content";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "testimonials", "/testimonials");
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.testimonials");
  const tRoot = await getTranslations();
  const testimonials = getTestimonials((key) => tRoot(key));

  return (
    <PageWrapper>
      <PageHero
        title={t("heroTitle")}
        description={t("heroDesc")}
        image={images.goatYoung}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label={t("reviewsLabel")}
            title={t("reviewsTitle")}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <TestimonialCard key={item.id} testimonial={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
