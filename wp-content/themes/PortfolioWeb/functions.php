<?php

function theme_support (): void
{
	add_theme_support('title-tag');
}

function theme_register_assets(): void
{
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', []);
	wp_register_style('herobanner', get_template_directory_uri() . '/assets/css/herobanner.css', []);
    wp_enqueue_style('Cormorant_Garamond_font','https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap' );
    //wp_enqueue_style('style');
    //wp_enqueue_style('herobanner');
}

function theme_title_separator (): string {
	return '|';
}

add_action('wp_enqueue_scripts', 'theme_register_assets');
add_action('after_setup_theme', 'theme_support');
add_filter('document_title_separator', 'theme_title_separator');