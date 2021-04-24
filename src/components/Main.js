import React, { useEffect, useState } from 'react';
import Upload from './Upload';
import { Container, Box, Center, Heading, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import './styles/style.css';
function logout() {
	localStorage.removeItem('token');
	window.location.reload();
}
export default function Main() {
	let [ isToken, setIsToken ] = useState(false);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsToken(true);
		} else {
			setIsToken(false);
		}
	}, []);
	return (
		<span id="main">
			{/* <NavBar />{' '} */}
			<Center>
			
					<VStack minW="100vw">
						<Container pt="4" maxW="container.lg">
							<Heading
								alignContent="start"
								d="flex"
								fontWeight="600"
								
								size="xl"
								className="title-font"
							>
								SkinX
								{isToken === false ? null : (
									<Button
										margin="0 0 0 auto"
										onClick={logout}
										boxShadow="none"
										transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
										_focus={{
											boxShadow: 'none'
										}}
										_active={{
											transform: 'scale(0.94)',
											boxShadow: 'none'
										}}
										_hover={{ bg: 'transparent' }}
										colorScheme="blue"
										variant="outline"
										rightIcon={
											<IconContext.Provider value={{ size: '24px' }}>
												<FiLogOut />
											</IconContext.Provider>
										}
									>
										Logout
									</Button>
								)}
							</Heading>
						</Container>
						<Box w="100vw" mx="4">
							<Upload />
						</Box>
					</VStack>

					{/* <Box className="shadow-anim" bg="#f8f9fa" height="87vh">
						<Heading className="font" size="xl" mt="2">
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
					</Box> */}
			
			</Center>
		</span>
	);
}
