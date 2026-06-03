"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("locale");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border/60 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "rounded-md px-2.5 py-1.5 transition-colors",
            locale === loc
              ? "bg-forest text-white dark:bg-gold dark:text-forest"
              : "text-muted-foreground hover:text-foreground"
          )}
          lang={loc}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
