import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { company } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "El sitio de SOBRYPAL no recoge datos personales. Las cookies, si las aceptas, solo miden visitas.",
  path: "/politica-de-privacidad",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidad"
        title="Política de privacidad"
        lede="Esta página no pide ni guarda tus datos. La cotización se abre en WhatsApp. Las cookies, si las aceptas, solo miden visitas."
      />
      <article className="bg-white py-14">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-relaxed text-[#24303a] md:px-0">
          <p>
            {company.legalName}, con taller en {company.addressLine}, {company.city}, publica este sitio para
            mostrar sus productos y el contacto del taller. Aquí no hay formularios, cuentas ni una base de
            datos de visitantes.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Qué no recogemos</h2>
          <p>
            No pedimos nombre, teléfono, correo ni el detalle de un pedido. No guardamos esos datos en el
            sitio y no los vendemos ni los usamos para publicidad.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Cotizaciones por WhatsApp</h2>
          <p>
            «Cotiza aquí» abre WhatsApp con un mensaje listo. La conversación queda en WhatsApp y en el
            celular del taller, no en esta página. Si quieres que borremos ese chat, escríbenos al{" "}
            {company.phoneDisplay}.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Cookies de analítica</h2>
          <p>
            Si aceptas, el sitio carga Firebase Analytics, de Google, y guarda cookies para contar visitas:
            páginas vistas, tipo de dispositivo y una ubicación aproximada. Esas cookies no llevan tu nombre,
            tu teléfono ni el texto de una cotización. No las usamos para anuncios.
          </p>
          <p>
            Si rechazas, Firebase no se carga y el sitio se ve igual. Puedes cambiar de idea cuando quieras.
          </p>
          <CookieSettingsButton />
          <p>
            Google trata esa medición según su{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline-offset-4 hover:underline"
            >
              política de privacidad
            </a>{" "}
            y la de{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline-offset-4 hover:underline"
            >
              Firebase
            </a>
            .
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Mapa del taller</h2>
          <p>
            El mapa se muestra con Google Maps para ubicar la dirección. Esa consulta la responde Google. No
            la usamos para medir visitas.
          </p>
          <p className="text-base text-[#5c6670]">
            En lo que toca datos personales, el sitio se orienta por la Ley 1581 de 2012. Esta página describe
            lo que hace el sitio. No reemplaza una asesoría jurídica.
          </p>
        </div>
      </article>
    </>
  );
}
