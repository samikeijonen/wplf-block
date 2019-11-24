/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { PanelBody, ServerSideRender } = wp.components;
const { InspectorControls } = wp.blockEditor;

/**
 * Internal dependencies
 */
import PostSelector from './components/postSelector';
import metadata from './block.json';

const { name } = metadata;

class WPLFBlockEdit extends Component {
	render() {
		// Setup the attributes.
		const {
			attributes,
        } = this.props;	

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Form Settings', 'wplf-block' ) }>
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

export default WPLFBlockEdit;