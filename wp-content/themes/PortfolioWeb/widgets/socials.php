<?php
/**
 * @var array $instance
 */
?>

<?php

$networks = [
	'malt'   => 'Malt',
	'github' => 'Github',
	'fiverr' => 'Fiverr'
];

?>


<div class="footer__credits"><?= esc_html( $instance['credits'] ) ?></div>

<?php
foreach ( $networks as $network => $label ) {
	if ( ! empty( $instance[ $network ] ) ) {
		?>
        <a href=" <?= esc_url( $instance[ $network ] ) ?>"><?= $label?></a>
		<?php
	}
}
?>


