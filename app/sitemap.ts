import type { MetadataRoute } from "next";
import { products } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://solucionesensobres.com";
  const paths = [
    "",
    "/productos",
    "/servicios",
    "/cotiza",
    "/contacto",
    "/politica-de-privacidad",
    ...products.map((product) => `/productos/${product.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
