import Link from "next/link";
import { featuredGoats } from "@/data/goats";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoatCard } from "@/components/shared/goat-card";
import { Button } from "@/components/ui/button";

export function FeaturedGoats() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Our Livestock"
          title="Featured Stock"
          description="Black Bengal goats from our Mayapur farm — raised with documented health care and ethical practices. Pricing discussed individually."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGoats.map((goat, index) => (
            <GoatCard key={goat.id} goat={goat} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            render={<Link href="/goats" />}
            nativeButton={false}
            className="bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
          >
            View Full Inventory
          </Button>
        </div>
      </div>
    </section>
  );
}
