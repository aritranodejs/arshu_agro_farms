import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { BackToTop } from "@/components/shared/back-to-top";
import { createMetadata } from "@/lib/seo";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${playfair.variable} min-h-screen font-sans antialiased`}
        suppressHydrationWarning
      >
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
      </body>
    </html>
  );
}
