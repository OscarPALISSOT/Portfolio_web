<?php

function theme_support () {
	add_theme_support('title-tag');
}

function theme_register_assets()
{
	wp_register_style('style', get_stylesheet_uri(), []);
	wp_enqueue_style('style');
}

function theme_title_separator (): string {
	return '|';
}

add_action('wp_enqueue_scripts', 'theme_register_assets');
add_action('after_setup_theme', 'theme_support');
add_filter('document_title_separator', 'theme_title_separator');