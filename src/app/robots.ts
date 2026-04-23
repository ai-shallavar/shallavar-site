import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/insights/[slug]/"],
      },
    ],
    sitemap: "https://shallavar.com/sitemap.xml",
    host: "https://shallavar.com",
  };
}