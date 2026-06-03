import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { WhyChoose } from "@/components/home/why-choose";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedGoats } from "@/components/home/featured-goats";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/shared/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { getFAQSchema } from "@/lib/schema";
import { getFaqItems } from "@/lib/content";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const faqItems = getFaqItems((key) => t(key));

  return (
    <>
      <JsonLd data={getFAQSchema(faqItems)} />
      <Hero />
      <WhyChoose />
      <StatsSection />
      <FeaturedGoats />
      <TestimonialsPreview />
      <GalleryPreview />
      <CTASection />
      <FAQSection />
    </>
  );
}
