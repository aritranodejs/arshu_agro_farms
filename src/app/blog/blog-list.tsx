"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/shared/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = ["All", "Feeding", "Health", "Breeding", "Guides"] as const;

export function BlogList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;
      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-forest text-white dark:bg-gold dark:text-forest"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No articles found. Try a different search or category.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
