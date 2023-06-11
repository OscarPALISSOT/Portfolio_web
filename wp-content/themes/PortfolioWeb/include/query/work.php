<?php

add_action('pre_get_posts', function ($query) {
    if (
        is_admin() ||
        !$query->is_main_query()
    ) {
        return;
    }

    if (is_post_type_archive('works')) {
        $query->set('posts_per_page', 7);
        $query->set('orderby', 'date');
        $query->set('order', 'DESC');
    }
});