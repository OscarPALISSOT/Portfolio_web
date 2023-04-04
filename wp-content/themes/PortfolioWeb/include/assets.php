<?php

add_action('wp_enqueue_scripts',  function (){
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', []);
	wp_register_style('font', 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900', []);
	wp_enqueue_style('font');
	wp_enqueue_style('style');
});