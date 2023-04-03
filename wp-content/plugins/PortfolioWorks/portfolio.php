<?php
/**
 * Plugin Name:   Portfolio
 * Plugin URI:    https://www.oscarpalissot.com
 * Description:   Works management for portfolio website.
 * Version:       1.0
 * Author:        Oscar PALISSOT
 * Author URI:    https://www.oscarpalissot.com
 */
add_action( 'init', function () {
	register_post_type( 'work', [
		'label'               => __( 'Work', 'portfolio' ),
		'menu_icon'           => 'dashicons-screenoptions',
		'labels'              => [
			'name'                     => __( 'Work', 'portfolio' ),
			'singular_name'            => __( 'Work', 'portfolio' ),
			'edit_item'                => __( 'Edit Work', 'portfolio' ),
			'new_item'                 => __( 'New Work', 'portfolio' ),
			'view_item'                => __( 'View Work', 'portfolio' ),
			'view_items'               => __( 'View Works', 'portfolio' ),
			'search_items'             => __( 'Search Works', 'portfolio' ),
			'not_found'                => __( 'No Works found.', 'portfolio' ),
			'not_found_in_trash'       => __( 'No Works found in Trash', 'portfolio' ),
			'all_items'                => __( 'All Works', 'portfolio' ),
			'archives'                 => __( 'Work archive', 'portfolio' ),
			'attributes'               => __( 'Work attributes', 'portfolio' ),
			'insert_into_item'         => __( '\Insert into Work', 'portfolio' ),
			'uploaded_to_this_item'    => __( 'Uploaded to this Work', 'portfolio' ),
			'filter_items_list'        => __( 'Filter Works list', 'portfolio' ),
			'items_list_navigation'    => __( 'Works list navigation', 'portfolio' ),
			'items_list'               => __( 'Works list', 'portfolio' ),
			'item_published'           => __( 'Work published.', 'portfolio' ),
			'item_published_privately' => __( 'Work published privately.', 'portfolio' ),
			'item_reverted_to_draft'   => __( 'Work reverted to draft.', 'portfolio' ),
			'item_scheduled'           => __( 'Work scheduled.', 'portfolio' ),
			'item_updated'             => __( 'Work updated.', 'portfolio' ),
		],
		'public'              => true,
        'has_archive' => true,
		'show_in_rest' => true,
		'hierarchical'        => false,
		'exclude_from_search' => false,
		'taxonomies'          => [ 'work_tag' ],
		'supports'            => [ 'title', 'editor', 'excerpt', 'thumbnail' ],
	] );

	register_taxonomy( 'work_tag', 'work', [

		'show_in_rest' => true,
		'labels' => [
			'name'                       => __( 'Tags', 'portfolio' ),
			'singular_name'              => __( 'Tag', 'portfolio' ),
			'search_items'               => __( 'Search Tags', 'portfolio' ),
			'popular_items'              => __( 'Popular Tags', 'portfolio' ),
			'all_items'                  => __( 'All Tags', 'portfolio' ),
			'edit_item'                  => __( 'Edit Tag', 'portfolio' ),
			'view_item'                  => __( 'View Tag', 'portfolio' ),
			'update_item'                => __( 'Update Tag', 'portfolio' ),
			'add_new_item'               => __( 'Add New Tag', 'portfolio' ),
			'new_item_name'              => __( 'New Tag Name', 'portfolio' ),
			'separate_items_with_commas' => __( 'Separate Tags with commas', 'portfolio' ),
			'add_or_remove_items'        => __( 'Add or remove Tags', 'portfolio' ),
			'choose_from_most_used'      => __( 'Choose from the most used Tags', 'portfolio' ),
			'not_found'                  => __( 'No Tags found.', 'portfolio' ),
			'no_terms'                   => __( 'No Tags', 'portfolio' ),
			'items_list_navigation'      => __( 'Tags list navigation', 'portfolio' ),
			'items_list'                 => __( 'Tags list', 'portfolio' ),
			'back_to_items'              => __( '&larr; Back to Tags', 'portfolio' ),
		]
	] );


} );



register_activation_hook( __FILE__, 'flush_rewrite_rules' );
register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );