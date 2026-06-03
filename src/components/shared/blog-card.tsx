"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { viewFadeUp } from "@/lib/motion";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatPublishedDate } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const t = useTranslations("common");
  return (
    <motion.div
      {...viewFadeUp}
      transition={{ ...viewFadeUp.transition, delay: index * 0.08 }}
    >
      <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <Badge className="absolute top-3 left-3 bg-gold text-forest">
              {post.category}
            </Badge>
          </div>
          <CardHeader>
            <h3 className="font-heading text-lg font-bold leading-snug group-hover:text-forest dark:group-hover:text-gold">
              {post.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                {formatPublishedDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-sm font-medium text-forest dark:text-gold">
              {t("blogRead")} →
            </span>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
}
