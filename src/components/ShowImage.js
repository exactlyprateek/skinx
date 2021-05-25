import { Image } from '@chakra-ui/image';
import React from 'react';

function ShowImage(props) {
	return (
		<Image
            onClick={props.func}
			transition="all 0.2s cubic-bezier(.39,.58,.57,1);"
			_active={{
				outline: 'none',
				transform: 'scale(0.94)',
				boxShadow: 'none'
			}}
			_hover={{
				boxShadow: '1px 0px 22px grey',
				transform: 'scale(1.01)'
			}}
			rounded="md"
			h="25vh"
            m="0.5rem"
			src={props.url}
			alt="selected image"
		/>
	);
}

export default ShowImage;
