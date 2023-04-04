<?php get_header() ?>

<?php while ( have_posts() ): the_post(); ?>

    <h1><?php the_title() ?></h1>

	<?php $tags = get_the_terms( get_post(), 'work_tag' ) ?>
	<?php foreach ( $tags as $tag ): ?>
        <h2><?= $tag->name ?></h2>
	<?php endforeach ?>

	<?php the_content(); ?>

<?php endwhile; ?>

<?php get_footer() ?>