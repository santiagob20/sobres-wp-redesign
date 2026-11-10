<?php
/**
 * Template Name: Cotiza
 */
get_header();
?>
<section class="page-hero">
    <p class="eyebrow">Cotización</p>
    <h1>Cuéntanos el proyecto y te respondemos por WhatsApp</h1>
    <p>Con el uso, la cantidad y la medida alcanza para orientar el papel y la impresión.</p>
</section>
<section class="wrap quote-layout">
    <aside>
        <h2>Qué ayuda a cotizar</h2>
        <ul>
            <li>Qué va dentro del sobre.</li>
            <li>Cantidad aproximada del lote.</li>
            <li>Si lleva impresión, ventanilla o un color de papel.</li>
            <li>Ciudad de entrega.</li>
        </ul>
    </aside>
    <form class="quote-form" novalidate>
        <p class="form-errors" role="alert" hidden></p>
        <label>Nombre<input name="nombre" autocomplete="name" required></label>
        <label>Empresa <span>opcional</span><input name="empresa" autocomplete="organization"></label>
        <label>WhatsApp o teléfono<input name="telefono" inputmode="tel" autocomplete="tel" required></label>
        <label>Correo <span>opcional</span><input name="correo" type="email" autocomplete="email"></label>
        <label>Ciudad <span>opcional</span><input name="ciudad" autocomplete="address-level2"></label>
        <label>Producto
            <select name="producto" required>
                <option value="">Elige un tipo de sobre</option>
                <?php foreach (sobrypal_products() as $product) : ?>
                    <option><?php echo esc_html($product['name']); ?></option>
                <?php endforeach; ?>
                <option>Medida especial / otro</option>
            </select>
        </label>
        <label>Cantidad aproximada <span>opcional</span><input name="cantidad"></label>
        <label>Medida, si ya la conoces <span>opcional</span><input name="medida"></label>
        <label>Qué debe decir o proteger el sobre <span>opcional</span><textarea name="mensaje" rows="5"></textarea></label>
        <label class="check"><input type="checkbox" name="autorizacion" required> Autorizo a SOBRYPAL S.A.S. a usar estos datos solo para responder esta cotización.</label>
        <button type="submit">Enviar cotización por WhatsApp</button>
        <pre class="draft" hidden></pre>
    </form>
</section>
<?php
get_footer();
