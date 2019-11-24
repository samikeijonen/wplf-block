/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { SelectControl } = wp.components;

/**
 * Post picker for post type.
 *
 * @param {Object} props Props for component.
 */
const PostSelector = ( props ) => {
	const { attributes, setAttributes } = props;
	const options = [];

	if ( props.posts ) {
		options.push( { value: 0, label: __( 'Select a Post', 'wplf-block' ) } );
		props.posts.forEach( ( post ) => {
			options.push( {
				value: post.id,
				label: post.title.rendered,
			} );
		} );
	} else {
		options.push( {
			value: 0,
			label: __( 'Loading...', 'wplf-block' ),
		} );
	}

	return (
		<SelectControl
			label={ __( 'Select a Post', 'wplf-block' ) }
			options={ options }
			onChange={ ( postId ) => {
				setAttributes( { postId } );
			} }
			value={ attributes.postId }
		/>
	);
};

export default withSelect( ( select, props ) => {
	const { postType } = props;
	return {
		posts: select( 'core' ).getEntityRecords( 'postType', postType ),
		props,
	};
} )( PostSelector );
