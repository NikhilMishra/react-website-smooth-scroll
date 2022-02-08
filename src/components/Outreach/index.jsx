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
            <OutreachDiv>
                <OutreachH>Outreach<br /></OutreachH>
                <BigSpace/>
                <OutreachP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /></OutreachP>
                <Space/>
                <OutreachP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br /></OutreachP>
            </OutreachDiv>
        </>
    );
};

export default Navbar;