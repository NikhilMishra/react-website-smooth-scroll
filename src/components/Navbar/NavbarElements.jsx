import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import mobileLogo from '../../images/mobile-logo.svg';
import discordLogo from '../../images/discord-logo.png';
import instaLogo from '../../images/insta-logo.png';
import twitterLogo from '../../images/twitter-logo.png';

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  width: 215px;
  height: 139px;

  @media screen and (max-width: 1225px) {
    background-image: url(${mobileLogo});
    width: 66px;
    height: 54px;
  }
`;

export const DiscordLogo = styled.div`
  background-image: url(${discordLogo});
  width: 40px;
  height: 31px;
`;

export const InstaLogo = styled.div`
  background-image: url(${instaLogo});
  width: 40px;
  height: 40px;
`;

export const TwitterLogo = styled.div`
  background-image: url(${twitterLogo});
  width: 40px;
  height: 33px;
`;
export const Nav = styled.nav`
  // background: #FFF;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((85vw - 1000px) / 2);
  // margin-top: 35px;
  z-index: 10;
  padding-top: 100px;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  font-family: 'Nunito', sans-serif;
  font-size: 21px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const MenuIcon = styled.div`
    display: none;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 1225px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 1225px) {
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

  @media screen and (max-width: 1225px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
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
    color: #010606;
  }
`;
