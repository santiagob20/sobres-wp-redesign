import type { Metadata } from "next";
import Link from "next/link";
import { quoteWhatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-white px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">404</p>
      <h1 className="mt-3 text-4xl font-bold">Esa página no está en el taller</h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-[#3c4650]">
        El enlace no corresponde a un producto ni a una sección. Vuelve al inicio o pide la cotización.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="inline-flex h-11 items-center rounded-full bg-brand px-6 font-semibold text-white">
          Ir al inicio
        </Link>
        <a
          href={quoteWhatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center rounded-full border border-brand px-6 font-semibold text-brand"
        >
          Cotizar
        </a>
      </div>
    </section>
  );
}
