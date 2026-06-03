"use client";

import { useState } from "react";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "goats", label: "Goats" },
  { id: "facilities", label: "Facilities" },
  { id: "daily-life", label: "Daily Life" },
] as const;

export function GalleryClient() {
  const [active, setActive] = useState<string>("all");

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
            {cat.label}
          </button>
        ))}
      </div>
      <GalleryGrid images={filtered} columns={3} />
    </>
  );
}
