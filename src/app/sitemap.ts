import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.colorknit.in";
  const now = new Date();

  const staticRoutes: { path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/about", changeFrequency: "weekly", priority: 0.9 },
    { path: "/corporate-events", changeFrequency: "weekly", priority: 0.9 },
    { path: "/annual-day-gala-events", changeFrequency: "weekly", priority: 0.9 },
    { path: "/employee-engagement", changeFrequency: "weekly", priority: 0.9 },
    { path: "/family-day-outing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/town-hall-rr", changeFrequency: "weekly", priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly", priority: 0.9 },
    { path: "/gallery/page/2", changeFrequency: "weekly", priority: 0.8 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/exhibitions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/services/weddings", changeFrequency: "weekly", priority: 0.8 },
    { path: "/services/corporate-gifting", changeFrequency: "weekly", priority: 0.8 },
    { path: "/services/sports", changeFrequency: "weekly", priority: 0.8 },
    { path: "/services/mice", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

