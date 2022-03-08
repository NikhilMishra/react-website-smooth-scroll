import React from 'react';
import {
    Time,
    LineHeader,
    Line,
    Airdrop,
    Community,
    Merch,
    Charity,
    Caption,
    Sold,
    SubCaption
} from './TimelineElements';

const Timeline = ({ toggle }) => {
  return (
    <>
          <Time id='roadmap'>
              <LineHeader>Road Map</LineHeader>
              <Line />
              <Airdrop />
              <Caption>Airdrops<br/></Caption>
              <Sold><br />25% Sold<br /></Sold>
              <SubCaption><br />Airdropping free giveaways to early Suspicious Fish holders<br /></SubCaption>
              <Line />
              <Community />
              <Caption>Community<br /></Caption>
              <Sold><br />50% Sold<br /></Sold>
              <SubCaption><br />The Community will decide on ways to invest proceeds<br /></SubCaption>
              <Line />
              <Merch />
              <Caption>Merch<br /></Caption>
              <Sold><br />75% Sold<br /></Sold>
              <SubCaption><br />Get your suspicious merch!<br /></SubCaption>
              <Line />
              <Charity />
              <Caption>Charity<br /></Caption>
              <Sold><br />100% Sold<br /></Sold>
              <SubCaption><br />Donate 20% of all proceeds to save the ocean!<br /></SubCaption>
              <Line />
          </Time>
    </>
  );
};

export default Timeline;
