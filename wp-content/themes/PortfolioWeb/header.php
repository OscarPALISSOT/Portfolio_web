<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head() ?>
</head>
<header>
    <a href="<?= home_url('/'); ?>" title="<?= __('Homepage', 'portfolio') ?>">
        <img class="header__logo" src="<?= get_theme_mod('logo') ?>" alt="logo">
    </a>

    <div class="hamburger__toggle">
        <div class="hamburger__btn"></div>
    </div>

    <?php wp_nav_menu([
	    'theme_location' => 'header',
        'container' => false,
        'menu_class' => 'nav_menu'
    ]) ?>

</header>
<body>
<main>
