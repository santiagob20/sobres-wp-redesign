import { quoteWhatsapp } from "@/lib/site";

export const metadata = {
  title: "Cotizar",
  robots: { index: false, follow: true },
};

export default function CotizaPage() {
  return (
    <section className="bg-white px-6 py-24 text-center">
      <meta httpEquiv="refresh" content={`0;url=${quoteWhatsapp}`} />
      <h1 className="text-4xl font-bold">Te llevamos a WhatsApp</h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-[#3c4650]">
        La cotización se hace por el chat del taller.
      </p>
      <a
        href={quoteWhatsapp}
        className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-8 font-semibold text-white"
      >
        Abrir WhatsApp
      </a>
    </section>
  );
}
