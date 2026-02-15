import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rupaligera.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/work", "/work/*", "/unlock"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
