import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductArt } from "@/components/product-art";
import { products, quoteWhatsapp, sizes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Sobres para diezmo, colores, eventos, correspondencia, e-commerce, centros médicos y medidas a pedido.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Sobres fabricados para el uso, no para un anaquel genérico"
        lede="Seis líneas cubren la mayoría de los proyectos. Si el contenido pide otra medida o otro papel, lo fabricamos."
      />
      <section className="bg-paper py-14 md:py-16">
        <ul className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-14">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/productos/${product.slug}`}
                className="flex h-full flex-col bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <div className="aspect-[368/240] bg-[#f1f1f1]">
                  <ProductArt kind={product.art} />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                  <h2 className="text-2xl text-brand">{product.name}</h2>
                  <p className="text-[#3c4650]">{product.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-14">
          <h2 className="text-3xl font-bold md:text-4xl">Medidas</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#3c4650]">
            Estas son las medidas con las que más trabajamos. Si necesitas otra, la fabricamos.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <SizeCard title="Básicas" items={sizes.basicas} />
            <SizeCard title="Un poco más grandes" items={sizes.amplias} />
            <article className="border border-[#e4e4e4] p-6">
              <h3 className="text-xl font-semibold text-brand">Personalizadas</h3>
              <p className="mt-3 text-[#3c4650]">
                Sobres cuadrados, para radiografía, para diezmo y cualquier formato que el contenido pida.
              </p>
              <a
                href={quoteWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-semibold text-brand hover:underline"
              >
                Cotizar una medida
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function SizeCard({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; measure: string }[];
}) {
  return (
    <article className="border border-[#e4e4e4] p-6">
      <h3 className="text-xl font-semibold text-brand">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-[#f0f0f0] pb-2">
            <span>{item.name}</span>
            <span className="text-[#3c4650]">{item.measure}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
