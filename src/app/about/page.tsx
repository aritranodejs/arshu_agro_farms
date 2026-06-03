import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Target, Eye, Sprout } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { coreValues } from "@/data/site";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Arshu Agro Farms — our story, mission, sustainable Black Bengal goat farming, and vision for the future.",
  path: "/about",
});

const practices = [
  "Rotational grazing to preserve pasture health",
  "Organic and locally sourced feed supplementation",
  "Rainwater harvesting and efficient water management",
  "Veterinary-led preventive healthcare programs",
  "Humane handling and stress-free environments",
  "Waste recycling for natural fertilizer production",
];

const futurePlans = [
  "Expand herd capacity with premium breeding lines",
  "Launch organic goat milk and cheese products",
  "Develop farm tourism and educational workshops",
  "Integrate digital inventory and health tracking (admin dashboard)",
  "Partner with local cooperatives and export markets",
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        title="About Arshu Agro Farms"
        description="Building trust through quality livestock and sustainable farming since day one."
        image={images.pageBg}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Story"
                title="Rooted in Passion, Growing with Purpose"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Arshu Agro Farms began with a simple vision: to raise the finest
                  Black Bengal goats while honoring the land and animals that sustain
                  us. What started as a small family operation in West Bengal has
                  grown into a trusted name among farmers, breeders, and agricultural
                  entrepreneurs across the region.
                </p>
                <p>
                  Our founder recognized the growing demand for quality livestock and
                  the gap between commercial farming and ethical practices. Today, we
                  bridge that gap — delivering healthy goats with complete health
                  documentation, expert guidance, and a commitment to sustainable
                  agriculture.
                </p>
                <p>
                  Every goat on our farm is treated with care, tracked with meticulous
                  records, and raised in conditions we&apos;d be proud to show anyone.
                  That transparency is the foundation of everything we do.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.goatFarm}
                alt="Arshu Agro Farms herd"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-forest/20">
              <CardContent className="pt-8">
                <Target className="mb-4 size-10 text-forest dark:text-gold" />
                <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To provide premium Black Bengal goats and breeding stock through
                  ethical, sustainable farming — empowering customers with healthy
                  livestock, expert knowledge, and lasting partnerships built on trust.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gold/30">
              <CardContent className="pt-8">
                <Eye className="mb-4 size-10 text-forest dark:text-gold" />
                <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To become West Bengal&apos;s most trusted agricultural brand — expanding
                  into diverse farm products while maintaining the highest standards of
                  animal welfare, environmental stewardship, and customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Values"
            title="Our Core Values"
            description="The principles that guide every decision on our farm."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-8">
                  <Leaf className="mx-auto mb-4 size-8 text-gold" />
                  <h3 className="font-heading font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Sprout className="mb-4 size-10 text-gold" />
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Sustainable Farming Practices
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Sustainability isn&apos;t a buzzword for us — it&apos;s how we farm every
                single day. Our practices protect the environment while producing
                healthier, more resilient livestock.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {practices.map((practice) => (
                <li
                  key={practice}
                  className="flex items-start gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm backdrop-blur-sm"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Growth"
            title="Future Growth Plans"
            description="Expanding our impact while staying true to our roots."
          />
          <ul className="mx-auto max-w-2xl space-y-4">
            {futurePlans.map((plan, i) => (
              <li
                key={plan}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white dark:bg-gold dark:text-forest">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{plan}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
