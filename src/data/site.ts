import type { SiteConfig, Statistic, FAQItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Arshu Agro Farms",
  tagline: "Raising Quality, Building Trust",
  description:
    "Premium Black Bengal goat farming through sustainable, ethical practices. Quality livestock, breeding stock, and trusted agricultural partnerships.",
  phone: "+91 79802 56713",
  email: "contact@arshuagrofarms.com",
  whatsapp: "917980256713",
  address:
    "Vill - Mayapur, Block - Budge Budge I, West Bengal, India - 743318",
  social: {
    facebook: "https://facebook.com/arshuagrofarms",
    instagram: "https://instagram.com/arshuagrofarms",
    youtube: "https://youtube.com/@arshuagrofarms",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mayapur,+Budge+Budge+I,+South+24+Parganas,+West+Bengal+743318&hl=en&z=14&output=embed",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/goats", label: "Our Goats" },
  { href: "/breeding", label: "Breeding" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const statistics: Statistic[] = [
  {
    id: "goats",
    value: 500,
    suffix: "+",
    label: "Healthy Goats Raised",
  },
  {
    id: "customers",
    value: 100,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    id: "experience",
    value: 5,
    suffix: "+",
    label: "Years of Farming Experience",
  },
  {
    id: "ethical",
    value: 100,
    suffix: "%",
    label: "Ethical Farming Practices",
  },
];

export const whyChooseUs = [
  {
    title: "Premium Black Bengal Breed",
    description:
      "We specialize in authentic Black Bengal goats known for superior meat quality, adaptability, and breeding potential.",
    icon: "Award",
  },
  {
    title: "Sustainable Practices",
    description:
      "Our farm follows eco-friendly feeding, rotational grazing, and waste management for long-term soil and animal health.",
    icon: "Leaf",
  },
  {
    title: "Complete Health Records",
    description:
      "Every goat comes with documented vaccination history, deworming schedules, and veterinary check-up records.",
    icon: "ShieldCheck",
  },
  {
    title: "Expert Breeding Program",
    description:
      "Selective genetics and welfare-first breeding standards ensure healthy offspring and reliable breeding stock.",
    icon: "Dna",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear pricing, honest communication, and post-sale support so you invest with confidence.",
    icon: "Handshake",
  },
  {
    title: "Farm Visits Welcome",
    description:
      "Schedule a visit to see our facilities, meet our herd, and experience our farming practices firsthand.",
    icon: "MapPin",
  },
];

export const coreValues = [
  {
    title: "Integrity",
    description: "Honest dealings and transparent farm practices in every customer interaction.",
  },
  {
    title: "Animal Welfare",
    description: "Healthy, stress-free environments with proper nutrition and veterinary care.",
  },
  {
    title: "Quality",
    description: "No compromises on breed standards, health, or customer satisfaction.",
  },
  {
    title: "Sustainability",
    description: "Farming methods that protect land, water, and future generations.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What breed of goats do you specialize in?",
    answer:
      "We specialize in Black Bengal goats, prized for their adaptability to local climates, excellent meat quality, and strong breeding characteristics.",
  },
  {
    id: "2",
    question: "Can I visit the farm before purchasing?",
    answer:
      "Yes! We encourage farm visits by appointment. Contact us via phone, WhatsApp, or our contact form to schedule a convenient time.",
  },
  {
    id: "3",
    question: "Are vaccination records provided with each goat?",
    answer:
      "Absolutely. Every goat sold includes complete vaccination and health documentation verified by our farm veterinarian.",
  },
  {
    id: "4",
    question: "Do you offer breeding stock?",
    answer:
      "Yes, we maintain a selective breeding program with documented genetics. Premium bucks and does are available for serious breeders.",
  },
  {
    id: "5",
    question: "What areas do you deliver to?",
    answer:
      "We primarily serve West Bengal and neighboring states. Delivery arrangements can be discussed based on distance and herd size.",
  },
  {
    id: "6",
    question: "Do you provide after-sale support?",
    answer:
      "We offer feeding guidance, health management tips, and ongoing consultation to help your goats thrive after purchase.",
  },
];
