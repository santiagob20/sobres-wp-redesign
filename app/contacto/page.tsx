import { PageHero } from "@/components/page-hero";
import { WhatsappButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/seo";
import { company, quoteWhatsapp } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto del taller en Bogotá",
  description:
    "Taller SOBRYPAL en la Carrera 57 # 70c-32, Bogotá. Fabricamos sobres para clientes en toda Colombia. WhatsApp 318 365 9759.",
  path: "/contacto",
});

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=16&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="El taller está en Bogotá"
        lede="Fabricamos en Bogotá y atendemos pedidos en toda Colombia. Escríbenos por WhatsApp para cotizar, pedir una muestra o confirmar una entrega."
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
            <ul className="mt-8 space-y-3 text-lg">
              <li>
                <a
                  href={company.facebook}
                  className="inline-flex items-center gap-2.5 hover:text-brand"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={company.instagram}
                  className="inline-flex items-center gap-2.5 hover:text-brand"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
