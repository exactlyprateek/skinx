import React from 'react';
import ImageGallery from 'react-image-gallery';

function Similar(props) {
	const images = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ].map((i) => ({
		original: `${window.location.origin}/images/${props.disease}/${i}.jpeg`,
		thumbnail: `${window.location.origin}/images/${props.disease}/${i}.jpeg`
		// original:  `/${props.disease}/${i}.jpeg`,
		// thumbnail:  `/${props.disease}/${i}.jpeg`
	}));
	
	return (
		<div>
			<ImageGallery showPlayButton={false} items={images} />
		</div>
	);
}

export default Similar;
