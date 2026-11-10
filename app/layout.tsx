import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { company } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});

const description =
  "Fabricante de sobres en Bogotá. Diezmo, correspondencia, e-commerce, centros médicos y eventos, con papel importado e impresión a la medida.";

export const metadata: Metadata = {
  metadataBase: new URL("https://solucionesensobres.com"),
  title: {
    default: "SOBRYPAL · Soluciones en sobres",
    template: "%s · SOBRYPAL",
  },
  description,
  openGraph: {
    title: "SOBRYPAL · Soluciones en sobres",
    description,
    locale: "es_CO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  image: "https://solucionesensobres.com",
  telephone: `+${company.phoneE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressLine,
    addressLocality: company.city,
    addressCountry: "CO",
  },
  url: "https://solucionesensobres.com",
  sameAs: [company.facebook, company.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#1a1a1a]">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-brand"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFab />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
