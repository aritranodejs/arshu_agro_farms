"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView(0.3);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [display]);

  return (
    <div ref={ref}>
      <motion.span className="font-heading text-4xl font-bold text-forest sm:text-5xl dark:text-gold">
        {prefix}
        {displayValue}
        {suffix}
      </motion.span>
    </div>
  );
}
