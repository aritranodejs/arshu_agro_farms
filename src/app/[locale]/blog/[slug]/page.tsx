import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { Link } from "@/i18n/navigation";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { formatPublishedDate } from "@/lib/format";
import { createMetadata } from "@/lib/seo";
import { getArticleSchema } from "@/lib/schema";
import { routing } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);
  if (!post) {
    const t = await getTranslations({ locale, namespace: "common" });
    return { title: t("articleNotFound") };
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    locale,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("common");
  const post = getBlogPostBySlug(slug, locale);
  if (!post) notFound();

  const articleSchema = getArticleSchema(post);
  const paragraphs = post.content.split("\n\n");

  return (
    <PageWrapper>
      <JsonLd data={articleSchema} />
      <article>
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent" />
        </div>
        <div className="container mx-auto px-4 py-12">
          <Button
            variant="ghost"
            render={<Link href="/blog" />}
            nativeButton={false}
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="size-4" />
            {t("backToBlog")}
          </Button>
          <Badge className="mb-4 bg-gold text-forest">{post.category}</Badge>
          <h1 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              {formatPublishedDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-4" />
              {post.readTime}
            </span>
            <span>{t("byAuthor", { author: post.author })}</span>
          </div>
          <div className="prose prose-lg mt-10 max-w-3xl dark:prose-invert">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.includes(":**")) {
                const [heading, ...rest] = para.split(":**");
                return (
                  <div key={i} className="mb-6">
                    <h2 className="font-heading text-xl font-bold text-forest dark:text-gold">
                      {heading.replace(/\*\*/g, "")}
                    </h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {rest.join(":**")}
                    </p>
                  </div>
                );
              }
              return (
                <p
                  key={i}
                  className="mb-4 text-muted-foreground leading-relaxed"
                >
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
