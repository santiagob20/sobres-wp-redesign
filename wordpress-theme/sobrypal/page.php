<?php
/**
 * Generic page, used when a page has no specific template.
 */
get_header();
while (have_posts()) {
    the_post();
    echo '<article class="prose wrap"><h1>' . esc_html(get_the_title()) . '</h1>';
    the_content();
    echo '</article>';
}
get_footer();
