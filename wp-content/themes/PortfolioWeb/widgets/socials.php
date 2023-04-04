<?php

$networks = [
	'malt'   => 'Malt',
	'github' => 'Github',
	'fiverr' => 'Fiverr'
];

?>

<?php
foreach ( $networks as $network => $label ) {
	if ( ! empty( $instance[ $network ] ) ) {
		?>
        <a href=" <?= esc_url( $instance[ $network ] ) ?>"><?= $label?></a>
		<?php
	}
}
?>


