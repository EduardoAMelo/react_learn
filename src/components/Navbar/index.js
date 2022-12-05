import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavMenuBackground,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
        <NavMenuBackground>
            <NavMenu>
                <NavLink to='/' activeStyle>
                    HOME
                </NavLink>
                <NavLink to='/about' activeStyle>
                    ABOUT
                </NavLink>
                <NavLink to='/contact' activeStyle>
                    CONTACT
                </NavLink>
                <NavLink to='/Garanties' activeStyle>
                    GARANTY
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
        </NavMenuBackground>
	</Nav>
	</>
);
};

export default Navbar;
