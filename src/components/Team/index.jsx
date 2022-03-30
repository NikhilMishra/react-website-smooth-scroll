import React from 'react';
import {
    TeamDiv,
    TeamH,
    TeamP,
    ColumnContainer,
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
                <ColumnContainer>
                    <Column>
                        <Ashika />
                        <Space/>
                        <Caption>Artistic Ashley</Caption>
                        <SmallSpace />
                        <Role> Artist </Role>
                        <SmallSpace/>
                        <TeamP>Hand-drew all the assets for the fishies!<br /></TeamP>
                    </Column>
                    <Column>
                        <Nikhil />
                        <Space />
                        <Caption>Nerdy Nick</Caption>
                        <SmallSpace />
                        <Role> Developer </Role>
                        <SmallSpace />
                        <TeamP>Built this website!<br /></TeamP>
                    </Column>
                    <Column>
                        <Abhinav />
                        <Space />
                        <Caption>Adaptive Alex</Caption>
                        <SmallSpace />
                        <Role> Developer</Role>
                        <SmallSpace />
                        <TeamP>Created the smart contract!<br /></TeamP>
                    </Column>
                </ColumnContainer>
            </TeamDiv>
        </>
    );
};

export default Navbar;