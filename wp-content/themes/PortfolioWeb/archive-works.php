<?php get_header() ?>

<h1 class="title">
    <?= get_the_archive_title() ?>
</h1>

<div class="gallery">


    <div class="left__gallery">
        <div class="work__item first__work__item"><h1>Lorem ipsum dolor sit amet</h1></div>
        <?php  $i = 0; while (have_posts()): the_post(); ?>
            <?php if ($i % 2 == 1): ?>
                <a href="<?=the_permalink()?>" class="work__link">
                    <div class="work__item item__<?= $i?>">
                        <?php the_post_thumbnail() ?>
                        <h2 class="work__item__title"><?= esc_attr(get_the_title()) ?></h2>
                    </div>
                </a>
            <?php endif; ?>
        <?php $i++; endwhile; ?>
    </div>
    <div class="right__gallery">
        <?php  $i = 0; while (have_posts()): the_post(); ?>
            <?php if ($i % 2 == 0): ?>
                <a href="<?=the_permalink()?>" class="work__link">
                    <div class="work__item">
                        <?php the_post_thumbnail() ?>
                        <h2 class="work__item__title"><?= esc_attr(get_the_title()) ?></h2>
                    </div>
                </a>
            <?php endif; ?>
            <?php $i++; endwhile; ?>
        <div class="work__item last__work__item"><h1>Lorem ipsum dolor sit amet</h1></div>
    </div>
</div>


<?php get_footer() ?>

