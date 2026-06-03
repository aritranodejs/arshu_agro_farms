"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { viewScale } from "@/lib/motion";
import { getGalleryImages } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const tRoot = useTranslations();
  const previewImages = getGalleryImages((key) => tRoot(key)).slice(0, 6);

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label={t("galleryLabel")}
          title={t("galleryTitle")}
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              {...viewScale}
              transition={{ ...viewScale.transition, delay: index * 0.05 }}
              className={index === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            size="lg"
            render={<Link href="/gallery" />}
            nativeButton={false}
            className="bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
          >
            {tCommon("viewFullGallery")}
          </Button>
        </div>
      </div>
    </section>
  );
}
