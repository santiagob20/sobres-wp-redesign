<?php
/**
 * Template Name: Privacidad
 */
get_header();
$address = sobrypal_mod('address');
$city = sobrypal_mod('city');
$phone = sobrypal_mod('phone_display');
?>
<section class="page-hero">
    <p class="eyebrow">Datos personales</p>
    <h1>Política de privacidad</h1>
</section>
<article class="prose wrap">
    <p>SOBRYPAL S.A.S., con taller en <?php echo esc_html($address . ', ' . $city); ?>, trata datos personales para responder cotizaciones y mensajes de contacto. El tratamiento se orienta por la Ley 1581 de 2012 y el Decreto 1377 de 2013.</p>
    <h2>Qué datos recogemos</h2>
    <p>Nombre, empresa, teléfono o WhatsApp, ciudad, tipo de producto, cantidad, medida y el mensaje que nos escribes. El correo es opcional. No pedimos datos sensibles ni información de menores.</p>
    <h2>Para qué los usamos</h2>
    <p>Solo para elaborar la cotización, coordinar una muestra o una entrega y responder el mensaje. No vendemos esa información.</p>
    <h2>Tus derechos</h2>
    <p>Puedes conocer, actualizar, rectificar y solicitar la eliminación de tus datos cuando sea procedente. Escríbenos por WhatsApp al <?php echo esc_html($phone); ?> indicando tu nombre y el derecho que quieres ejercer.</p>
    <p>El formulario abre WhatsApp con el texto de la cotización. No hay otra base de datos asociada a ese formulario. Esta página describe la práctica del sitio y no reemplaza una asesoría jurídica.</p>
</article>
<?php
get_footer();
