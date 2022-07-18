import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Styles from './Burger.module.css';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { Cross } from '@styled-icons/entypo/Cross';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import { HamburgerSlider} from 'react-animated-burgers'

const Burger = (props) => {

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  return (
    <>
    <div className={Styles.burger}>
    <div onClick={()=> toggleButton()}> 
    {isActive && <div className={Styles.mobileNav}>
		{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /> 
        
			))}
			</div>
		}
   	</div>

    
    <HamburgerSlider {...{ isActive, toggleButton }} size="3rem" barColor="#FFFFFF"/>
    </div>
    
    </>
  )
}

export default Burger;