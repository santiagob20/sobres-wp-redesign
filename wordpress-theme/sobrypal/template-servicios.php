<?php
/**
 * Template Name: Servicios
 */
get_header();
$steps = array(
    array('Cuéntanos el uso', 'Qué va adentro, a quién llega y si el sobre se entrega en mano, se archiva o viaja.'),
    array('Definimos papel, medida e impresión', 'Partimos de las medidas básicas o armamos una medida.'),
    array('Muestra, si el proyecto la pide', 'Apruebas color, texto y cierre antes de fabricar el lote.'),
    array('Producimos y entregamos', 'El taller está en Bogotá. La fecha se acuerda con el volumen y el acabado.'),
);
?>
<section class="page-hero">
    <p class="eyebrow">Servicios</p>
    <h1>El sobre se resuelve en el taller, con quien lo va a fabricar</h1>
</section>
<section class="wrap steps">
    <?php foreach ($steps as $index => $step) : ?>
        <article>
            <p>0<?php echo esc_html((string) ($index + 1)); ?></p>
            <h2><?php echo esc_html($step[0]); ?></h2>
            <p><?php echo esc_html($step[1]); ?></p>
        </article>
    <?php endforeach; ?>
</section>
<section class="paper">
    <div class="wrap catalog">
        <?php foreach (sobrypal_reasons() as $reason) : ?>
            <article>
                <h2><?php echo esc_html($reason['title']); ?></h2>
                <p><?php echo esc_html($reason['text']); ?></p>
            </article>
        <?php endforeach; ?>
    </div>
</section>
<?php
get_footer();
