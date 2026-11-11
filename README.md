# SOBRYPAL

Sitio nuevo de [solucionesensobres.com](https://solucionesensobres.com/), según el diseño aprobado: portada con video (o fondo gris mientras no haya video), catálogo de sobres, servicios, cotización por WhatsApp y contacto del taller en Bogotá.

Hay dos piezas:

- Esta aplicación es la vista de referencia, para recorrer el diseño en el navegador.
- `wordpress-theme/sobrypal` es el tema que se instala en el WordPress actual y reemplaza a BeTheme.

## Ver el sitio en local

```bash
npm install
npm run dev -- -p 3456
```

Abre `http://127.0.0.1:3456`.

## Videos del inicio

El inicio reproduce, en este orden y en bucle:

1. `public/hero-1.mp4` — prensa de impresión.
2. `public/hero-2.mp4` — equipo de impresión.

El texto blanco queda encima, con una capa gris semitransparente. Si falta un archivo, se usa el que sí esté. Si faltan los dos, la franja se ve gris.

El tema de WordPress trae las mismas copias en `wordpress-theme/sobrypal/assets/video/`. En el personalizador se puede reemplazar cada una con una URL de la mediateca.

## Cambiar textos, teléfono o cifras

Los datos de la vista de referencia están en `lib/site.ts`: dirección, WhatsApp, redes, productos y las cifras de la portada (`+37`, `+205.000`, `+3.700`, `50.000`). Esas cifras salen del PDF. Si alguna no corresponde, se corrige en ese archivo.

## Subir el diseño a WordPress

No hace falta editar BeTheme ni pegar HTML en el constructor. El tema nuevo trae la portada, el catálogo, la cotización y el contacto. Al activarlo, BeTheme deja de verse, pero no se borra: puedes volver a activarlo si algo no cuadra.

Hazlo en este orden.

### 1. Copia de seguridad

En el escritorio de WordPress (`tudominio/wp-admin`):

1. Instala un plugin de copias, por ejemplo UpdraftPlus, o usa la copia que ofrece el hosting.
2. Genera una copia de archivos y base de datos antes de cambiar el tema.

### 2. Comprimir el tema

En tu computador, entra a la carpeta `wordpress-theme` y comprime **la carpeta `sobrypal`**, no su contenido suelto.

El zip debe verse así al abrirlo:

```text
sobrypal.zip
  sobrypal/
    style.css
    functions.php
    ...
```

Si `style.css` queda en la raíz del zip, WordPress dice que el paquete no es un tema válido.

### 3. Instalar y activar

1. Apariencia → Temas → Añadir nuevo → Subir tema.
2. Elige `sobrypal.zip` → Instalar ahora → Activar.
3. Al activar, el tema crea (si no existen) las páginas Inicio, Productos, Servicios, Contacto y Política de privacidad, y deja Inicio como portada.

La portada no usa el contenido viejo de BeTheme. Ese contenido sigue guardado en las páginas anteriores, por si necesitas copiar un párrafo.

### 4. El video

El tema ya trae los dos videos del inicio y los rota solo. Para cambiarlos:

1. Medios → Añadir nuevo archivo de medios → sube cada mp4.
2. Copia la URL de cada archivo (termina en `.mp4`).
3. Apariencia → Personalizar → SOBRYPAL → pégalas en el primer y el segundo video.
4. Publicar.

Si un video es muy claro y el texto blanco se pierde, la capa gris se ajusta en `assets/css/main.css`, en `.hero-overlay`.

### 5. Menú, si quieres editarlo

El tema ya muestra Inicio, Productos, Servicios, Cotiza aquí y Contáctanos aunque no crees un menú.

Para cambiarlo: Apariencia → Menús → crea un menú, marca «Menú principal» y agrega las páginas. Los enlaces de la portada pueden ser personalizados:

- Inicio → `/#inicio`
- Productos → `/#productos`
- Servicios → `/#servicios`

### 6. Vaciar caché

Si el hosting o un plugin guarda caché (LiteSpeed, WP Rocket, SiteGround, etc.), vacíala después de activar el tema. Si no, puedes seguir viendo BeTheme un rato.

### 7. Qué puedes cambiar sin código

En Apariencia → Personalizar → SOBRYPAL:

- URL del video
- Teléfono visible
- WhatsApp (solo números, con 57)
- Dirección y ciudad
- Facebook e Instagram

Los textos de productos y de la portada están en `wordpress-theme/sobrypal/inc/content.php`. Después de editar ese archivo hay que volver a subir el tema, o editarlo por el administrador de archivos del hosting en `wp-content/themes/sobrypal/inc/content.php`.

### 8. Comprobar

En el computador y en el celular:

- La portada muestra las seis líneas de sobres y las cifras.
- Cotiza aquí abre WhatsApp con un mensaje listo. No hay formulario ni base de datos.
- Contacto muestra el mapa de la Carrera 57 # 70c-32.
- El botón verde de WhatsApp abre el chat del `318 365 9759`.

## Qué no migra solo

Los bloques del constructor de BeTheme (Muffin Builder) no se convierten en este tema. La portada nueva ya trae el texto del diseño. Las páginas viejas quedan en el escritorio como borrador de consulta; no se muestran en la portada.

La cotización no pasa por un formulario del sitio: el botón abre WhatsApp, que es el canal que ya usa el taller.
