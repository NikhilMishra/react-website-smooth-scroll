import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavLink,
  NavRoute,
  Bars,
  NavMenu,
  Logo,
  TwitterLogo
} from './NavbarElements';

const toggleHome = () => {
    scroll.scrollToTop();
}

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/' onClick={toggleHome}>
          <Logo/>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="roadmap" spy={true} smooth={true}>
            Roadmap
          </NavLink>
          <NavLink to='outreach' spy={true} smooth={true}>
            Outreach
          </NavLink>
          <NavLink to='team' spy={true} smooth={true}>
            Team
          </NavLink>
          <NavRoute to={{ pathname: "https://twitter.com/SusFishNft" }} target="_blank">
            <TwitterLogo/>
          </NavRoute>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
