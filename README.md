# SOBRYPAL

Sitio de [solucionesensobres.com](https://solucionesensobres.com/) en Next.js. Al construir el sitio se genera el HTML de cada ruta, con metadatos, `sitemap.xml` y `robots.txt`, para que los buscadores lean el contenido sin ejecutar JavaScript.

El tema de WordPress quedó aparte, en la rama `wordpress`.

## Carpetas

```text
app/          rutas (inicio, productos, servicios, contacto, privacidad)
components/   componentes reutilizables, uno por carpeta
assets/       logo, fotos y videos
styles/       estilos globales
lib/          textos, teléfono, productos y cifras
```

Los estilos de un componente, cuando hagan falta, van junto a ese componente.

## Ver el sitio en local

```bash
npm install
npm run dev -- -p 3456
```

Abre `http://127.0.0.1:3456`.

## Videos del inicio

El inicio reproduce, en este orden y en bucle:

1. `assets/hero-1.mp4` — prensa de impresión.
2. `assets/hero-2.mp4` — equipo de impresión.

El texto blanco queda encima, con una capa gris semitransparente.

## Cambiar textos, teléfono o cifras

Los datos están en `lib/site.ts`: dirección, WhatsApp, redes, productos y las cifras de la portada (`+37`, `+205.000`, `+3.700`, `50.000`).

## Analítica

El sitio no tiene formularios. Firebase Analytics solo se carga si la persona acepta las cookies. Sin esa aceptación no hay medición.

Copia `.env.example` a `.env.local` y pega la configuración web del proyecto de Firebase (incluye el `measurementId`, que empieza por `G-`). Reinicia el servidor después de guardar el archivo. En un sitio exportado, esas variables quedan fijas en el build.

## Publicar en GitHub Pages

El build deja el sitio estático en `out/`. El workflow `.github/workflows/pages.yml` lo publica al hacer push a `main`.

En el repositorio: Settings → Pages → Build and deployment → Source: GitHub Actions. El repositorio tiene que ser público para usar Pages en el plan gratuito.

Para servir `solucionesensobres.com` desde Pages, en ese mismo ajuste agrega el dominio y apunta el DNS del dominio a GitHub Pages. Sin dominio propio, el sitio queda en `https://santiagob20.github.io/sobres-wp-redesign/`.
