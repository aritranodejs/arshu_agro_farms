import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoatCard } from "@/components/shared/goat-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { goats } from "@/data/goats";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Our Goats",
  description:
    "Browse Black Bengal goat stock from Arshu Agro Farms — documented health, vaccination records, and inquiry options.",
  path: "/goats",
});

export default function GoatsPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Our Goats"
        description="Premium Black Bengal livestock from our Mayapur farm — documented health and vaccination records."
        image={images.goatsPageHero}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Inventory"
            title="Current Stock"
            description="Choose a category and inquire via WhatsApp or our contact form. Pricing is discussed individually based on age, weight, and purpose."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {goats.map((goat, index) => (
              <GoatCard key={goat.id} goat={goat} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
