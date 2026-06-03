"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { getBlogPosts } from "@/data/blog";
import { BlogCard } from "@/components/shared/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categoryKeys = ["All", "Feeding", "Health", "Breeding", "Guides"] as const;

export function BlogList({ locale }: { locale: string }) {
  const t = useTranslations("pages.blog");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const posts = getBlogPosts(locale);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;
      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [search, category, posts]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-forest text-white dark:bg-gold dark:text-forest"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat === "All"
                ? t("filterAll")
                : t(`categories.${cat}` as "categories.Feeding")}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">{t("empty")}</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
