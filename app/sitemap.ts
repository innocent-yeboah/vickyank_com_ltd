import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    "",
    "/about",
    "/services",
    "/services/mining",
    "/services/gold-trading",
    "/services/equipment",
    "/services/spare-parts",
    "/services/luxury-cars",
    "/services/shop",
    "/newsletter",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/services/shop" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
