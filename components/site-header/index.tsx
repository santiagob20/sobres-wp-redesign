"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ColombiaFlag, Logo } from "@/components/logo";
import { company, nav } from "@/lib/site";
import { cn } from "cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 md:px-12 md:py-6">
        <Link href="/#inicio" aria-label="SOBRYPAL, ir al inicio" onClick={() => setOpen(false)}>
          <Logo alt="" priority />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            aria-label={`${company.addressLine}, ${company.city}`}
            className="flex items-center gap-3 text-right text-[0.95rem] leading-tight text-[#1a1a1a] md:text-xl"
          >
            <ColombiaFlag />
            <span className="hidden md:block">
              {company.addressLine}
              <br />
              {company.city}
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-brand md:hidden"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav id="menu-principal" aria-label="Principal" className="bg-brand text-white">
        <ul
          className={cn(
            "mx-auto max-w-[1280px] flex-col md:grid md:grid-cols-5",
            open ? "flex" : "hidden md:grid",
          )}
        >
          {nav.map((item) => {
            const className =
              "block px-6 py-4 text-center text-xl font-normal tracking-wide hover:bg-white/10 focus-visible:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:py-6 md:text-[1.35rem]";
            const external = "external" in item && item.external;
            return (
              <li key={item.label}>
                {external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className={className}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
