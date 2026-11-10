<?php
/**
 * Homepage sections matching the approved design.
 */
$video = get_theme_mod('sobrypal_hero_video', '');
?>
<section class="hero" id="inicio">
    <?php if ($video) : ?>
        <video autoplay muted loop playsinline aria-hidden="true">
            <source src="<?php echo esc_url($video); ?>" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
    <?php endif; ?>
    <div class="hero-copy">
        <h1>Convertimos tu proyecto en un producto que habla por ti</h1>
        <a class="pill" href="<?php echo esc_url(home_url('/cotiza/')); ?>">Cotiza tu proyecto</a>
    </div>
</section>

<section class="trust" aria-label="Razones para trabajar con SOBRYPAL">
    <ul>
        <li>
            <svg viewBox="0 0 72 72" aria-hidden="true"><path d="M36 6 44 10.2 53.2 10 57.2 18.6 64.8 24 61.6 33.2 64.8 42.4 57.2 47.8 53.2 56.4 44 56.2 36 60.4 28 56.2 18.8 56.4 14.8 47.8 7.2 42.4 10.4 33.2 7.2 24 14.8 18.6 18.8 10 28 10.2Z"/><path d="m26 36 7 7 14-16"/></svg>
            <p>Altos estándares de calidad</p>
        </li>
        <li>
            <svg viewBox="0 0 78 64" aria-hidden="true"><path d="M30 18h28v24H30z"/><path d="M30 26h28"/><path d="M18 30h8M14 36h10M20 24h6"/></svg>
            <p>Entregas rápidas y seguras</p>
        </li>
        <li>
            <strong>+3,700</strong>
            <p>Clientes satisfechos</p>
        </li>
        <li>
            <svg viewBox="0 0 72 72" aria-hidden="true"><path d="M14 22h44M14 36h44M14 50h44"/><path d="M28 16v12M46 30v12M34 44v12"/></svg>
            <p>Personalización total en cada producto</p>
        </li>
    </ul>
</section>

<section class="paper" id="productos">
    <div class="wrap">
        <h2 class="display">¿Qué <span>hacemos?</span></h2>
        <ul class="cards">
            <?php foreach (sobrypal_featured_products() as $product) : ?>
                <li>
                    <a href="<?php echo esc_url(home_url('/productos/#' . $product['slug'])); ?>">
                        <span class="swatch" aria-hidden="true"></span>
                        <span class="label"><?php echo esc_html($product['name']); ?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</section>

<section class="band" aria-label="Papeles e impresión">
    <p>Papeles importados de <strong>alta calidad,</strong> variedad de colores e impresión impecable para darle <strong>el acabado perfecto a tu marca</strong></p>
</section>

<section class="services" id="servicios">
    <div class="wrap">
        <h2 class="display">¿Por qué <span>SOBRYPAL?</span></h2>
        <ul class="reasons">
            <?php foreach (sobrypal_reasons() as $reason) : ?>
                <li class="<?php echo $reason['wide'] ? 'wide' : ''; ?>">
                    <h3><?php echo esc_html($reason['title']); ?></h3>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</section>

<section class="stats" aria-label="Cifras">
    <ul>
        <li><strong>+37</strong><span>Años en el mercado</span></li>
        <li><strong>+205,000</strong><span>Proyectos realizados</span></li>
        <li><strong>+3,700</strong><span>Clientes satisfechos</span></li>
        <li><strong>50,000</strong><span>Compromiso de entregas mensuales</span></li>
    </ul>
</section>
