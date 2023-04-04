<?php get_header() ?>

<?php while (have_posts()): the_post() ?>
    <a href="<?= the_permalink() ?>"><?= esc_attr(get_the_title()) ?></a>
<?php endwhile; ?>

<?php get_footer() ?>

