<?php get_header() ?>

<?php /* while (have_posts()): the_post() ?>
    <a href="<?= the_permalink() ?>"><?= esc_attr(get_the_title()) ?></a>
<?php endwhile; */?>

<h1 class="title">
    <?= get_the_archive_title() ?>
</h1>

<div class="gallery">
    <div class="left__gallery">
        <div class="work__item first__work__item"><h1>Lorem ipsum dolor sit amet</h1></div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
    </div>
    <div class="right__gallery">
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
        <div class="work__item">
            <img src="https://picsum.photos/600/400" alt="">
            <h2 class="work__item__title">Un projet</h2>
        </div>
    </div>
</div>


<?php get_footer() ?>

