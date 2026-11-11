import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Tratamiento de datos personales de SOBRYPAL para cotizaciones y contacto.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Datos personales"
        title="Política de privacidad"
        lede="Esta página explica qué datos pedimos, para qué los usamos y cómo puedes pedir que los corrijamos o los eliminemos."
      />
      <article className="bg-white py-14">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-relaxed text-[#24303a] md:px-0">
          <p>
            {company.legalName}, con taller en {company.addressLine}, {company.city}, trata datos personales
            para responder cotizaciones y mensajes de contacto. El tratamiento se orienta por la Ley 1581 de
            2012 y el Decreto 1377 de 2013.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Qué datos recogemos</h2>
          <p>
            Nombre, empresa, teléfono o WhatsApp, ciudad, tipo de producto, cantidad, medida y el mensaje que
            nos escribes. El correo es opcional. No pedimos datos sensibles ni información de menores.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Para qué los usamos</h2>
          <p>
            Solo para elaborar la cotización, coordinar una muestra o una entrega y responder el mensaje. No
            vendemos esa información ni la usamos para enviar publicidad de terceros.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Cuánto tiempo los guardamos</h2>
          <p>
            El tiempo necesario para atender el proyecto y las obligaciones contables que apliquen. Si nos
            pides eliminarlos y no hay un deber legal de conservarlos, los borramos de la conversación y de
            los registros del taller.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Tus derechos</h2>
          <p>
            Puedes conocer, actualizar y rectificar tus datos, y solicitar la eliminación cuando sea
            procedente. También puedes revocar la autorización. Escríbenos por WhatsApp al {company.phoneDisplay}{" "}
            o en el taller, indicando tu nombre y el derecho que quieres ejercer.
          </p>
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Encargados</h2>
          <p>
            La cotización se hace por WhatsApp. El mensaje queda en el chat del taller. Este sitio no guarda
            otra base de datos con esos datos.
          </p>
          <p className="text-base text-[#5c6670]">
            Esta política describe la práctica del sitio. No reemplaza una asesoría jurídica sobre el registro
            de bases de datos ante la SIC.
          </p>
        </div>
      </article>
    </>
  );
}
