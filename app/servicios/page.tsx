import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Fabricación de sobres con atención directa de taller, impresión bajo demanda, muestras de aprobación y entrega en Bogotá.",
};

const steps = [
  {
    title: "Cuéntanos el uso",
    text: "Qué va adentro, a quién llega y si el sobre se entrega en mano, se archiva o viaja.",
  },
  {
    title: "Definimos papel, medida e impresión",
    text: "Partimos de las medidas básicas o armamos una medida. La impresión puede ser una tinta, un dato o la cara completa.",
  },
  {
    title: "Muestra, si el proyecto la pide",
    text: "Apruebas color, texto y cierre antes de fabricar el lote.",
  },
  {
    title: "Producimos y entregamos",
    text: "El taller está en Bogotá. La fecha se acuerda con el volumen y el acabado.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="El sobre se resuelve en el taller, con quien lo va a fabricar"
        lede="No armamos un catálogo cerrado. Cada lote sale del uso: iglesia, oficina, tienda, clínica o evento."
      />
      <section className="bg-white py-16">
        <ol className="mx-auto grid max-w-[1280px] gap-6 px-6 md:grid-cols-4 md:px-14">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-4 border-brand pt-4">
              <p className="text-sm font-semibold tracking-[0.14em] text-brand">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold">{step.title}</h2>
              <p className="mt-2 text-[#3c4650]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-[#f7f7f7] py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Por qué <span className="text-brand">SOBRYPAL?</span>
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="bg-white p-6">
                <h3 className="text-2xl text-brand">{reason.title}</h3>
                <p className="mt-2 text-[#3c4650]">{reason.text}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/cotiza"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-brand px-8 font-semibold text-white hover:bg-[#014e84]"
          >
            Cotiza tu proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
