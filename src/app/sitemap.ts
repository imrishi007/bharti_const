import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
import { journeyLink, navigation } from "@/content/site";
import { configuredSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = configuredSiteUrl();
  if (!url) return [];
  return [...navigation.map((item) => item.href), journeyLink.href, ...publishedProjects.map(({ slug }) => `/projects/${slug}`)]
    .map((path) => ({ url: new URL(path, url).href }));
}
