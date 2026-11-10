<?php
/**
 * Template Name: Contacto
 */
get_header();
$address = sobrypal_mod('address');
$city = sobrypal_mod('city');
$query = rawurlencode($address . ', ' . $city . ', Colombia');
?>
<section class="page-hero">
    <p class="eyebrow">Contacto</p>
    <h1>El taller está en Bogotá</h1>
    <p>Escríbenos por WhatsApp para cotizar, pedir una muestra o confirmar una entrega.</p>
</section>
<section class="wrap contact-grid">
    <div>
        <p class="eyebrow">Dirección</p>
        <p class="lead"><?php echo esc_html($address); ?><br><?php echo esc_html($city); ?></p>
        <a class="pill dark" href="<?php echo esc_url(sobrypal_whatsapp_url()); ?>">WhatsApp <?php echo esc_html(sobrypal_mod('phone_display')); ?></a>
    </div>
    <iframe title="Mapa del taller SOBRYPAL" src="<?php echo esc_url('https://maps.google.com/maps?q=' . $query . '&z=16&output=embed'); ?>" loading="lazy"></iframe>
</section>
<?php
get_footer();
