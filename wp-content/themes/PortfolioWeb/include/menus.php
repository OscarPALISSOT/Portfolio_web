<?php

add_action('after_setup_theme', function (){
	register_nav_menu('header', __('Main navigation', 'portfolio'));
});


require_once('widgets/socials.php');

add_action('widgets_init', function (){
	remove_theme_support( 'widgets-block-editor' );
	register_widget(Portfolio_Socials_Widget::class);
	register_sidebar([
		'id' => 'footer',
		'name' => __('Footer', 'portfolio'),
		'before_title' => '<div class="footerTitle">',
		'after_title' => '</div>',
		'before_widget' => '<div class="footerCol">',
		'after_widget' => '</div>',
	]);
});


