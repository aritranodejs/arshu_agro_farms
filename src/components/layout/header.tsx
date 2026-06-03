"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  const isSolid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isSolid
          ? "border-b border-border/60 bg-background/95 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-xl transition-colors",
              isSolid
                ? "bg-forest text-white"
                : "bg-white/20 text-white backdrop-blur-sm group-hover:bg-white/30"
            )}
          >
            <Leaf className="size-5" />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-lg font-bold leading-tight",
                isSolid ? "text-foreground" : "text-white"
              )}
            >
              {siteConfig.name}
            </span>
            <span
              className={cn(
                "text-xs",
                isSolid ? "text-muted-foreground" : "text-white/80"
              )}
            >
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? isSolid
                    ? "bg-forest/10 text-forest dark:text-gold"
                    : "bg-white/20 text-white"
                  : isSolid
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className={cn(
              "hidden sm:inline-flex",
              isSolid
                ? "bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
                : "bg-gold text-forest hover:bg-gold-light"
            )}
          >
            Contact Us
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("lg:hidden", !isSolid && "text-white hover:bg-white/20")}
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="font-heading text-lg">
                {siteConfig.name}
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={false}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-forest/10 text-forest dark:text-gold"
                          : "hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className="mt-4 bg-forest hover:bg-forest-light"
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
