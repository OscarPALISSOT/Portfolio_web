<?php

$networks = [
	'malt'   => 'Malt',
	'github' => 'Github',
	'fiverr' => 'Fiverr'
];

?>

<div class="social__links">
<?php
foreach ( $networks as $network => $label ) {
	if ( ! empty( $instance[ $network ] ) ) {
		?>

        <a href=" <?= esc_url( $instance[ $network ] ) ?>" class="social__link" target="_blank" rel="noopener noreferrer">
            <img class="socials__icons" src="<?= get_template_directory_uri() . '/assets/img/' . $label . '_icon.svg'?>" alt="<?= $label?>">
        </a>
		<?php
	}
}
?>
</div>


