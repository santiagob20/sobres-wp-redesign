import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cotiza tu proyecto",
  description: "Pide una cotización de sobres personalizados. La solicitud llega por WhatsApp al taller en Bogotá.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Cotización"
        title="Cuéntanos el proyecto y te respondemos por WhatsApp"
        lede="Con el uso, la cantidad y la medida alcanza para orientar el papel y la impresión. Si aún no tienes la medida, la definimos juntos."
      />
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <aside className="h-fit bg-paper p-6">
            <h2 className="text-2xl font-bold">Qué ayuda a cotizar</h2>
            <ul className="mt-4 space-y-3 text-[#24303a]">
              <li>Qué va dentro del sobre.</li>
              <li>Cantidad aproximada del lote.</li>
              <li>Si lleva impresión, ventanilla o un color de papel.</li>
              <li>Ciudad de entrega.</li>
            </ul>
            <p className="mt-6 text-sm text-[#3c4650]">
              También puedes escribir directo al{" "}
              <a href={company.whatsapp} className="font-semibold text-[#4d8627] hover:underline">
                WhatsApp {company.phoneDisplay}
              </a>
              .
            </p>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
