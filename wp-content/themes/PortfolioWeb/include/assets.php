<?php

add_action('wp_enqueue_scripts',  function (){
	wp_register_style('variables', get_template_directory_uri() . '/assets/css/variables.css', []);
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', ['variables', 'font']);
    wp_register_script('footerJs', get_template_directory_uri() . '/assets/js/footer.js', [], false, true);
	wp_register_style('footer', get_template_directory_uri() . '/assets/css/footer.css', ['variables', 'style']);
	wp_register_style('font', 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900', []);
	wp_enqueue_style('footer');
    wp_enqueue_script('footerJs');
});