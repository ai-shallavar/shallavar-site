import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shallavar.com";

  // Static pages
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/plans`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    // Service pages
    { url: `${baseUrl}/services/web-development`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services/mobile-apps`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services/ui-ux-design`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services/cloud-deployment`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services/dashboards`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/services/support`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    // Insight articles
    { url: `${baseUrl}/insights/cloud-architecture-patterns`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/insights/core-web-vitals-seo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/insights/editorial-design-digital`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/insights/native-vs-cross-platform`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/insights/the-future-of-digital-excellence`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/insights/why-modern-tech-stacks`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return staticPages;
}