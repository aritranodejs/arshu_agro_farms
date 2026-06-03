import { siteConfig } from "@/data/site";
import { baseUrl } from "@/lib/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    image: `${baseUrl}/og-image.jpg`,
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "West Bengal",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    publisher: { "@id": `${baseUrl}/#organization` },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: { "@id": `${baseUrl}/#organization` },
    image: post.image,
  };
}

export function getFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
