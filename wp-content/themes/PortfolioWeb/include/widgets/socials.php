<?php

class Portfolio_Socials_Widget extends WP_Widget {

	public array $fields = [];

	public function __construct() {
		parent::__construct(
			'portfolio_socials_widget',
			__( 'Socials widget', 'portfolio' ),
			array(
				'description' => __( 'Socials media links', 'portfolio' ),
			)
		);
		$this->fields = [
			'title'   => __( 'Title', 'portfolio' ),
			'malt'    => 'Malt',
			'github'  => 'Github',
			'fiverr'  => 'Fiverr'
		];
	}

	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( isset( $instance['title'] ) ) {
			$title = apply_filters( 'widget_title', $instance['title'] );
			echo $args['before_title'] . $title . $args['after_title'];
		}
        $template = locate_template('widgets/socials.php');
        if (!empty($template)){
            include($template);
        }
		echo $args['after_widget'];
	}

	public function form( $instance ) {

		foreach ( $this->fields as $field => $label ) {
			$value = $instance[ $field ] ?? '';
			?>
            <p>
                <label for="<?= $this->get_field_id( $field ) ?>"><?= $label ?></label>
                <input
                        type="text"
                        class="widefat"
                        name="<?= $this->get_field_name( $field ) ?>"
                        id="<?= $this->get_field_id( $field ) ?>"
                        value="<?= esc_attr( $value ) ?>"
                >
            </p>
			<?php
		}
	}

	public function update( $new_instance, $old_instance ): array {
		$output = [];
		foreach ( $this->fields as $field => $label ) {
			if ( ! empty( $new_instance[ $field ] ) ) {
				$output[ $field ] = $new_instance[ $field ];
			}
		}

		return $output;
	}
}