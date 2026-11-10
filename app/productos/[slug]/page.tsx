import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ProductArt } from "@/components/product-art";
import { QuoteForm } from "@/components/quote-form";
import { getProduct, products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Producto" title={product.name} lede={product.summary} />
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-14">
          <div className="overflow-hidden bg-[#f1f1f1]">
            <ProductArt kind={product.art} />
          </div>
          <div>
            {product.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-relaxed text-[#24303a] first:mt-0">
                {paragraph}
              </p>
            ))}
            <h2 className="mt-8 text-sm font-semibold tracking-[0.14em] text-brand uppercase">Se usa en</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.uses.map((use) => (
                <li key={use} className="rounded-full bg-label px-3 py-1 text-sm text-brand">
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-3xl font-bold">Cotizar {product.name.toLowerCase()}</h2>
          <p className="mt-2 mb-8 text-[#3c4650]">
            Cuéntanos cantidad, medida y si lleva impresión. La solicitud sale por WhatsApp al taller.
          </p>
          <QuoteForm key={product.slug} initialProduct={product.name} />
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-14">
          <h2 className="text-2xl font-bold">Otras líneas</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/productos/${item.slug}`} className="block border border-[#e4e4e4] p-4 hover:border-brand">
                  <span className="text-lg text-brand">{item.name}</span>
                  <span className="mt-1 block text-sm text-[#3c4650]">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
