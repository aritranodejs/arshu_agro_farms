"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems } from "@/data/site";

export function FAQSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our goats, breeding program, and farm visits."
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
