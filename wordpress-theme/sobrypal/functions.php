<?php
/**
 * Theme setup, assets, and the pages created on activation.
 */

if (!defined('ABSPATH')) {
    exit;
}

require get_template_directory() . '/inc/content.php';
require get_template_directory() . '/inc/customizer.php';

function sobrypal_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('responsive-embeds');
    register_nav_menus(array(
        'primary' => 'Menú principal',
    ));
}
add_action('after_setup_theme', 'sobrypal_setup');

function sobrypal_assets() {
    wp_enqueue_style(
        'sobrypal-fonts',
        'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:wght@700&display=swap',
        array(),
        null
    );
    wp_enqueue_style('sobrypal', get_template_directory_uri() . '/assets/css/main.css', array('sobrypal-fonts'), '1.0.1');
    wp_enqueue_script('sobrypal', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.1', true);
}
add_action('wp_enqueue_scripts', 'sobrypal_assets');

function sobrypal_fallback_menu() {
    $items = array(
        array('/#inicio', 'Inicio', false),
        array('/#productos', 'Productos', false),
        array('/#servicios', 'Servicios', false),
        array(sobrypal_quote_whatsapp_url(), 'Cotiza aquí', true),
        array('/contacto/', 'Contáctanos', false),
    );
    echo '<ul class="nav-list">';
    foreach ($items as $item) {
        $href = $item[2] ? $item[0] : home_url($item[0]);
        $external = $item[2] ? ' target="_blank" rel="noreferrer"' : '';
        echo '<li><a href="' . esc_url($href) . '"' . $external . '>' . esc_html($item[1]) . '</a></li>';
    }
    echo '</ul>';
}

function sobrypal_create_pages() {
    $pages = array(
        'inicio' => array('Inicio', ''),
        'productos' => array('Productos', 'template-productos.php'),
        'servicios' => array('Servicios', 'template-servicios.php'),
        'contacto' => array('Contacto', 'template-contacto.php'),
        'politica-de-privacidad' => array('Política de privacidad', 'template-privacidad.php'),
    );

    foreach ($pages as $slug => $page) {
        $existing = get_page_by_path($slug);
        if (!$existing) {
            $id = wp_insert_post(array(
                'post_title' => $page[0],
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => '',
            ));
            if (!is_wp_error($id) && $id && $page[1]) {
                update_post_meta($id, '_wp_page_template', $page[1]);
            }
            continue;
        }
        if ($page[1]) {
            $current = get_page_template_slug($existing->ID);
            if (!$current || $current === 'default') {
                update_post_meta($existing->ID, '_wp_page_template', $page[1]);
            }
        }
    }

    $front = get_page_by_path('inicio');
    if ($front instanceof WP_Post) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front->ID);
    }
}
add_action('after_switch_theme', 'sobrypal_create_pages');

function sobrypal_redirect_quote_page() {
    if (is_page('cotiza')) {
        wp_redirect(sobrypal_quote_whatsapp_url(), 302);
        exit;
    }
}
add_action('template_redirect', 'sobrypal_redirect_quote_page');

function sobrypal_logo($alt = '') {
    $src = get_template_directory_uri() . '/assets/logo-sobrypal.png';
    ?>
    <span class="logo">
        <img src="<?php echo esc_url($src); ?>" alt="<?php echo esc_attr($alt); ?>" width="1024" height="247">
    </span>
    <?php
}
