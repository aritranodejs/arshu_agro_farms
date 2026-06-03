export interface Goat {
  id: string;
  /** Stock category shown to buyers (no individual animal names) */
  label: string;
  image: string;
  breed: string;
  age: string;
  weight: string;
  healthStatus: "Excellent" | "Good" | "Fair";
  vaccinationStatus: "Fully Vaccinated" | "Partially Vaccinated" | "Scheduled";
  featured?: boolean;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Feeding" | "Health" | "Breeding" | "Guides";
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "facilities" | "goats" | "daily-life";
  width: number;
  height: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  mapEmbedUrl: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}
