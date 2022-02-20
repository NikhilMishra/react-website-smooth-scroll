import styled from 'styled-components';
import line from '../../images/Vector.png';
import airdrop from '../../images/airdrop.png';
import community from '../../images/community.png';
import merch from '../../images/merch.png';
import charity from '../../images/charity.png';

export const Time = styled.div`
  background: #FFF;
  height: 1950px;
  text-align: center;
`;

export const LineHeader = styled.span`
  font-weight: 500;
  font-size: 24px;
  font-family: 'Encode Sans Expanded', sans-serif;
`

export const Line = styled.div`
  background-image: url(${line});
  width: 4px;
  height: 138px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Airdrop = styled.div`
  background-image: url(${airdrop});
  width: 157px;
  height: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Community = styled.div`
  background-image: url(${community});
  width: 157px;
  height: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Merch = styled.div`
  background-image: url(${merch});
  width: 157px;
  height: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Charity = styled.div`
  background-image: url(${charity});
  width: 157px;
  height: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Caption = styled.span`
  font-size: 16px;
  font-family: 'Encode Sans Expanded', sans-serif;\
  font-weight: bold;
`

export const Sold = styled.span`
  font-size: 12px;
  color: grey;
  font-family: 'Encode Sans Expanded', sans-serif;
`

export const SubCaption = styled.span`
  font-size: 12px;
  font-family: 'Encode Sans Expanded', sans-serif;\
`