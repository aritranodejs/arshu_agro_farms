"use client";

import {
  Award,
  Dna,
  Handshake,
  Leaf,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewFadeUp } from "@/lib/motion";
import { getWhyChooseUs } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Leaf,
  ShieldCheck,
  Dna,
  Handshake,
  MapPin,
};

export function WhyChoose() {
  const t = useTranslations("home");
  const tWhy = useTranslations();
  const whyChooseUs = getWhyChooseUs((key) => tWhy(key));

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label={t("whyLabel")}
          title={t("whyTitle")}
          description={t("whyDesc")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Leaf;
            return (
              <motion.div
                key={item.title}
                {...viewFadeUp}
                transition={{ ...viewFadeUp.transition, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/60 transition-all hover:border-forest/30 hover:shadow-lg dark:hover:border-gold/30">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-forest/10 text-forest dark:bg-gold/20 dark:text-gold">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
