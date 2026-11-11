<?php
/**
 * Social bar, contact columns, and map.
 */
$phone = sobrypal_mod('phone_display');
$address = sobrypal_mod('address');
$city = sobrypal_mod('city');
$query = rawurlencode($address . ', ' . $city . ', Colombia');
?>
</main>
<footer class="site-footer">
    <div class="social">
        <a href="<?php echo esc_url(sobrypal_mod('facebook')); ?>" target="_blank" rel="noreferrer" aria-label="Facebook de SOBRYPAL"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z"/></svg></a>
        <a href="<?php echo esc_url(sobrypal_mod('instagram')); ?>" target="_blank" rel="noreferrer" aria-label="Instagram de SOBRYPAL"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></a>
        <a href="<?php echo esc_url(sobrypal_whatsapp_url()); ?>" target="_blank" rel="noreferrer" aria-label="WhatsApp de SOBRYPAL"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.5 20.5l4.3-1.1A8.7 8.7 0 1 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.7-.3-1.3-.5-2.2-1-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4l-.3.5c-.1.1-.2.3-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.7-.1 1.3z"/></svg></a>
        <p>SÍGUENOS</p>
    </div>
    <div class="footer-grid">
        <div>
            <?php sobrypal_logo('SOBRYPAL'); ?>
            <p class="footer-address"><?php echo esc_html($address); ?><br><?php echo esc_html($city); ?></p>
            <a class="wa-link" href="<?php echo esc_url(sobrypal_whatsapp_url()); ?>">WhatsApp <?php echo esc_html($phone); ?></a>
            <ul class="plain">
                <li><a href="<?php echo esc_url(sobrypal_quote_whatsapp_url()); ?>" target="_blank" rel="noreferrer">Pedir cotización</a></li>
                <li><a href="<?php echo esc_url(home_url('/politica-de-privacidad/')); ?>">Política de privacidad</a></li>
            </ul>
        </div>
        <ul class="plain">
            <?php foreach (sobrypal_featured_products() as $product) : ?>
                <li><a href="<?php echo esc_url(home_url('/productos/#' . $product['slug'])); ?>"><?php echo esc_html($product['name']); ?></a></li>
            <?php endforeach; ?>
        </ul>
        <div>
            <p class="eyebrow">Taller</p>
            <p class="map-title">Nos ubicamos en</p>
            <p><?php echo esc_html($address . ', ' . $city); ?></p>
            <iframe title="Mapa del taller SOBRYPAL en Bogotá" src="<?php echo esc_url('https://maps.google.com/maps?q=' . $query . '&z=16&output=embed'); ?>" loading="lazy"></iframe>
        </div>
    </div>
    <p class="legal">© <?php echo esc_html(gmdate('Y')); ?> SOBRYPAL S.A.S. Fabricación de sobres en <?php echo esc_html($city); ?>.</p>
</footer>
<a class="wa-fab" href="<?php echo esc_url(sobrypal_whatsapp_url()); ?>" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp al <?php echo esc_attr($phone); ?>">WA</a>
<?php wp_footer(); ?>
</body>
</html>
