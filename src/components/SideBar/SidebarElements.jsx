import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import discordLogo from '../../images/discord-logo.png';
import instaLogo from '../../images/insta-logo.png';
import twitterLogo from '../../images/twitter-logo.png';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #FFF;
    display: grid;
    align-items: top;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
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


export const Icon = styled.div`
    position: absolute;
    // top: 1.2rem;
    padding-top: 50px;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding-top: 15%;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff
    cursor: pointer;

    &:hover {
    color: #89CFF0;
    transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
    color: #01Bf71;
    transition: 0.2s ease-in-out;
    }
`