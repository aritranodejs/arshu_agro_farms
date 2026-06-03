import type { Goat, FAQItem, Testimonial, GalleryImage } from "@/types";
import { images } from "@/data/images";
import { getGoatStockData } from "@/data/goats";
export function getNavLinks(t: (key: string) => string) {
  return [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/goats", label: t("goats") },
    { href: "/breeding", label: t("breeding") },
    { href: "/gallery", label: t("gallery") },
    { href: "/blog", label: t("blog") },
    { href: "/testimonials", label: t("testimonials") },
    { href: "/contact", label: t("contact") },
  ];
}

export function getStatistics(t: (key: string) => string) {
  return [
    { id: "goats", value: 500, suffix: "+", label: t("goats") },
    { id: "customers", value: 100, suffix: "+", label: t("customers") },
    { id: "experience", value: 5, suffix: "+", label: t("experience") },
    { id: "ethical", value: 100, suffix: "%", label: t("ethical") },
  ];
}

export function getWhyChooseUs(t: (key: string) => string) {
  return [0, 1, 2, 3, 4, 5].map((i) => ({
    title: t(`whyChoose.${i}.title`),
    description: t(`whyChoose.${i}.description`),
    icon: ["Award", "Leaf", "ShieldCheck", "Dna", "Handshake", "MapPin"][i],
  }));
}

export function getCoreValues(t: (key: string) => string) {
  return [0, 1, 2, 3].map((i) => ({
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`),
  }));
}

export function getFaqItems(t: (key: string) => string): FAQItem[] {
  return [0, 1, 2, 3, 4, 5].map((i) => ({
    id: String(i + 1),
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`),
  }));
}

export function getGoats(
  t: (key: string) => string,
  health: (key: string) => string
): Goat[] {
  const stock = getGoatStockData();
  return stock.map((g, i) => ({
    ...g,
    breed: t("common.breed"),
    label: t(`goats.${i}.label`),
    description: t(`goats.${i}.description`) || undefined,
    healthStatus:
      g.healthStatus === "Excellent"
        ? (health("common.healthExcellent") as Goat["healthStatus"])
        : (health("common.healthGood") as Goat["healthStatus"]),
    vaccinationStatus: health("common.vaccinatedFull") as Goat["vaccinationStatus"],
  }));
}

export function getGalleryImages(t: (key: string) => string): GalleryImage[] {
  const srcs = [
    images.goatFarm,
    images.goatClose,
    images.farmLandscape,
    images.goatYoung,
    images.goatGrazing,
    images.goatPortrait,
    images.goatField,
    images.goatBrown,
    images.goatHerd,
    images.farmPasture,
    images.goatWhite,
    images.goatGroup,
  ];
  const categories: GalleryImage["category"][] = [
    "goats",
    "goats",
    "facilities",
    "goats",
    "daily-life",
    "goats",
    "daily-life",
    "goats",
    "goats",
    "facilities",
    "daily-life",
    "daily-life",
  ];
  const sizes = [
    [800, 600],
    [800, 1000],
    [800, 500],
    [800, 700],
    [800, 900],
    [800, 650],
    [800, 600],
    [800, 800],
    [800, 500],
    [800, 550],
    [800, 600],
    [800, 750],
  ] as const;

  return srcs.map((src, i) => ({
    id: String(i + 1),
    src,
    alt: t(`galleryAlts.${i}`),
    category: categories[i],
    width: sizes[i][0],
    height: sizes[i][1],
  }));
}

export function getTestimonials(
  t: (key: string) => string
): (Testimonial & { name: string })[] {
  const enNames = [
    "Rajesh Mukherjee",
    "Priya Das",
    "Abdul Rahman",
    "Sunita Banerjee",
    "Mohammad Ali",
    "Ananya Ghosh",
  ];
  return [0, 1, 2, 3, 4, 5].map((i) => ({
    id: String(i + 1),
    name: enNames[i],
    content: t(`testimonials.${i}.content`),
    role: t(`testimonials.${i}.role`),
    location: t(`testimonials.${i}.location`),
    rating: 5,
    featured: i < 3,
  }));
}

export function getStringList(
  t: (key: string) => string,
  prefix: string,
  count: number
) {
  return Array.from({ length: count }, (_, i) => t(`${prefix}.${i}`));
}
