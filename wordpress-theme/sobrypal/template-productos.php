<?php
/**
 * Template Name: Productos
 * Catalog and standard sizes.
 */
get_header();
?>
<section class="page-hero">
    <p class="eyebrow">Catálogo</p>
    <h1>Sobres fabricados para el uso, no para un anaquel genérico</h1>
    <p>Seis líneas cubren la mayoría de los proyectos. Si el contenido pide otra medida o otro papel, lo fabricamos.</p>
</section>
<section class="paper">
    <div class="wrap catalog">
        <?php foreach (sobrypal_products() as $product) : ?>
            <article id="<?php echo esc_attr($product['slug']); ?>">
                <h2><?php echo esc_html($product['name']); ?></h2>
                <p><?php echo esc_html($product['summary']); ?></p>
                <p><?php echo esc_html($product['text']); ?></p>
                <a href="<?php echo esc_url(sobrypal_quote_whatsapp_url($product['name'])); ?>">Cotizar este sobre</a>
            </article>
        <?php endforeach; ?>
    </div>
</section>
<section class="wrap sizes">
    <h2>Medidas</h2>
    <div class="size-grid">
        <article>
            <h3>Básicas</h3>
            <ul>
                <li><span>½ carta</span><span>15 × 23 cm</span></li>
                <li><span>Carta</span><span>22,5 × 29 cm</span></li>
                <li><span>Oficio</span><span>25 × 35 cm</span></li>
            </ul>
        </article>
        <article>
            <h3>Un poco más grandes</h3>
            <ul>
                <li><span>Carta especial</span><span>25 × 31 cm</span></li>
                <li><span>Extra oficio</span><span>27 × 37 cm</span></li>
                <li><span>Gigante</span><span>30 × 42 cm</span></li>
            </ul>
        </article>
        <article>
            <h3>Personalizadas</h3>
            <p>Cuadrados, radiografía, diezmo y cualquier formato que el contenido pida.</p>
        </article>
    </div>
</section>
<?php
get_footer();
