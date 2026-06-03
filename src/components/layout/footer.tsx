import { getTranslations } from "next-intl/server";
import { Globe, Leaf, Mail, MapPin, Phone, Share2, Video } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { getNavLinks } from "@/lib/content";
import { Newsletter } from "@/components/shared/newsletter";
import { Separator } from "@/components/ui/separator";

export async function Footer() {
  const t = await getTranslations();
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const year = new Date().getFullYear();
  const navLinks = getNavLinks((key) => tNav(key));

  return (
    <footer className="border-t border-border bg-forest text-white dark:bg-card dark:text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gold text-forest">
                <Leaf className="size-5" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold">{t("site.name")}</p>
                <p className="text-sm text-white/70 dark:text-muted-foreground">
                  {t("site.tagline")}
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75 dark:text-muted-foreground">
              {t("site.description")}
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-gold hover:text-forest"
                  aria-label="Facebook"
                >
                  <Share2 className="size-4" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-gold hover:text-forest"
                  aria-label="Instagram"
                >
                  <Globe className="size-4" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-gold hover:text-forest"
                  aria-label="YouTube"
                >
                  <Video className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              {tFooter("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-gold dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              {tFooter("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75 dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {t("site.address")}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone className="size-4 text-gold" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Mail className="size-4 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              {tFooter("newsletter")}
            </h3>
            <p className="mt-4 text-sm text-white/75 dark:text-muted-foreground">
              {tFooter("newsletterDesc")}
            </p>
            <Newsletter variant="footer" />
          </div>
        </div>

        <Separator className="my-8 bg-white/20 dark:bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row dark:text-muted-foreground">
          <p>
            © {year} {t("site.name")}. {t("site.copyright")}
          </p>
          <p>{t("site.footerLine")}</p>
        </div>
      </div>
    </footer>
  );
}
