import Link from "next/link";
import { Globe, Leaf, Mail, MapPin, Phone, Share2, Video } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Newsletter } from "@/components/shared/newsletter";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

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
                <p className="font-heading text-lg font-bold">{siteConfig.name}</p>
                <p className="text-sm text-white/70 dark:text-muted-foreground">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75 dark:text-muted-foreground">
              {siteConfig.description}
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
              Quick Links
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
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75 dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {siteConfig.address}
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
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/75 dark:text-muted-foreground">
              Get farming tips, new stock alerts, and farm updates.
            </p>
            <Newsletter variant="footer" />
          </div>
        </div>

        <Separator className="my-8 bg-white/20 dark:bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row dark:text-muted-foreground">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Premium Black Bengal Goat Farming · West Bengal, India</p>
        </div>
      </div>
    </footer>
  );
}
