import React, { useEffect, useState } from 'react';
import Upload from './Upload';
import { Container, Box, Center, Heading, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { AiOutlineSkin } from 'react-icons/ai';
import { VscDiff } from 'react-icons/vsc';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import './styles/style.css';
import Classify from './Classify';
// import { Link, Redirect } from 'react-router-dom';
function logout() {
	localStorage.removeItem('token');
	window.location.reload();
	return <Redirect to="/" />;
}
function classifier() {
	console.log('redirecting');
	// return <Redirect to="/classify" />;
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
			<VStack minW="100vw">
				<BrowserRouter>
					{' '}
					<Container pt="4" maxW="container.lg">
						<Heading alignContent="start" d="flex" fontWeight="600" size="xl" className="title-font">
							SkinX
							{!isToken ? null : (
								<Box margin="0 0 0 auto">
									<Link to={'/'}>
										<Button
											margin="0 1rem 0 auto"
											onClick={classifier}
											boxShadow="none"
											transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
											_focus={{
												boxShadow: 'none'
											}}
											_active={{
												transform: 'scale(0.94)',
												boxShadow: 'none'
											}}
											// _hover={{ bg: 'transparent' }}
											colorScheme="blue"
											variant="outline"
											rightIcon={
												<IconContext.Provider value={{ size: '24px' }}>
													<AiOutlineSkin />
												</IconContext.Provider>
											}
										>
											Skin
										</Button>
									</Link>
									<Link to={'/classify'}>
										<Button
											margin="0 1rem 0 auto"
											onClick={classifier}
											boxShadow="none"
											transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
											_focus={{
												boxShadow: 'none'
											}}
											_active={{
												transform: 'scale(0.94)',
												boxShadow: 'none'
											}}
											// _hover={{ bg: 'transparent' }}
											colorScheme="blue"
											variant="outline"
											rightIcon={
												<IconContext.Provider value={{ size: '24px' }}>
													<VscDiff />
												</IconContext.Provider>
											}
										>
											Classfier
										</Button>
									</Link>

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
										// _hover={{ bg: 'transparent' }}
										colorScheme="red"
										variant="outline"
										rightIcon={
											<IconContext.Provider value={{ size: '24px' }}>
												<FiLogOut />
											</IconContext.Provider>
										}
									>
										Logout
									</Button>
								</Box>
							)}
						</Heading>
					</Container>
					<Box w="100vw" mx="4">
						<Route exact name="upload" path="/" component={Upload} />
						<Route name="classify" path="/classify" component={Classify} />
					</Box>
				</BrowserRouter>
			</VStack>
		</span>
	);
}
