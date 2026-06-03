import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

export async function pageMetadata(
  locale: string,
  metaKey: string,
  path: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.${metaKey}` });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}
