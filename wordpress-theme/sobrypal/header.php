<?php
/**
 * Site header: logo, address, and the blue navigation bar.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="site-header">
    <div class="topbar">
        <a class="brand" href="<?php echo esc_url(home_url('/#inicio')); ?>" aria-label="SOBRYPAL, ir al inicio">
            <?php sobrypal_logo(); ?>
        </a>
        <div class="top-actions">
            <a class="address" href="<?php echo esc_url(home_url('/contacto/')); ?>">
                <span class="flag" aria-hidden="true"><span></span><span></span><span></span></span>
                <span><?php echo esc_html(sobrypal_mod('address')); ?><br><?php echo esc_html(sobrypal_mod('city')); ?></span>
            </a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-principal">
                <span class="sr-only">Abrir menú</span>
                <span></span><span></span><span></span>
            </button>
        </div>
    </div>
    <nav id="menu-principal" class="main-nav" aria-label="Principal">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'nav-list',
            'fallback_cb' => 'sobrypal_fallback_menu',
            'depth' => 1,
        ));
        ?>
    </nav>
</header>
<main id="contenido">
