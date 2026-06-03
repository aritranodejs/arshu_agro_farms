"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { viewFadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/shared/newsletter";

export function CTASection() {
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
              Ready to Start Your Goat Farming Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Contact us today for premium Black Bengal goats, breeding stock, or
              schedule a farm visit. We&apos;re here to help you succeed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                render={<Link href="/contact" />}
                nativeButton={false}
                className="bg-gold text-forest hover:bg-gold-light"
              >
                Get in Touch
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
              <p className="mb-4 text-sm text-white/80">
                Subscribe for farm updates and goat farming tips
              </p>
              <Newsletter />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
