<?php
add_action('customize_register', function (WP_Customize_Manager $manager){

	$manager->add_section('portfolio_appearance', [
		'title' => __('Logo')
	]);

	$manager->add_setting('logo', [
		'sanitize_callback' => 'esc_url_raw'
	]);

	$manager->add_control(new WP_Customize_Image_Control($manager, 'logo', [
		'label' => __('Logo', 'portfolio'),
		'section' => 'portfolio_appearance'
	]));
});

function my_theme_archive_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    }

    return $title;
}

add_filter( 'get_the_archive_title', 'my_theme_archive_title' );