<?php

add_action('wp_enqueue_scripts',  function (){

	wp_register_style('variables', get_template_directory_uri() . '/assets/css/variables.css', []);
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', ['variables', 'font']);
	wp_register_style('footer', get_template_directory_uri() . '/assets/css/footer.css', ['variables', 'style']);
	wp_register_style('header', get_template_directory_uri() . '/assets/css/header.css', ['variables', 'style']);
	wp_register_style('archive-works', get_template_directory_uri() . '/assets/css/archive-works.css', ['variables', 'style']);
	wp_register_style('font', 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC@8..144,-10..0,25..151,-200..150,323..603,25..135,649..854,-305..-98,560..788,416..570,528..760', []);

    wp_enqueue_style('header');
	wp_enqueue_style('footer');

    wp_enqueue_script('footerJs', get_template_directory_uri() . '/assets/js/footer.js', [], false, true);
    wp_enqueue_script('headerJs', get_template_directory_uri() . '/assets/js/header.js', [], false, true);


    is_post_type_archive('works') && wp_enqueue_style('archive-works');
    is_post_type_archive('works') && wp_enqueue_script('archive-worksJS', get_template_directory_uri() . '/assets/js/archive-works.js', [], false, true);

});

