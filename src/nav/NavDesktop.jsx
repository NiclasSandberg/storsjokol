import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import logo from '../assets/images/logo.png'
import Burger from './Burger.jsx';
import Styles from './NavDesktop.module.css';

const NavDesktop = () => {

	
	return (
		<>
		
		<div className={Styles.NavDesktop}>
		{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /> 
			))}
			</div>
			
		
		
		</>
	);
};

export default NavDesktop;