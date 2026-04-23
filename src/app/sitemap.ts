import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shallavar.com";

  return [
     {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
     },
     {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
     },
     {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
     },
     {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/services/mobile-apps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/services/cloud-deployment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/services/dashboards`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/services/support`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
     },
     {
      url: `${baseUrl}/plans`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
     },
     {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
     },
     {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
     },
   ];
}