"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useIsClient } from "@/hooks/use-is-client";

export function WhatsAppFloat() {
  const isClient = useIsClient();
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello! I'm interested in Arshu Agro Farms goats."
  )}`;

  const className =
    "fixed bottom-24 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-shadow hover:shadow-xl hover:scale-105 active:scale-95";

  if (!isClient) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-7" />
      </a>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={false}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" />
    </motion.a>
  );
}
