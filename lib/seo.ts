import type { Metadata } from "next";
import { company, products } from "@/lib/site";

export const siteUrl = "https://solucionesensobres.com";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export function withBasePath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

function canonicalPath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export const siteDescription =
  "SOBRYPAL fabrica sobres de distintos tamaños en Bogotá y atiende pedidos en toda Colombia. Papel, medida e impresión para diezmo, correspondencia, e-commerce, centros médicos y eventos.";

const shareImage = {
  url: "/assets/logo-sobrypal.png",
  width: 1024,
  height: 247,
  alt: "SOBRYPAL",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalPath(path) },
    openGraph: {
      title,
      description,
      url: canonicalPath(path),
      locale: "es_CO",
      type: "website",
      siteName: company.name,
      images: [shareImage],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Manufacturer", "LocalBusiness"],
    "@id": `${siteUrl}/#negocio`,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    image: `${siteUrl}/assets/logo-sobrypal.png`,
    telephone: `+${company.phoneE164}`,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine,
      addressLocality: company.city,
      addressCountry: "CO",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    knowsAbout: [
      "Fabricación de sobres",
      "Sobres a la medida",
      "Sobres de distintos tamaños",
      "Impresión de sobres",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sobres SOBRYPAL",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.summary,
          url: `${siteUrl}/productos/${product.slug}`,
        },
      })),
    },
    sameAs: [company.facebook, company.instagram],
  };
}

export function productJsonLd(product: {
  slug: string;
  name: string;
  summary: string;
}) {
  const url = `${siteUrl}/productos/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Productos", item: `${siteUrl}/productos` },
          { "@type": "ListItem", position: 3, name: product.name, item: url },
        ],
      },
      {
        "@type": "Product",
        name: product.name,
        description: product.summary,
        url,
        brand: { "@type": "Brand", name: company.name },
        manufacturer: { "@id": `${siteUrl}/#negocio` },
        category: "Sobres",
        areaServed: { "@type": "Country", name: "Colombia" },
      },
    ],
  };
}
