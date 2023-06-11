<?php get_header() ?>

<div class="container">
    <?php while ( have_posts() ): the_post(); ?>

        <h1 class="title__work"><?php the_title() ?></h1>

        <div class="tags__works__container">
            <div class="tags__works__animation">
                <?php $tags = get_the_terms( get_post(), 'work_tag' ) ?>
                <?php foreach ( $tags as $tag ): ?>
                    <p class="tag__works"><?= $tag->name ?></p>
                <?php endforeach ?>
            </div>
        </div>

        <div class="work__content">

            <div class="work__thumbnail">
                <?php the_post_thumbnail() ?>
            </div>

            <?php the_content(); ?>
        </div>


    <?php endwhile; ?>
</div>

<?php get_footer() ?>