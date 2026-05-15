import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shallavar.com";

  // Use consistent lastModified dates based on current month
  const thisMonth = new Date();

  return [
    // Core pages
    { url: `${baseUrl}/`, lastModified: thisMonth, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/plans`, lastModified: thisMonth, changeFrequency: "weekly", priority: 0.8 },
    // Services (high priority for search visibility)
    { url: `${baseUrl}/services/web-development`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services/mobile-apps`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services/ui-ux-design`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/cloud-deployment`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/support`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.85 },
    // Insights / Blog articles (fresh content signal)
    { url: `${baseUrl}/insights`, lastModified: thisMonth, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/insights/cloud-architecture-patterns`, lastModified: new Date("2026-04-05"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/insights/core-web-vitals-seo`, lastModified: new Date("2026-03-22"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/insights/editorial-design-digital`, lastModified: new Date("2026-02-20"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/insights/native-vs-cross-platform`, lastModified: new Date("2026-03-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/insights/the-future-of-digital-excellence`, lastModified: new Date("2026-01-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/insights/why-modern-tech-stacks`, lastModified: new Date("2026-02-03"), changeFrequency: "yearly", priority: 0.7 },
  ];
}