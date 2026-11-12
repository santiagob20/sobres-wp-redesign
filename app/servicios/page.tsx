import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { quoteWhatsapp, reasons } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Fabricación de sobres",
  description:
    "Taller de sobres en Bogotá con atención directa, impresión bajo demanda y muestras de aprobación. Fabricamos para clientes en toda Colombia.",
  path: "/servicios",
});

const steps = [
  {
    title: "Cuéntanos tu necesidad",
    text: "Dinos qué va dentro, a quién va dirigido y el tipo de uso (entrega personal, correo o archivo).",
  },
  {
    title: "Definimos material, medida y acabado",
    text: "Elegimos o creamos las dimensiones exactas de tu sobre, el tipo de papel y la técnica de impresión.",
  },
  {
    title: "Muestra de aprobación",
    text: "Si el proyecto lo requiere, validamos muestra física de color, texto y troquel antes del tiraje final.",
  },
  {
    title: "Fabricación y envío",
    text: "Producimos y despachamos a cualquier ciudad del país en el tiempo pactado.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Servicios"
        title="Sobres a tu medida, sin catálogos cerrados."
        lede="No trabajamos con medidas estándar. Cada formato se diseña y fabrica según el uso real que le vayas a dar: oficina, eventos, comercio o proyectos especiales."
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
          <a
            href={quoteWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-brand px-8 font-semibold text-white hover:bg-[#014e84]"
          >
            Cotiza tu proyecto
          </a>
        </div>
      </section>
    </>
  );
}
