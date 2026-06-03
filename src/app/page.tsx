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
import { faqItems } from "@/data/site";

export default function HomePage() {
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
