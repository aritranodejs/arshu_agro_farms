import type { Metadata } from "next";
import { Globe, Mail, MapPin, MessageCircle, Phone, Share2, Video } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/shared/contact-form";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Arshu Agro Farms — phone, email, WhatsApp, farm visit requests, and location map.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <PageWrapper>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out for goat inquiries, farm visits, or partnerships."
        image={images.goatFarm}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold">Send a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-forest dark:hover:text-gold"
                  >
                    <Phone className="size-5 text-forest dark:text-gold" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-forest dark:hover:text-gold"
                  >
                    <Mail className="size-5 text-forest dark:text-gold" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-[#25D366]"
                  >
                    <MessageCircle className="size-5 text-[#25D366]" />
                    WhatsApp Chat
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-forest dark:text-gold" />
                    {siteConfig.address}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-forest hover:text-white"
                      aria-label="Facebook"
                    >
                      <Share2 className="size-5" />
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-forest hover:text-white"
                      aria-label="Instagram"
                    >
                      <Globe className="size-5" />
                    </a>
                  )}
                  {siteConfig.social.youtube && (
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-forest hover:text-white"
                      aria-label="YouTube"
                    >
                      <Video className="size-5" />
                    </a>
                  )}
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arshu Agro Farms Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
