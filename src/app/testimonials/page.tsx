import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { testimonials } from "@/data/testimonials";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description:
    "Customer reviews and success stories from farmers who trust Arshu Agro Farms.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Customer Testimonials"
        description="Real experiences from farmers, breeders, and buyers across West Bengal."
        image={images.goatYoung}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Reviews"
            title="Success Stories"
            description="Our reputation is built on the trust of every customer we serve."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
