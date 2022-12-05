import { Divider } from '@mui/material';
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavMenuBackground,
NavBtn,
NavBtnLink,
NavLinkBox,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
        <NavMenuBackground>
            <NavMenu>
                <Divider orientation="vertical" flexItem />
                <NavLinkBox>
                    <NavLink to='/' activeStyle>
                        HOME
                    </NavLink>
                </NavLinkBox>
                <Divider orientation="vertical" flexItem />
                <NavLinkBox>
                    <NavLink to='/about' activeStyle>
                        ABOUT
                    </NavLink>
                </NavLinkBox>
                <Divider orientation="vertical" flexItem />
                <NavLinkBox>
                    <NavLink to='/contact' activeStyle>
                        CONTACT
                    </NavLink>
                </NavLinkBox>
                <Divider orientation="vertical" flexItem />
                <NavLinkBox>
                    <NavLink to='/Garanties' activeStyle>
                        GARANTY
                    </NavLink>
                </NavLinkBox>
                <Divider orientation="vertical" flexItem />
            </NavMenu>
        </NavMenuBackground>
	</Nav>
	</>
);
};

export default Navbar;
