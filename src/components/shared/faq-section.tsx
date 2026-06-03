"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFaqItems } from "@/lib/content";

export function FAQSection() {
  const t = useTranslations("home");
  const tFaq = useTranslations();
  const faqItems = getFaqItems((key) => tFaq(key));

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label={t("faqLabel")}
          title={t("faqTitle")}
          description={t("faqDesc")}
        />
        <Accordion className="mx-auto max-w-3xl">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
