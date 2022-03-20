import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, TwitterLogo, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="roadmap" spy={true} smooth={true} onClick={toggle}>
                        Roadmap
                    </SidebarLink>
                    <SidebarLink to="outreach" spy={true} smooth={true} onClick={toggle}>
                        Outreach
                    </SidebarLink>
                    <SidebarLink to="team" spy={true} smooth={true} onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarRoute to={{ pathname: "https://twitter.com/SusFishNft" }} target="_blank">
                        <TwitterLogo style={{ paddingTop: 20 + 'px' }}/>
                    </SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;