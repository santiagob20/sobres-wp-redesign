import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { products } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/productos", priority: 0.9 },
    { path: "/servicios", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    ...products.map((product) => ({ path: `/productos/${product.slug}`, priority: 0.7 })),
    { path: "/politica-de-privacidad", priority: 0.2 },
  ];
  const lastModified = new Date();
  return paths.map(({ path, priority }) => ({
    url: path === "" ? `${siteUrl}/` : `${siteUrl}${path}/`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
