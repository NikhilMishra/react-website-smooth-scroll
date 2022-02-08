import React from 'react';
import {
    OutreachDiv,
    OutreachH,
    OutreachP,
    Column,
    BigSpace,
    Caption,
    Ashika,
    Space,
    SmallSpace,
    Role,
    Nikhil,
    Abhinav
} from './TeamElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <OutreachDiv>
                <OutreachH>The Team<br /></OutreachH>
                <BigSpace />
                <Column>
                    <Ashika />
                    <Space/>
                    <Caption>Ashika</Caption>
                    <SmallSpace />
                    <Role> Artist </Role>
                    <SmallSpace/>
                    <OutreachP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></OutreachP>
                </Column>
                <Column>
                    <Nikhil />
                    <Space />
                    <Caption>Nikhil</Caption>
                    <SmallSpace />
                    <Role> Developer </Role>
                    <SmallSpace />
                    <OutreachP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></OutreachP>
                </Column><Column>
                    <Abhinav />
                    <Space />
                    <Caption>Abhinav</Caption>
                    <SmallSpace />
                    <Role> Developer 2 </Role>
                    <SmallSpace />
                    <OutreachP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></OutreachP>
                </Column>
            </OutreachDiv>
        </>
    );
};

export default Navbar;