/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, Placeholder } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { serverSideRender: ServerSideRender } = wp;

/**
 * Internal dependencies
 */
import PostSelector from './components/postSelector';
import metadata from './block.json';

const { name } = metadata;

const WPLFBlockEdit = ( props ) => {
	// Setup the attributes.
	const { attributes } = props;

	const emptyResponsePlaceholder = () => (
		<Placeholder>
			<PostSelector postType="wplf-form" { ...props } />
		</Placeholder>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Form Settings', 'wplf-block' ) }>
					<PostSelector postType="wplf-form" { ...props } />
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={ name }
				attributes={ attributes }
				EmptyResponsePlaceholder={ emptyResponsePlaceholder }
			/>
		</>
	);
};

export default WPLFBlockEdit;
