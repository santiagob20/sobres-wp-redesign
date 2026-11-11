import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WhatsappButton } from "@/components/whatsapp-button";
import { company, quoteWhatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Taller SOBRYPAL en la Carrera 57 # 70c-32, Bogotá. WhatsApp 318 365 9759.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=16&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="El taller está en Bogotá"
        lede="Escríbenos por WhatsApp para cotizar, pedir una muestra o confirmar una entrega."
      />
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-2 md:px-14">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">Dirección</h2>
            <p className="mt-3 text-2xl leading-snug">
              {company.addressLine}
              <br />
              {company.city}
            </p>
            <WhatsappButton className="mt-6">WhatsApp {company.phoneDisplay}</WhatsappButton>
            <ul className="mt-8 space-y-2 text-lg">
              <li>
                <a href={company.facebook} className="hover:text-brand" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={company.instagram} className="hover:text-brand" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={quoteWhatsapp} target="_blank" rel="noreferrer" className="hover:text-brand">
                  Pedir cotización
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-md border border-[#e4e4e4]">
            <iframe
              title="Mapa del taller SOBRYPAL"
              src={mapSrc}
              className="h-80 w-full md:h-full md:min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
