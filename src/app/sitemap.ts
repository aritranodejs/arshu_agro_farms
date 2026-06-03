import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { baseUrl } from "@/lib/seo";
import { routing } from "@/i18n/routing";

function localePath(locale: string, path: string) {
  if (locale === routing.defaultLocale) return path || "/";
  return `/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/goats",
    "/breeding",
    "/gallery",
    "/blog",
    "/testimonials",
    "/contact",
  ];

  const staticPages = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const blogPages = routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}${localePath(locale, `/blog/${post.slug}`)}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...blogPages];
}
