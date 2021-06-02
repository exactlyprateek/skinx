import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function BrowseButton(props) {
    const size="28vh";
	return (
		<Button h={size} m="0.5rem" width={size} onClick={props.func}>
			<Text mx="2" noOfLines="1" fontSize="xl" textTransform="uppercase" fontWeight="600" isTruncated>
				Browse
			</Text>
		</Button>
	);
}

export default BrowseButton;
