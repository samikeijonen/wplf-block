/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const { PanelBody, ServerSideRender } = wp.components;
const { InspectorControls } = wp.blockEditor;

/**
 * Internal dependencies
 */
//import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import PostSelector from './components/dropdown';

const { name, category, attributes } = metadata;

class WPLFBlock extends Component {

	render() {
		// Setup the attributes.
		const {
			attributes,
		} = this.props;

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Form Settings' ) }>
						<PostSelector postType="wplf-form" { ...this.props } />
					</PanelBody>
				</InspectorControls>

				<ServerSideRender
					block={ name }
					attributes={ attributes }
				/>
			</>
		);
	}
}

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
	edit: WPLFBlock,
	save: () => {
		return null;
	},
} );
