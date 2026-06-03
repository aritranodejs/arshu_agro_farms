import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getGoats } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoatCard } from "@/components/shared/goat-card";
import { Button } from "@/components/ui/button";

export async function FeaturedGoats() {
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const tRoot = await getTranslations();
  const goats = getGoats(
    (key) => tRoot(key),
    (key) => tRoot(key)
  ).filter((g) => g.featured);

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label={t("livestockLabel")}
          title={t("livestockTitle")}
          description={t("livestockDesc")}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {goats.map((goat, index) => (
            <GoatCard key={goat.id} goat={goat} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            render={<Link href="/goats" />}
            nativeButton={false}
            className="bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
          >
            {tCommon("viewFullInventory")}
          </Button>
        </div>
      </div>
    </section>
  );
}
