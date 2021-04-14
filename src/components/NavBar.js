import React, { useEffect, useState } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import image from './styles/logo.png';
import { Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';
function logout() {
	localStorage.removeItem('token');
	window.location.reload();
}
function NavBar() {
	let [ isToken, setIsToken ] = useState(false);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsToken(true);
		} else {
			setIsToken(false);
		}
	}, []);
	return (
		<Navbar  className="shadow-anim" bg="light">
			<Navbar.Brand className="font-weight-bold text-uppercase">
				<Image style={{ height: '48px' }} src={image} alt="logo" />
			</Navbar.Brand>
			<Navbar.Brand className="font-weight-bold text-uppercase">SkinX</Navbar.Brand>
			<div className="ml-auto">
				{isToken === false ? null : (
					<Button
						onClick={logout}
						boxShadow="none"
						transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
						_focus={{
							boxShadow: 'none',
							
						}}
						_active={{
							transform: 'scale(0.94)',
							boxShadow: 'none'
						}}
						colorScheme="skin"
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
			</div>
		</Navbar>
	);
}

export default NavBar;
