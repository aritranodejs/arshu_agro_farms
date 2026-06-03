import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { GalleryClient } from "@/app/gallery/gallery-client";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Farm Gallery",
  description:
    "Photos of our farm facilities, Black Bengal goats, and daily farming life at Arshu Agro Farms.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Farm Gallery"
        description="Explore our facilities, herd, and the daily life at Arshu Agro Farms."
        image={images.goatFarm}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GalleryClient />
        </div>
      </section>
    </PageWrapper>
  );
}
