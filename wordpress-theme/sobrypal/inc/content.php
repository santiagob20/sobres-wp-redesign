<?php
/**
 * Editable site copy. Text changes for the homepage and catalog live in this file.
 */

if (!defined('ABSPATH')) {
    exit;
}

function sobrypal_defaults() {
    return array(
        'phone_display' => '318 365 9759',
        'phone_e164' => '573183659759',
        'address' => 'Carrera 57 # 70c - 32',
        'city' => 'Bogotá',
        'facebook' => 'https://web.facebook.com/SOBRYPAL',
        'instagram' => 'https://www.instagram.com/sobresenpapel',
    );
}

function sobrypal_mod($key) {
    $defaults = sobrypal_defaults();
    $fallback = isset($defaults[$key]) ? $defaults[$key] : '';
    return get_theme_mod('sobrypal_' . $key, $fallback);
}

function sobrypal_whatsapp_url() {
    return 'https://wa.me/' . preg_replace('/\D/', '', sobrypal_mod('phone_e164'));
}

function sobrypal_hero_videos() {
    $custom = array_filter(array(
        get_theme_mod('sobrypal_hero_video', ''),
        get_theme_mod('sobrypal_hero_video_2', ''),
    ));
    if ($custom) {
        return array_values($custom);
    }

    $videos = array();
    $dir = get_template_directory() . '/assets/video';
    $uri = get_template_directory_uri() . '/assets/video';
    foreach (array('hero-1.mp4', 'hero-2.mp4') as $file) {
        if (file_exists($dir . '/' . $file)) {
            $videos[] = $uri . '/' . $file;
        }
    }
    return $videos;
}

function sobrypal_quote_whatsapp_url($product = '') {
    $message = $product !== ''
        ? 'Hola SOBRYPAL, quiero cotizar ' . $product . '.'
        : 'Hola SOBRYPAL, quiero cotizar un proyecto.';
    return sobrypal_whatsapp_url() . '?text=' . rawurlencode($message);
}

function sobrypal_whatsapp_button($label, $message = '') {
    $url = sobrypal_whatsapp_url();
    if ($message !== '') {
        $url .= '?text=' . rawurlencode($message);
    }
    ?>
    <a class="wa-btn" href="<?php echo esc_url($url); ?>" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4l-.3.5c-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.7-.1 1.3z"/></svg>
        <?php echo esc_html($label); ?>
    </a>
    <?php
}

function sobrypal_products() {
    return array(
        array(
            'slug' => 'sobres-para-diezmo',
            'name' => 'Sobres para diezmo',
            'summary' => 'Formato para iglesias y comunidades que recogen diezmos y ofrendas con orden.',
            'text' => 'Se imprimen con el nombre de la iglesia, una fecha o el espacio para quien entrega. El papel y el cierre se definen según si el sobre se entrega en la mano o se archiva.',
        ),
        array(
            'slug' => 'sobres-de-colores',
            'name' => 'Sobres de colores',
            'summary' => 'Color en el papel para que la pieza se distinga antes de abrirla.',
            'text' => 'Para campañas, invitaciones y correspondencia de marca. El color puede ir en el papel, en la impresión o en los dos.',
        ),
        array(
            'slug' => 'sobres-para-eventos',
            'name' => 'Sobres para eventos',
            'summary' => 'Invitaciones, pases y kits con el acabado del evento.',
            'text' => 'Medida, papel e impresión se arman para lo que va adentro. Si el proyecto lo pide, hay muestra antes del lote.',
        ),
        array(
            'slug' => 'sobres-para-correspondencia',
            'name' => 'Sobres para correspondencia',
            'summary' => 'Carta, oficio y ventanilla para oficina, archivo y correo.',
            'text' => 'La ventanilla evita reescribir la dirección cuando el documento ya la trae impresa.',
        ),
        array(
            'slug' => 'sobres-para-ecommerce',
            'name' => 'Sobres para e-commerce',
            'summary' => 'Empaque de papel para tiendas virtuales, con espacio para la marca y el envío.',
            'text' => 'Sirve para prendas, papelería y pedidos que no necesitan una caja.',
        ),
        array(
            'slug' => 'sobres-para-centros-medicos',
            'name' => 'Sobres para centros médicos',
            'summary' => 'Historias, resultados y documentos que deben ir identificados.',
            'text' => 'También fabricamos el formato para radiografía. Papel, solapa y datos impresos se definen con el centro.',
        ),
        array(
            'slug' => 'sobres-de-manila',
            'name' => 'Sobres de manila',
            'summary' => 'Papel resistente para archivo y envíos que se manipulan seguido.',
            'text' => 'Medidas básicas y especiales.',
        ),
        array(
            'slug' => 'sobres-ecologicos',
            'name' => 'Sobres ecológicos',
            'summary' => 'Papel de menor impacto para correspondencia y empaque ligero.',
            'text' => 'Te proponemos el papel según el volumen y el destino.',
        ),
        array(
            'slug' => 'sobres-para-radiografia',
            'name' => 'Sobres para radiografía',
            'summary' => 'Protegen placas y estudios en el traslado y en la entrega.',
            'text' => 'El formato cubre la placa y deja espacio para identificar el estudio.',
        ),
        array(
            'slug' => 'sobres-cuadrados',
            'name' => 'Sobres cuadrados',
            'summary' => 'Para invitaciones y piezas que no entran en un sobre tradicional.',
            'text' => 'Definimos el lado, el papel y si la impresión va en la cara o en la solapa.',
        ),
        array(
            'slug' => 'sobres-con-ventanilla',
            'name' => 'Sobres con ventanilla',
            'summary' => 'La dirección se lee sin abrir el sobre.',
            'text' => 'Útil en facturas, extractos y correspondencia masiva.',
        ),
        array(
            'slug' => 'sobres-con-burbuja',
            'name' => 'Sobres con burbuja',
            'summary' => 'Acolchado interior para productos que no deben viajar sueltos.',
            'text' => 'Hay varios tamaños. Si el producto pide otra medida, la revisamos.',
        ),
    );
}

function sobrypal_featured_products() {
    return array_slice(sobrypal_products(), 0, 6);
}

function sobrypal_reasons() {
    return array(
        array('title' => 'Atención personalizada', 'wide' => true, 'image' => 'atencion-personalizada.jpg', 'text' => 'Hablas con quien fabrica. Revisamos el uso, el papel y la cantidad antes de producir.'),
        array('title' => 'Impresión y acabados bajo demanda', 'wide' => true, 'image' => 'impresion-bajo-demanda.jpg', 'text' => 'Imprimimos solo lo que el proyecto necesita: una tinta, un dato variable o la cara completa.'),
        array('title' => 'Productos personalizados', 'wide' => false, 'image' => 'productos-personalizados.jpg', 'text' => 'Medida, solapa, ventanilla y marca se definen para ese lote.'),
        array('title' => 'Entrega de muestras para aprobación', 'wide' => false, 'image' => 'entrega-muestras.jpg', 'text' => 'Cuando el proyecto lo pide, apruebas la muestra y después arranca el lote.'),
        array('title' => 'Velocidad en tiempos de entrega', 'wide' => false, 'image' => 'velocidad-entrega.jpg', 'position' => 'center 70%', 'text' => 'El taller está en Bogotá. La fecha se acuerda con el volumen y el acabado.'),
    );
}
