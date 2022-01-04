import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, DiscordLogo, InstaLogo, TwitterLogo } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="rarity" onClick={toggle}>
                        Rarity
                    </SidebarLink>
                    <SidebarLink to="roadmap" onClick={toggle}>
                        Roadmap
                    </SidebarLink>
                    <SidebarLink to="outreach" onClick={toggle}>
                        Outreach
                    </SidebarLink>
                    <SidebarLink to="team" onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to="/">
                        <DiscordLogo/>
                    </SidebarLink>
                    <SidebarLink to="/">
                        <InstaLogo />
                    </SidebarLink>
                    <SidebarLink to="/">
                        <TwitterLogo style={{ paddingTop: 20 + 'px' }}/>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;