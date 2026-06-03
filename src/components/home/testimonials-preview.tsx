import Link from "next/link";
import { featuredTestimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          description="Real stories from farmers and buyers who trust Arshu Agro Farms."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {featuredTestimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/testimonials" />}
            nativeButton={false}
            className="border-forest text-forest hover:bg-forest/5 dark:border-gold dark:text-gold"
          >
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
