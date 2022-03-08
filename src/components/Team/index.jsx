import React from 'react';
import {
    TeamDiv,
    TeamH,
    TeamP,
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
            <TeamDiv id='team'>
                <TeamH>The Team<br /></TeamH>
                <BigSpace />
                <Column>
                    <Ashika />
                    <Space/>
                    <Caption>Ashika</Caption>
                    <SmallSpace />
                    <Role> Artist </Role>
                    <SmallSpace/>
                    <TeamP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></TeamP>
                </Column>
                <Column>
                    <Nikhil />
                    <Space />
                    <Caption>Nikhil</Caption>
                    <SmallSpace />
                    <Role> Developer </Role>
                    <SmallSpace />
                    <TeamP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></TeamP>
                </Column><Column>
                    <Abhinav />
                    <Space />
                    <Caption>Abhinav</Caption>
                    <SmallSpace />
                    <Role> Developer 2 </Role>
                    <SmallSpace />
                    <TeamP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></TeamP>
                </Column>
            </TeamDiv>
        </>
    );
};

export default Navbar;