import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>
            <NavLink to='/Garanties' activeStyle>
                Garanty
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
