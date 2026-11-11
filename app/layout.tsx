import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { JsonLd } from "@/components/json-ld";
import { businessJsonLd, siteDescription } from "@/lib/seo";
import { company } from "@/lib/site";
import "@/styles/globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://solucionesensobres.com"),
  title: {
    default: "SOBRYPAL · Fabricante de sobres en Bogotá",
    template: "%s · SOBRYPAL",
  },
  description: siteDescription,
  applicationName: company.name,
  robots: { index: true, follow: true },
  openGraph: {
    title: "SOBRYPAL · Fabricante de sobres en Bogotá",
    description: siteDescription,
    locale: "es_CO",
    type: "website",
    siteName: company.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#1a1a1a]">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-brand"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1 scroll-mt-[5.75rem] md:scroll-mt-[12.375rem]">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFab />
        <CookieConsent />
        <Analytics />
        <JsonLd data={businessJsonLd()} />
      </body>
    </html>
  );
}
