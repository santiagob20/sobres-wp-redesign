"use client";

import { usePathname } from "next/navigation";

export function FooterMap({ src, mapsUrl }: { src: string; mapsUrl: string }) {
  const pathname = usePathname()?.replace(/\/$/, "") ?? "";
  if (pathname === "/contacto") return null;

  return (
    <>
      <div className="mt-3 overflow-hidden rounded-md border border-[#e4e4e4]">
        <iframe
          title="Mapa del taller SOBRYPAL en Bogotá"
          src={src}
          className="h-52 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-brand hover:underline">
        Abrir en Maps
      </a>
    </>
  );
}
