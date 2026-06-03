import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Bengali, Playfair_Display } from "next/font/google";
import { getLocale } from "next-intl/server";
import { ThemeScript } from "@/components/theme/theme-script";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({ locale });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${dmSans.variable} ${notoBengali.variable} ${playfair.variable}`}
    >
      <body
        className="min-h-screen font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
