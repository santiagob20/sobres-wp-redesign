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
  | "radio"
  | "cuadrado"
  | "ventanilla"
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
};

export const products: Product[] = [
  {
    slug: "sobres-para-diezmo",
    name: "Sobres para diezmo",
    homeLabel: "Sobres para diezmo",
    featured: true,
    art: "diezmo",
    summary:
      "Formato pensado para iglesias y comunidades que recogen diezmos y ofrendas con orden.",
    paragraphs: [
      "Fabricamos sobres para diezmo en el papel y la medida que usa tu comunidad. Se pueden imprimir con el nombre de la iglesia, una fecha, un versículo corto o el espacio para el nombre de quien entrega.",
      "El cierre y el gramaje se definen según si el sobre se entrega en la mano, se guarda en archivo o viaja con la ofrenda.",
    ],
    uses: ["Iglesias", "Retiros y eventos", "Ofrendas especiales"],
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
      "Trabajamos sobres de color para campañas, invitaciones y correspondencia de marca. El color puede ir en el papel, en la impresión o en los dos.",
      "Si necesitas una referencia exacta, cuéntanos el uso y te proponemos el papel más cercano dentro de lo que importamos.",
    ],
    uses: ["Campañas", "Invitaciones", "Correspondencia de marca"],
  },
  {
    slug: "sobres-para-eventos",
    name: "Sobres para eventos",
    homeLabel: "Sobres para eventos",
    featured: true,
    art: "eventos",
    summary:
      "Invitaciones, pases y kits que salen con el acabado del evento, no con un sobre genérico.",
    paragraphs: [
      "Un evento pide una medida, un papel y una impresión que acompañen lo que va adentro: tarjeta, boleta, programa o kit.",
      "Podemos hacer una muestra antes de producir el lote, para que apruebes color, texto y cierre.",
    ],
    uses: ["Invitaciones", "Bodas y grados", "Lanzamientos"],
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
      "Empaque de papel para tiendas virtuales, con espacio para la marca y los datos del envío.",
    paragraphs: [
      "Si vendes en línea y el producto viaja en sobre, lo fabricamos con el tamaño del pedido, la resistencia del trayecto y la impresión de tu marca.",
      "Sirve para prendas, papelería, accesorios y pedidos que no necesitan una caja.",
    ],
    uses: ["Tiendas virtuales", "Envíos ligeros", "Empaque con marca"],
  },
  {
    slug: "sobres-para-centros-medicos",
    name: "Sobres para centros médicos",
    homeLabel: "Sobres para centros médicos",
    featured: true,
    art: "medico",
    summary:
      "Para historias, resultados y documentos que deben ir identificados y protegidos.",
    paragraphs: [
      "Clínicas, laboratorios y consultorios usan el sobre para entregar resultados, mover documentos entre sedes o guardar una historia.",
      "Definimos el papel, la solapa y los datos impresos según el protocolo del centro. También fabricamos sobres para radiografía.",
    ],
    uses: ["Laboratorios", "Consultorios", "Entrega de resultados"],
  },
  {
    slug: "sobres-de-manila",
    name: "Sobres de manila",
    homeLabel: "Sobres de manila",
    featured: false,
    art: "manila",
    summary: "Papel manila resistente para archivo y envíos que se manipulan seguido.",
    paragraphs: [
      "El manila aguanta el roce del archivo y el trayecto de un documento que cambia de manos. Lo fabricamos en medidas básicas y especiales.",
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
      "Una opción de papel para quien quiere bajar el impacto del empaque sin soltar la resistencia.",
    paragraphs: [
      "Te proponemos papeles de menor impacto según el uso: correspondencia, empaque ligero o una pieza de marca. Cuéntanos el volumen y el destino.",
    ],
    uses: ["Marcas con política ambiental", "Correspondencia", "Empaque ligero"],
  },
  {
    slug: "sobres-para-radiografia",
    name: "Sobres para radiografía",
    homeLabel: "Sobres para radiografía",
    featured: false,
    art: "radio",
    summary: "Protegen placas y estudios en el traslado y en la entrega al paciente.",
    paragraphs: [
      "El formato cubre la placa y deja espacio para identificar el estudio. Lo producimos para centros de imagen y clínicas que entregan el resultado en físico.",
    ],
    uses: ["Centros de imagen", "Clínicas", "Entrega al paciente"],
  },
  {
    slug: "sobres-cuadrados",
    name: "Sobres cuadrados",
    homeLabel: "Sobres cuadrados",
    featured: false,
    art: "cuadrado",
    summary: "Para invitaciones y piezas que no entran en un sobre tradicional.",
    paragraphs: [
      "El formato cuadrado cambia la presencia de una invitación o de una pieza editorial. Definimos el lado, el papel y si lleva impresión en la cara o en la solapa.",
    ],
    uses: ["Invitaciones", "Papelería editorial", "Kits"],
  },
  {
    slug: "sobres-con-ventanilla",
    name: "Sobres con ventanilla",
    homeLabel: "Sobres con ventanilla",
    featured: false,
    art: "ventanilla",
    summary: "La dirección se lee sin abrir el sobre.",
    paragraphs: [
      "Útiles cuando el documento ya trae el nombre y la dirección impresos: facturas, extractos y correspondencia masiva. La ventanilla se ubica donde queda el dato.",
    ],
    uses: ["Facturación", "Correspondencia masiva", "Oficinas"],
  },
  {
    slug: "sobres-con-burbuja",
    name: "Sobres con burbuja",
    homeLabel: "Sobres con burbuja",
    featured: false,
    art: "burbuja",
    summary: "Acolchado interior para productos que no deben viajar sueltos.",
    paragraphs: [
      "El sobre con burbuja protege piezas frágiles o que se rayan. Hay varios tamaños y, si el producto pide otra medida, la revisamos contigo.",
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
    image: "/atencion-personalizada.jpg",
    text: "Hablas con quien fabrica. Revisamos el uso, el papel y la cantidad antes de producir.",
  },
  {
    title: "Impresión y acabados bajo demanda",
    wide: true,
    image: "/impresion-bajo-demanda.jpg",
    text: "Imprimimos solo lo que el proyecto necesita: una tinta, un dato variable o la cara completa.",
  },
  {
    title: "Productos personalizados",
    wide: false,
    image: "/productos-personalizados.jpg",
    text: "Medida, solapa, ventanilla y marca se definen para ese lote, no para un catálogo cerrado.",
  },
  {
    title: "Entrega de muestras para aprobación",
    wide: false,
    image: "/entrega-muestras.jpg",
    text: "Cuando el proyecto lo pide, produces la muestra y arrancamos el lote después de tu visto bueno.",
  },
  {
    title: "Velocidad en tiempos de entrega",
    wide: false,
    image: "/velocidad-entrega.jpg",
    position: "center 70%",
    text: "El taller está en Bogotá. Acordamos la fecha con el volumen y el acabado, y la cumplimos.",
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
