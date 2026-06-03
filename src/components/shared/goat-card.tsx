"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewFadeUp } from "@/lib/motion";
import { Scale, Calendar, Syringe, ShieldCheck } from "lucide-react";
import type { Goat } from "@/types";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface GoatCardProps {
  goat: Goat;
  index?: number;
}

export function GoatCard({ goat, index = 0 }: GoatCardProps) {
  const t = useTranslations("common");
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    t("whatsappInquiry", {
      label: goat.label,
      breed: goat.breed,
      age: goat.age,
    })
  )}`;

  return (
    <motion.div
      {...viewFadeUp}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...viewFadeUp.transition, delay: index * 0.08 }}
    >
      <Card className="group overflow-hidden border-border/60 transition-shadow hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={goat.image}
            alt={t("goatImageAlt", { label: goat.label, breed: goat.breed })}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-3 left-3 bg-forest text-white">
            {goat.breed}
          </Badge>
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 border-0 bg-white/95 text-forest shadow-sm"
          >
            {goat.healthStatus}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <h3 className="font-heading text-xl font-bold leading-snug">
            {goat.label}
          </h3>
          {goat.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {goat.description}
            </p>
          )}
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="size-4 shrink-0 text-forest dark:text-gold" />
            {goat.age}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Scale className="size-4 shrink-0 text-forest dark:text-gold" />
            {goat.weight}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-forest dark:text-gold" />
            {goat.healthStatus}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Syringe className="size-4 shrink-0 text-forest dark:text-gold" />
            <span className="line-clamp-1">{goat.vaccinationStatus}</span>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            render={
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
            className="flex-1 bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
          >
            {t("inquireNow")}
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            className="flex-1"
          >
            {t("contact")}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
