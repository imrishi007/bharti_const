import type { MetadataRoute } from "next";
import { configuredSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const url = configuredSiteUrl();
  return url ? {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", url).href,
  } : { rules: { userAgent: "*", disallow: "/" } };
}
