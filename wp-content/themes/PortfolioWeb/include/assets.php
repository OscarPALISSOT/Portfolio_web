<?php

add_action('wp_enqueue_scripts',  function (){
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', []);
	wp_enqueue_style('style');
});