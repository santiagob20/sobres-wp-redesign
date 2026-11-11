import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductArt } from "@/components/product-art";
import { TrustBar } from "@/components/trust-bar";
import { pageMetadata } from "@/lib/seo";
import { featuredProducts, reasons, stats } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "SOBRYPAL · Fabricante de sobres en Bogotá",
    description:
      "SOBRYPAL fabrica sobres de distintos tamaños en su taller de Bogotá y atiende pedidos en toda Colombia. Diezmo, correspondencia, e-commerce, centros médicos y eventos.",
    path: "/",
  }),
  title: { absolute: "SOBRYPAL · Fabricante de sobres en Bogotá" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <section id="productos" className="scroll-mt-[5.75rem] bg-paper py-16 md:scroll-mt-[12.375rem] md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-14">
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-[3.15rem]">
            <span className="text-[#1a1a1a]">¿Qué </span>
            <span className="text-brand">hacemos?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#3c4650]">
            Fabricamos sobres de distintos tamaños en Bogotá y atendemos pedidos en toda Colombia. El papel,
            el color, la medida y la impresión salen del uso. Elige una línea o cuéntanos el proyecto.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/productos/${product.slug}`}
                  className="group flex h-full flex-col bg-[#f1f1f1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <div className="aspect-[368/285] overflow-hidden">
                    <div className="h-full transition duration-300 group-hover:scale-[1.03]">
                      <ProductArt kind={product.art} />
                    </div>
                  </div>
                  <div className="flex min-h-[92px] items-center justify-center bg-label px-4 py-5 text-center text-[1.35rem] leading-tight text-brand md:min-h-[112px] md:text-[1.7rem]">
                    {product.homeLabel}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link href="/productos" className="text-lg font-semibold text-brand hover:underline">
              Ver todo el catálogo
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-band px-6 py-16 text-center md:py-20" aria-label="Papeles e impresión">
        <p className="mx-auto max-w-5xl text-[1.55rem] leading-snug font-semibold text-balance text-white md:text-[2.15rem] md:leading-[1.25]">
          Papeles importados de <span className="text-[#013e6b]">alta calidad,</span>{" "}
          <span className="md:block">variedad de colores e impresión impecable</span>{" "}
          <span className="md:block">
            para darle <span className="text-[#013e6b]">el acabado perfecto a tu marca</span>
          </span>
        </p>
      </section>

      <section id="servicios" className="scroll-mt-[5.75rem] bg-white py-16 md:scroll-mt-[12.375rem] md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-14">
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-[3.15rem]">
            <span>¿Por qué </span>
            <span className="text-brand">SOBRYPAL?</span>
          </h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-6">
            {reasons.map((reason) => {
              const image = "image" in reason ? reason.image : undefined;
              const position = "position" in reason ? reason.position : undefined;
              return (
                <li
                  key={reason.title}
                  className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden p-7 text-white md:min-h-[250px] md:p-8 ${
                    image ? "" : "bg-hero"
                  } ${reason.wide ? "lg:col-span-3" : "lg:col-span-2"}`}
                >
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                        style={position ? { objectPosition: position } : undefined}
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                    </>
                  ) : null}
                  <h3 className="relative max-w-[18ch] text-[1.55rem] leading-snug font-normal md:text-[1.85rem]">
                    {reason.title}
                  </h3>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center">
            <Link href="/servicios" className="text-lg font-semibold text-brand hover:underline">
              Cómo trabajamos un proyecto
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-8" aria-label="Cifras">
        <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:px-10">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center">
              <p className="text-[2.4rem] leading-none font-normal tracking-tight text-brand md:text-[3.4rem]">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[16ch] text-base leading-snug md:text-[1.15rem]">{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
