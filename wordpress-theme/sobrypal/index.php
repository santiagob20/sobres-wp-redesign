<?php
/**
 * Fallback template. The front page file covers the home URL.
 */
get_header();
if (have_posts()) {
    while (have_posts()) {
        the_post();
        echo '<article class="prose wrap"><h1>' . esc_html(get_the_title()) . '</h1>';
        the_content();
        echo '</article>';
    }
}
get_footer();
