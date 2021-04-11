import React from 'react';
import Upload from './Upload';
import NavBar from './NavBar.js';
import { Container, Box, SimpleGrid, Image,  Center, Heading } from '@chakra-ui/react';
import './styles/style.css';
export default function Main() {
	return (
		<span id="main">
			<NavBar />{' '}
			<Container maxW="container.xl">
				<SimpleGrid mt="4" minChildWidth="500px" spacing="40px">
					<Box className="shadow-anim" bg="gray.50" minH="450px" height="87vh">
						<Center>
							<Box w="80%" p="4" my="4">
								<Upload />
							</Box>
						</Center>
					</Box>
					<Box className="shadow-anim" bg="gray.50" height="87vh">
						<Heading size="xl" mt="2">
							More Examples
						</Heading>
						<Center>
							{' '}
							<SimpleGrid m="4" columns="2" spacing="10px">
								{' '}
								{[ '1', '2', '3', '4', '5', '6' ].map((i, idx) => (
									<Image
										src={`http://via.placeholder.com/180?text=Image+${i}`}
										alt="image"
										key={idx}
									/>
								))}
							</SimpleGrid>
						</Center>
					</Box>
				</SimpleGrid>
			</Container>{' '}
		</span>
	);
}
