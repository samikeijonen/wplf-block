<?php
/**
 * Block rendering.
 *
 * @package WPLFBlock\Block
 */

namespace WPLFBlock\Block;

/**
 * Registers block on server.
 */
function register_block() {
	register_block_type(
		'wp-libre-form/form-block',
		[
			'render_callback' => __NAMESPACE__ . '\render_block',
			'attributes'      => [
				'align'  => [
					'type'    => 'string',
					'default' => '',
				],
				'postId' => [
					'type'    => 'string',
					'default' => '',
				],
			],
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\register_block' );

/**
 * Renders the form block.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the form content.
 */
function render_block( $attributes ) {
	$form_id = $attributes['postId'];

	if ( 0 === $form_id || empty( $form_id ) ) {
		return;
	}

	return wplf()->wplf_form( intval( $form_id ) );
}
