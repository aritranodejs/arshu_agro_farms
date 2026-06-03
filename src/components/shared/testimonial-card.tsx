"use client";

import { motion } from "framer-motion";
import { viewFadeUp } from "@/lib/motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      {...viewFadeUp}
      transition={{ ...viewFadeUp.transition, delay: index * 0.1 }}
    >
      <Card className="relative h-full border-border/60 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-8">
          <Quote className="absolute top-4 right-4 size-8 text-gold/30" />
          <div className="mb-4 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-4 ${
                  i < testimonial.rating
                    ? "fill-gold text-gold"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            &ldquo;{testimonial.content}&rdquo;
          </p>
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-heading font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} · {testimonial.location}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
