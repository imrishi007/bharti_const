import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company, heritageImages } from "@/content/site";
import { configuredSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = configuredSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Bharti Construction Company | Civil Contractors in Banswara", template: "%s | Bharti Construction Company" },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.description,
    siteName: company.name,
    type: "website",
    ...(siteUrl && { images: [{ url: heritageImages.hero, width: 1672, height: 515, alt: "Illustrative bridge crossing a river" }] }),
  },
  icons: { icon: heritageImages.mark },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><Header /><main id="main">{children}</main><Footer /></body></html>;
}
