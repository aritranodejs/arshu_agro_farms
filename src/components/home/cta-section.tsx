"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { viewFadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/shared/newsletter";

export function CTASection() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          {...viewFadeUp}
          className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center text-white sm:px-16"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${images.pageBg})` }}
          />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">{t("ctaDesc")}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                render={<Link href="/contact" />}
                nativeButton={false}
                className="bg-gold text-forest hover:bg-gold-light"
              >
                {tCommon("getInTouch")}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} />
                }
                nativeButton={false}
                className="border-white/40 text-white hover:bg-white/10"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </Button>
            </div>
            <div className="mx-auto mt-12 max-w-md">
              <p className="mb-4 text-sm text-white/80">{t("ctaNewsletter")}</p>
              <Newsletter />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
