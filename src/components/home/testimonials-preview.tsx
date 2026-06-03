import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getTestimonials } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";

export async function TestimonialsPreview() {
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const tRoot = await getTranslations();
  const featured = getTestimonials((key) => tRoot(key)).filter((x) => x.featured);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label={t("testimonialsLabel")}
          title={t("testimonialsTitle")}
          description="Real stories from farmers and buyers who trust Arshu Agro Farms."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((item, i) => (
            <TestimonialCard key={item.id} testimonial={item} index={i} />
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
            {tCommon("readAllReviews")}
          </Button>
        </div>
      </div>
    </section>
  );
}
