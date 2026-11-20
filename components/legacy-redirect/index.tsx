import type { Metadata } from "next";
import Link from "next/link";
import { withBasePath } from "@/lib/seo";

export function legacyRedirectMetadata(to: string): Metadata {
  return {
    title: "Redirigiendo",
    alternates: { canonical: to },
  };
}

export function LegacyRedirect({ to }: { to: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${withBasePath(to)}`} />
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-14">
        <p className="text-lg text-[#24303a]">
          Esta página cambió de dirección.{" "}
          <Link href={to} className="font-semibold text-brand underline">
            Continuar
          </Link>
        </p>
      </section>
    </>
  );
}
