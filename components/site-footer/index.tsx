import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { Logo } from "@/components/logo";
import { company, footerProducts, quoteWhatsapp } from "@/lib/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6e6e6] bg-white">
      <div className="mx-auto max-w-[1280px] px-5 pt-4 pb-16 md:px-12 md:py-5">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Logo className="h-8! md:h-9!" />
          <p className="text-sm leading-snug text-[#3c4650]">
            {company.addressLine}, {company.city}
            <span className="mx-2 text-[#c5c5c5]" aria-hidden="true">
              ·
            </span>
            <a href={company.whatsapp} className="text-[#4d8627] hover:underline">
              WhatsApp {company.phoneDisplay}
            </a>
          </p>
          <div className="flex items-center gap-2">
            <SocialLink href={company.facebook} label="Facebook de SOBRYPAL">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={company.instagram} label="Instagram de SOBRYPAL">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={company.whatsapp} label="WhatsApp de SOBRYPAL">
              <WhatsappIcon />
            </SocialLink>
          </div>
        </div>
        <ul className="mt-3 hidden flex-wrap gap-x-4 gap-y-1 text-sm text-[#3c4650] md:flex">
          {footerProducts.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#6b7280]">
          <span>© {new Date().getFullYear()} {company.legalName}</span>
          <a href={quoteWhatsapp} target="_blank" rel="noreferrer" className="hover:text-brand">
            Cotizar
          </a>
          <Link href="/politica-de-privacidad" className="hover:text-brand">
            Privacidad
          </Link>
          <CookieSettingsButton className="bg-transparent p-0 text-left font-sans text-xs text-inherit hover:text-brand">
            Cookies
          </CookieSettingsButton>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-brand">
            Cómo llegar
          </a>
          <a
            href="https://www.vecteezy.com/free-videos/paper-cutting"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            Videos: Vecteezy
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-8 place-items-center rounded-md bg-brand text-white"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
    </svg>
  );
}
