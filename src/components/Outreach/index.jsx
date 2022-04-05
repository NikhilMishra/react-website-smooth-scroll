import React from 'react';
import {
    OutreachDiv,
    OutreachH,
    OutreachP,
    Space,
    BigSpace
} from './OutreachElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <OutreachDiv id='outreach'>
                <OutreachH>Outreach<br /></OutreachH>
                <BigSpace/>
                <OutreachP>Since the inception of this project, we wanted to make a difference in the ocean preservation effort. To do this, we will be highlighting charities on our website and twitter regularly.<br /></OutreachP>
                <Space/>
                <OutreachP>We will also host events to raise money for ocean preservation charities, and upon reaching 100% of NFTs sold, donate 20% of all proceeds from NFT sales to a charity dedicated to saving our oceans.<br /></OutreachP>
            </OutreachDiv>
        </>
    );
};

export default Navbar;