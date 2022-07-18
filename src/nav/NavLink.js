import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import './Nav.css';
import Burger from './Burger.jsx';

const NavLink = ({ navLinkId, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
		
	};
	
	return (
		<>

		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			<div className="nav-link">
			{navLinkId}
			</div>
		</span>
		</>
	);
};

export default NavLink;
