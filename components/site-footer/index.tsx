import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { FooterMap } from "@/components/site-footer/footer-map";
import { Logo } from "@/components/logo";
import { company, footerProducts, quoteWhatsapp } from "@/lib/site";

export function SiteFooter() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=16&output=embed`;

  return (
    <footer className="bg-white">
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-4 px-6 py-6 md:gap-5 md:px-12">
          <a
            href={company.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de SOBRYPAL"
            className="grid size-12 place-items-center rounded-md bg-white text-brand md:size-[3.35rem]"
          >
            <FacebookIcon />
          </a>
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de SOBRYPAL"
            className="grid size-12 place-items-center rounded-md bg-white text-brand md:size-[3.35rem]"
          >
            <InstagramIcon />
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp de SOBRYPAL"
            className="grid size-12 place-items-center rounded-md bg-white text-brand md:size-[3.35rem]"
          >
            <WhatsappIcon />
          </a>
          <p className="text-xl tracking-[0.08em] md:text-[1.55rem]">SÍGUENOS</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-12 md:grid-cols-[1.1fr_1fr_1fr] md:px-12 md:py-14">
        <div>
          <Logo />
          <p className="mt-8 text-lg leading-snug md:text-xl">
            {company.addressLine}
            <br />
            {company.city}
          </p>
          <a
            href={company.whatsapp}
            className="mt-4 inline-block text-lg text-[#4d8627] underline-offset-4 hover:underline md:text-xl"
          >
            WhatsApp {company.phoneDisplay}
          </a>
          <ul className="mt-4 space-y-2 text-lg md:text-xl">
            <li>
              <a href={quoteWhatsapp} target="_blank" rel="noreferrer" className="hover:text-brand">
                Pedir cotización
              </a>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="hover:text-brand">
                Política de privacidad
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="bg-transparent p-0 text-left font-sans text-inherit hover:text-brand">
                Cookies
              </CookieSettingsButton>
            </li>
          </ul>
        </div>
        <ul className="space-y-3 text-lg md:pt-3 md:text-xl">
          {footerProducts.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[#5c6670]">TALLER</p>
          <p className="mt-1 text-lg font-semibold">Nos ubicamos en</p>
          <p className="text-[0.95rem] text-[#3c4650]">
            Cra. 57 #70c-32, {company.city}
          </p>
          <FooterMap
            src={mapSrc}
            mapsUrl={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`}
          />
        </div>
      </div>
      <div className="border-t border-[#eee] px-6 py-4 text-center text-sm text-[#5c6670]">
        © {new Date().getFullYear()} {company.legalName}. Fabricación de sobres en {company.city}.
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true" fill="currentColor">
      <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
    </svg>
  );
}
