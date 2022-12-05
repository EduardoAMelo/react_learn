import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #444444;
height: 30vh;
width: auto;
display: flex;
justify-content: space-between;
margin: 0%;
`;

export const NavLinkBox = styled(Link)`
color: #FFFFFF;
display: flex;
width: 16vw;
align-items: center;
justify-content: center;
border-right: grey;
border-left: grey;
text-decoration: none;
height: inherit;
cursor: pointer;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #18644A;
	color: #FFFFFF;
}
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
font-family: 'Roboto';
font-size: small;
font-weight: 500;
padding: 2vh;
height: 100%;
cursor: pointer;
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenuBackground = styled.div`
align-items: center;
align-self: flex-end;
background: #258765;
display: flex;
justify-content: center;
width: 200%;
@media screen and (max-width: 768px) {
	display: none;
}
`;
export const NavMenu = styled.div`
display: flex;
width: 80%;
height: inherit;
margin-left: auto;
margin-right: auto;
align-items: center;
justify-content: center;
align-self: flex-end;
// margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
