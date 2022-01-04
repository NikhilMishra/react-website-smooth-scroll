import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  DiscordLogo,
  InstaLogo,
  TwitterLogo
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Logo/>
        </NavLink>
              <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to='/rarity' activeStyle>
            Rarity
          </NavLink>
          <NavLink to='/roadmap' activeStyle>
            Roadmap
          </NavLink>
          <NavLink to='/outreach' activeStyle>
            Outreach
          </NavLink>
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/'>
            <DiscordLogo/>
          </NavLink>
          <NavLink to='/'>
            <InstaLogo/>
          </NavLink>
          <NavLink to='/'>
            <TwitterLogo/>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
