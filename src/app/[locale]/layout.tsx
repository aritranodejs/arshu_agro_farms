import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { BackToTop } from "@/components/shared/back-to-top";
import { routing } from "@/i18n/routing";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <JsonLd data={[getOrganizationSchema(), getWebsiteSchema()]} />
      <ThemeProvider>
        <MotionProvider>
          <Header />
          <main className="min-h-screen" suppressHydrationWarning>
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </MotionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
