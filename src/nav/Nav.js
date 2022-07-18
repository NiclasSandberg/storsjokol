import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import logo from '../assets/images/logo.png'
import Burger from './Burger.jsx';
import NavDesktop from './NavDesktop.jsx';
import useScroll from '../customHooks/useScroll';

const Nav = () => {

	const { scrollY, scrollX, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }
	return (
		<>
		
		<nav style={scrollDirection === "down" || scrollY < 1 ? styles.active: styles.hidden}>
		<img className="logotype" src={logo} alt="" />
		<NavDesktop />
		<Burger /> 
		</nav>
		
		</>
	);
};

export default Nav;
