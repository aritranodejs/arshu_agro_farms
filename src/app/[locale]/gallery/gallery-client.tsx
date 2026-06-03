"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { getGalleryImages } from "@/lib/content";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", labelKey: "filterAll" as const },
  { id: "goats", labelKey: "filterGoats" as const },
  { id: "facilities", labelKey: "filterFacilities" as const },
  { id: "daily-life", labelKey: "filterDaily" as const },
] as const;

export function GalleryClient() {
  const t = useTranslations("pages.gallery");
  const tGallery = useTranslations();
  const [active, setActive] = useState<string>("all");
  const galleryImages = getGalleryImages((key) => tGallery(key));

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              active === cat.id
                ? "bg-forest text-white dark:bg-gold dark:text-forest"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>
      <GalleryGrid images={filtered} columns={3} />
    </>
  );
}
