import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/services/shop/checkout",
        "/services/shop/success",
        "/shop/checkout",
        "/shop/success",
        "/api/",
      ],
    },
    sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml`,
  };
}
