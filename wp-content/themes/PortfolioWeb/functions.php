<?php

require_once ('include/supports.php');
require_once ('include/assets.php');


function theme_title_separator (): string {
	return '|';
}


add_filter('document_title_separator', 'theme_title_separator');