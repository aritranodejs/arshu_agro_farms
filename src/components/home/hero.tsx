import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export async function Hero() {
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const tSite = await getTranslations("site");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={images.hero}
        alt={t("heroImageAlt")}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/70 to-forest/90" />

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 text-center text-white">
        <div className="hero-scale-in mx-auto mb-8 flex size-20 items-center justify-center rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md">
          <Leaf className="size-10 text-gold" />
        </div>

        <p className="hero-fade-up hero-delay-1 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {tSite("name")}
        </p>

        <h1 className="hero-fade-up hero-delay-2 mx-auto mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t("heroTitle")}
        </h1>

        <p className="hero-fade-up hero-delay-3 mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          {t("heroSubtitle")}
        </p>

        <p className="hero-fade-in hero-delay-4 mt-2 text-gold italic">
          {tSite("tagline")}
        </p>

        <div className="hero-fade-up hero-delay-5 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            render={<Link href="/gallery" />}
            nativeButton={false}
            className="bg-gold px-8 text-forest hover:bg-gold-light"
          >
            {tCommon("exploreFarm")}
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/contact" />}
            nativeButton={false}
            className="border-white/40 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20"
          >
            {tCommon("getInTouch")}
          </Button>
        </div>
      </div>

      <div className="hero-fade-in hero-delay-5 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
          <div className="hero-scroll-bounce size-1.5 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
