<?php

add_action('wp_enqueue_scripts',  function (){

	wp_register_style('variables', get_template_directory_uri() . '/assets/css/variables.css', []);
	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css', ['variables', 'font']);
    wp_register_style('rollEffect', get_template_directory_uri() . '/assets/css/rollEffect.css', []);
	wp_register_style('footer', get_template_directory_uri() . '/assets/css/footer.css', ['variables', 'style', 'rollEffect']);
	wp_register_style('header', get_template_directory_uri() . '/assets/css/header.css', ['variables', 'style', 'rollEffect']);
	wp_register_style('archive-works', get_template_directory_uri() . '/assets/css/archive-works.css', ['variables', 'style']);
	wp_register_style('single-works', get_template_directory_uri() . '/assets/css/single-works.css', ['variables', 'style']);
	wp_register_style('carrousel', get_template_directory_uri() . '/assets/css/carrousel.css', []);
	wp_register_style('font', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap', []);

    //https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC@8..144,-10..0,25..151,-200..150,323..603,25..135,649..854,-305..-98,560..788,416..570,528..760

    wp_enqueue_style('header');
	wp_enqueue_style('footer');

    wp_register_script('rollEffectJs', get_template_directory_uri() . '/assets/js/rollEffect.js', [], false, true);
    wp_enqueue_script('footerJs', get_template_directory_uri() . '/assets/js/footer.js', ['rollEffectJs'], false, true);
    wp_enqueue_script('headerJs', get_template_directory_uri() . '/assets/js/header.js', [], false, true);



    is_post_type_archive('works') && wp_enqueue_style('archive-works');
    is_post_type_archive('works') && wp_enqueue_script('archive-worksJS', get_template_directory_uri() . '/assets/js/archive-works.js', [], false, true);

    is_singular('works') && wp_enqueue_style('single-works');
    is_singular('works') && wp_enqueue_style('carrousel');
    is_singular('works') && wp_enqueue_script('carrouselJs', get_template_directory_uri() . '/assets/js/carrousel.js', [], false, true);
});

