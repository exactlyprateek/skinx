import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import image from './styles/logo.png';
function NavBar() {
	return (
		<Navbar bg="light">
			<Navbar.Brand className="font-weight-bold text-uppercase">
				<Image style={{ height: '48px' }} src={image} alt="logo" />
			</Navbar.Brand>
			<Navbar.Brand className="font-weight-bold text-uppercase">SkinX</Navbar.Brand>
		</Navbar>
	);
}

export default NavBar;
