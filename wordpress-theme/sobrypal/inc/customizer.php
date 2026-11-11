<?php
/**
 * Contact details and the homepage video URL.
 */

if (!defined('ABSPATH')) {
    exit;
}

function sobrypal_customize($wp_customize) {
    $wp_customize->add_section('sobrypal', array(
        'title' => 'SOBRYPAL',
        'priority' => 30,
    ));

    $fields = array(
        'hero_video' => 'URL del primer video de inicio (mp4). Vacío = los videos del tema.',
        'hero_video_2' => 'URL del segundo video de inicio (mp4).',
        'phone_display' => 'Teléfono visible',
        'phone_e164' => 'WhatsApp con indicativo, solo números (573183659759)',
        'address' => 'Dirección',
        'city' => 'Ciudad',
        'facebook' => 'Facebook',
        'instagram' => 'Instagram',
    );

    foreach ($fields as $key => $label) {
        $wp_customize->add_setting('sobrypal_' . $key, array(
            'default' => ($key === 'hero_video' || $key === 'hero_video_2') ? '' : sobrypal_mod($key),
            'sanitize_callback' => ($key === 'hero_video' || $key === 'hero_video_2' || $key === 'facebook' || $key === 'instagram')
                ? 'esc_url_raw'
                : 'sanitize_text_field',
        ));
        $wp_customize->add_control('sobrypal_' . $key, array(
            'label' => $label,
            'section' => 'sobrypal',
            'type' => 'text',
        ));
    }
}
add_action('customize_register', 'sobrypal_customize');
