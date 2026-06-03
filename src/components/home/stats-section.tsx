"use client";

import { motion } from "framer-motion";
import { viewFadeUp } from "@/lib/motion";
import { statistics } from "@/data/site";
import { images } from "@/data/images";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-white dark:bg-forest/90">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${images.pageBg})` }}
      />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              {...viewFadeUp}
              transition={{ ...viewFadeUp.transition, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="[&_span]:text-gold">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
