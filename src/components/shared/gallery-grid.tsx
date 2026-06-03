"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";
import { viewScale } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const colClass = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-2 sm:columns-3 lg:columns-4",
  }[columns];

  return (
    <>
      <div className={cn("gap-4 space-y-4", colClass)}>
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            {...viewScale}
            transition={{ ...viewScale.transition, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ aspectRatio: `${image.width}/${image.height}` }}
            />
            <div className="absolute inset-0 bg-forest/0 transition-colors group-hover:bg-forest/20" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close"
            >
              <X className="size-6" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="size-8" />
            </Button>
            <motion.div
              initial={false}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <p className="mt-4 text-center text-white/80">
                {images[lightboxIndex].alt}
              </p>
            </motion.div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next"
            >
              <ChevronRight className="size-8" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
