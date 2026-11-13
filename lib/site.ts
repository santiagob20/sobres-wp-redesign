import atencionPersonalizada from "@/assets/atencion-personalizada.jpg";
import entregaMuestras from "@/assets/entrega-muestras.jpg";
import impresionBajoDemanda from "@/assets/impresion-bajo-demanda.jpg";
import muestraColores from "@/assets/muestra-colores.jpg";
import muestraEmpaque from "@/assets/muestra-empaque.jpg";
import muestraForros from "@/assets/muestra-forros.jpg";
import muestraImpresion from "@/assets/muestra-impresion.jpg";
import productosPersonalizados from "@/assets/productos-personalizados.jpg";
import velocidadEntrega from "@/assets/velocidad-entrega.jpg";

export const company = {
  name: "SOBRYPAL",
  legalName: "SOBRYPAL S.A.S.",
  phoneDisplay: "318 365 9759",
  phoneE164: "573183659759",
  whatsapp: "https://wa.me/573183659759",
  facebook: "https://web.facebook.com/sobrypalsi",
  instagram: "https://www.instagram.com/sobrypal",
  addressLine: "Carrera 57 # 70c - 32",
  city: "Bogotá",
  mapsQuery: "Carrera 57 #70c-32, Bogotá, Colombia",
} as const;

export const quoteMessage = "Hola SOBRYPAL, quiero cotizar un proyecto.";

export const quoteWhatsapp = `${company.whatsapp}?text=${encodeURIComponent(quoteMessage)}`;

export const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/#servicios", label: "Servicios" },
  { href: quoteWhatsapp, label: "Cotiza aquí", external: true },
  { href: "/contacto", label: "Contáctanos" },
] as const;

export type ArtKind =
  | "diezmo"
  | "colores"
  | "eventos"
  | "correspondencia"
  | "ecommerce"
  | "medico"
  | "manila"
  | "eco"
  | "burbuja";

export type Product = {
  slug: string;
  name: string;
  homeLabel: string;
  featured: boolean;
  art: ArtKind;
  summary: string;
  paragraphs: string[];
  uses: string[];
  image?: string;
  imageAlt?: string;
};

export const products: Product[] = [
  {
    slug: "sobres-para-diezmo",
    name: "Sobres para diezmo",
    homeLabel: "Sobres para diezmo",
    featured: true,
    art: "diezmo",
    summary: "Formato pensado para iglesias y comunidades que recogen diezmos y ofrendas.",
    paragraphs: [
      "Fabricamos sobres para diezmo en el papel y la medida que usa tu comunidad. Adaptamos la impresión a 1 tinta o full color según el diseño y los acabados que requieran.",
    ],
    uses: ["Iglesias", "Retiros y eventos", "Ofrendas especiales"],
    image: muestraImpresion.src,
    imageAlt: "Sobres impresos a color para ofrendas, campañas y aniversarios",
  },
  {
    slug: "sobres-de-colores",
    name: "Sobres de colores",
    homeLabel: "Sobres de colores",
    featured: true,
    art: "colores",
    summary:
      "Color en el papel para que la pieza se distinga antes de abrirla.",
    paragraphs: [
      "Desarrollamos sobres de color para campañas, invitaciones y correspondencia de marca. El color se define según tus necesidades: Directo del papel, mediante impresión o combinando ambas opciones.",
      "Si necesitas una referencia exacta, cuéntanos el uso y te proponemos el papel más cercano dentro de lo que importamos.",
    ],
    uses: ["Campañas", "Invitaciones", "Correspondencia de marca"],
    image: muestraColores.src,
    imageAlt: "Abanico de sobres de colores junto a una carta de muestras de papel",
  },
  {
    slug: "sobres-para-eventos",
    name: "Sobres para eventos",
    homeLabel: "Sobres para eventos",
    featured: true,
    art: "eventos",
    summary:
      "Invitaciones, boletas y kits que salen con el acabado del evento, no con un sobre genérico.",
    paragraphs: [
      "Cada evento exige dimensiones, papeles y acabados únicos que acompañen lo que va adentro, ya sea una tarjeta, una boleta, un programa o un kit. Si la pieza es cuadrada, el sobre también lo es.",
      "Desarrollamos una muestra física antes de la producción final para que valides el color, el diseño y el cierre de tus sobres.",
    ],
    uses: ["Invitaciones", "Bodas y grados", "Lanzamientos"],
    image: muestraForros.src,
    imageAlt: "Tres sobres abiertos con forro floral, monograma y candelabros",
  },
  {
    slug: "sobres-para-correspondencia",
    name: "Sobres para correspondencia",
    homeLabel: "Sobres para correspondencia",
    featured: true,
    art: "correspondencia",
    summary:
      "Carta, oficio y ventanilla para oficina, archivo y correo.",
    paragraphs: [
      "El sobre de uso diario: documentos, facturas y correspondencia. Hay medidas básicas y, si el contenido no cabe, fabricamos la medida.",
      "La ventanilla evita reescribir la dirección cuando el documento ya la trae impresa.",
    ],
    uses: ["Oficinas", "Facturación", "Archivo"],
  },
  {
    slug: "sobres-para-ecommerce",
    name: "Sobres para e-commerce",
    homeLabel: "Sobres para e-commerce",
    featured: true,
    art: "ecommerce",
    summary:
      "Empaque de papel resistente para tiendas virtuales, fabricado a la medida de tus productos y tu marca.",
    paragraphs: [
      "Si tu tienda despacha en sobres, diseñamos y fabricamos el empaque según el tamaño de tu producto, la resistencia para el transporte y la identidad de tu marca.",
      "Perfecto para prendas, artículos de papelería, accesorios y envíos ligeros que no requieren caja.",
    ],
    uses: ["Tiendas virtuales", "Envíos ligeros", "Empaque con marca"],
    image: muestraEmpaque.src,
    imageAlt: "Bolsas impresas, una blanca con carita y una de papel kraft con ilustración",
  },
  {
    slug: "sobres-para-centros-medicos",
    name: "Sobres para centros médicos",
    homeLabel: "Sobres para centros médicos",
    featured: true,
    art: "medico",
    summary:
      "Formatos a la medida para historias clínicas, resultados y exámenes que deben ir identificados y protegidos.",
    paragraphs: [
      "Diseñamos soluciones para clínicas, laboratorios y consultorios que necesitan entregar resultados, movilizar documentación entre sedes o resguardar historias médicas.",
      "Ajustamos la medida, el gramaje del papel, el cierre, la impresión y los acabados de datos según los requerimientos de tu centro. Contamos además con fabricación a medida para radiografías.",
    ],
    uses: ["Laboratorios", "Consultorios", "Entrega de resultados"],
  },
  {
    slug: "sobres-de-manila",
    name: "Sobres de manila",
    homeLabel: "Sobres de manila",
    featured: false,
    art: "manila",
    summary: "Papel manila resistente para archivo y envíos de uso constante.",
    paragraphs: [
      "El manila aguanta el roce del archivo y el movimiento continuo de documentos que cambian de manos.",
      "Lo fabricamos en medidas estándar o a la medida exacta de tus carpetas y expedientes. Podemos personalizarlos con impresión a una tinta y definir el tipo de cierre según el uso.",
    ],
    uses: ["Archivo", "Documentos", "Envíos internos"],
  },
  {
    slug: "sobres-ecologicos",
    name: "Sobres ecológicos",
    homeLabel: "Sobres ecológicos",
    featured: false,
    art: "eco",
    summary:
      "Alternativas de papel ecológico para disminuir el impacto ambiental sin sacrificar la resistencia del empaque.",
    paragraphs: [
      "Seleccionamos el papel ecológico ideal según la utilidad de tu proyecto (correspondencia, empaque ligero o papelería corporativa).",
      "Cuéntanos los detalles del volumen y el destino.",
    ],
    uses: ["Marcas con política ambiental", "Correspondencia", "Empaque ligero"],
  },
  {
    slug: "sobres-con-burbuja",
    name: "Sobres con burbuja",
    homeLabel: "Sobres con burbuja",
    featured: false,
    art: "burbuja",
    summary: "Acolchado interior para productos que no deben viajar sueltos.",
    paragraphs: [
      "El sobre con burbuja protege piezas frágiles o propensas a rayarse. Contamos con varios tamaños y, si tu producto requiere otra medida, lo revisamos contigo.",
    ],
    uses: ["Productos frágiles", "Accesorios", "Envíos"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const sizes = {
  basicas: [
    { name: "½ carta", measure: "15 × 23 cm" },
    { name: "Carta", measure: "22,5 × 29 cm" },
    { name: "Oficio", measure: "25 × 35 cm" },
  ],
  amplias: [
    { name: "Carta especial", measure: "25 × 31 cm" },
    { name: "Extra oficio", measure: "27 × 37 cm" },
    { name: "Gigante", measure: "30 × 42 cm" },
  ],
};

export const trust = [
  {
    id: "calidad",
    title: "Altos estándares de calidad",
  },
  {
    id: "entregas",
    title: "Entregas rápidas y seguras",
  },
  {
    id: "clientes",
    title: "Clientes satisfechos",
    figure: "+3,700",
  },
  {
    id: "personalizacion",
    title: "Personalización total en cada producto",
  },
] as const;

export const reasons = [
  {
    title: "Atención personalizada",
    wide: true,
    image: atencionPersonalizada.src,
    text: "Trato directo con los especialistas que fabrican tu sobre para elegir el papel, formato y acabado ideal.",
  },
  {
    title: "Impresión y acabados bajo demanda",
    wide: true,
    image: impresionBajoDemanda.src,
    text: "Impresión a una tinta, datos variables o full color en la cantidad exacta que necesites, sin desperdicios.",
  },
  {
    title: "Producto personalizado",
    wide: false,
    image: productosPersonalizados.src,
    text: "Medidas, troqueles, tipos de solapa y ventanas configurados exclusivamente para la necesidad de tu marca.",
  },
  {
    title: "Entrega de muestra para aprobación",
    wide: false,
    image: entregaMuestras.src,
    text: "Producimos una muestra de prueba para verificar color, papel y ajuste antes de dar luz verde a todo el pedido.",
  },
  {
    title: "Velocidad en tiempos de entrega",
    wide: false,
    image: velocidadEntrega.src,
    position: "center 70%",
    text: "Pactamos fechas de entrega reales según las especificaciones de tu pedido y la cumplimos.",
  },
] as const;

export const stats = [
  { value: "+37", label: "Años en el mercado" },
  { value: "+205,000", label: "Proyectos realizados" },
  { value: "+3,700", label: "Clientes satisfechos" },
  { value: "50,000", label: "Compromiso de entregas mensuales" },
] as const;

export const footerProducts = featuredProducts.map((product) => ({
  href: `/productos/${product.slug}`,
  label: product.name,
}));
