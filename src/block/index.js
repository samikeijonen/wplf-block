/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';

const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: __( 'WP Libre Form', 'wplf-block' ),
	description: __( 'Add WP Libre form block.', 'wplf-block' ),
	icon,
	keywords: [ __( 'form', 'wplf-block' ), __( 'libre', 'wplf-block' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit: edit,
	save: () => {
		return null;
	},
} );
