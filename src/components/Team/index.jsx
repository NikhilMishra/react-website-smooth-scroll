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
    Abhinav,
    TeamBlurb
} from './TeamElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <TeamDiv id='team'>
                <TeamH>The Team<br /></TeamH>
                <BigSpace />
                <TeamBlurb>We are a team of computer scientists working in areas of banking and crypto. Our skills range from design, front end development, backend development as well as developing smart contracts for block chain technologies. We strongly believe protecting our oceans is an important step in combating modern day climate change. We hope that what we can accomplish in this project will help in the efforts to save our oceans.</TeamBlurb>
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