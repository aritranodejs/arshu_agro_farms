import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { BlogList } from "@/app/blog/blog-list";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Goat farming guides, feeding tips, health management, and breeding articles from Arshu Agro Farms.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Farm Blog"
        description="Expert guides on goat farming, health, feeding, and breeding."
        image={images.goatFarm}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Resources"
            title="Farming Knowledge Hub"
            description="Practical advice from our experienced team."
          />
          <BlogList />
        </div>
      </section>
    </PageWrapper>
  );
}
