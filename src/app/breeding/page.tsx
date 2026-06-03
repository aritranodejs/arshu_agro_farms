import type { Metadata } from "next";
import { Dna, Heart, Shield, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Breeding Program",
  description:
    "Our selective Black Bengal breeding program — genetics, welfare standards, and health management.",
  path: "/breeding",
});

const standards = [
  {
    title: "Breed Purity",
    description:
      "We maintain authentic Black Bengal bloodlines with documented ancestry, ensuring genetic integrity in every generation.",
    icon: Dna,
  },
  {
    title: "Selective Pairing",
    description:
      "Bucks and does are matched based on conformation, health history, twinning rates, and complementary traits.",
    icon: Heart,
  },
  {
    title: "Health Screening",
    description:
      "Pre-breeding veterinary exams, disease testing, and body condition scoring before any mating is approved.",
    icon: Stethoscope,
  },
  {
    title: "Welfare First",
    description:
      "Natural mating cycles respected, adequate rest periods for does, and stress-free kidding environments.",
    icon: Shield,
  },
];

const geneticsPoints = [
  "Multi-generation pedigree tracking for all breeding stock",
  "Focus on twinning rate, growth rate, and disease resistance",
  "Avoidance of inbreeding through strategic outcrossing",
  "Regular genetic diversity assessments",
  "Performance records for offspring evaluation",
];

const healthProcess = [
  { step: "01", title: "Pre-Breeding Exam", desc: "Full veterinary health check for both buck and doe" },
  { step: "02", title: "Nutrition Program", desc: "Optimized diet 30 days before and during pregnancy" },
  { step: "03", title: "Pregnancy Monitoring", desc: "Regular ultrasounds and weight tracking" },
  { step: "04", title: "Kidding Support", desc: "Supervised kidding with emergency veterinary backup" },
  { step: "05", title: "Offspring Care", desc: "Colostrum verification, tagging, and vaccination scheduling" },
  { step: "06", title: "Record Keeping", desc: "Digital records ready for admin dashboard integration" },
];

export default function BreedingPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Breeding Program"
        description="Selective genetics and welfare-first practices for superior Black Bengal offspring."
        image={images.breedingPageHero}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Standards"
            title="Our Breeding Standards"
            description="Every breeding decision is made with long-term herd quality and animal welfare in mind."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((item) => (
              <Card key={item.title} className="border-border/60">
                <CardContent className="pt-8">
                  <item.icon className="mb-4 size-10 text-forest dark:text-gold" />
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Genetics"
                title="Genetics & Lineage"
                align="left"
                className="mb-6"
              />
              <ul className="space-y-3">
                {geneticsPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Dna className="mt-0.5 size-5 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                label="Welfare"
                title="Animal Welfare Practices"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our animals are never subjected to overcrowding, forced breeding
                  beyond healthy limits, or inadequate nutrition. Each goat has
                  access to clean shelter, fresh water, and appropriate social groups.
                </p>
                <p>
                  We follow international animal welfare guidelines adapted for
                  tropical climates, with regular third-party style audits conducted
                  by our veterinary partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Healthcare"
            title="Health Management Process"
            description="A systematic approach from breeding through kidding and beyond."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {healthProcess.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-6">
                  <span className="font-heading text-3xl font-bold text-gold/60">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-heading font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
