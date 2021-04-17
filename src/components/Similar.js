import React from 'react';
import ImageGallery from 'react-image-gallery';

function Similar() {
	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/'
		},
		{
			original: 'https://picsum.photos/id/1015/900/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/'
		},
		{
			original: 'https://picsum.photos/id/1019/1000/1200/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/'
		}
	];

	return (
		<div>
			<ImageGallery showPlayButton={false} items={images} />
		</div>
	);
}

export default Similar;
