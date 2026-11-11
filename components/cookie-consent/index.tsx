"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { CONSENT_OPEN_EVENT, openConsentBanner, readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";

export function CookieSettingsButton({
  className = "inline-flex rounded-md bg-brand px-4 py-2.5 text-base font-semibold text-white hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  children = "Cambiar preferencia de cookies",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={() => openConsentBanner()}>
      {children}
    </button>
  );
}

export function CookieConsent() {
  const titleId = useId();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!visible || !banner) {
      document.documentElement.style.setProperty("--cookie-banner-offset", "0px");
      return;
    }

    const apply = () => {
      document.documentElement.style.setProperty("--cookie-banner-offset", `${banner.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(banner);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty("--cookie-banner-offset", "0px");
    };
  }, [visible]);

  function choose(value: ConsentChoice) {
    writeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="region"
      aria-labelledby={titleId}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d5dee6] bg-white pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="max-w-3xl">
          <p id={titleId} className="text-base font-semibold text-[#1a1a1a]">
            Cookies de analítica
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#3c4650] md:text-base">
            Esta página no pide ni guarda tus datos. Si aceptas, Firebase Analytics usa cookies para contar
            visitas. Si rechazas, no se activan y el sitio sigue igual.
          </p>
          <Link href="/politica-de-privacidad" className="mt-1 inline-block text-sm text-brand underline-offset-4 hover:underline">
            Política de privacidad
          </Link>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="inline-flex h-11 items-center rounded-md border border-[#c5ced6] bg-white px-4 text-base font-semibold text-[#1a1a1a] hover:bg-[#f4f7f9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="inline-flex h-11 items-center rounded-md bg-brand px-4 text-base font-semibold text-white hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
