import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example";
  const now = new Date().toISOString();
  const routes = [
    "",
    "/experience",
    "/projects",
    "/skills",
    "/about",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
