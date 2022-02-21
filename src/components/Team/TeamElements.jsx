import ashika from '../../images/ashika.png';
import nikhil from '../../images/nikhil.png';
import abhinav from '../../images/abhinav.png';
import styled from 'styled-components';

export const OutreachDiv = styled.div`
  // background: #FFF;
  height: 500px;
  padding: 0.5rem calc((85vw - 1000px) / 2);
`;

export const BigSpace = styled.div`
  height: 50px;
`;

export const Space = styled.div`
  height: 20px;
`;

export const SmallSpace = styled.div`
  height: 10px;
`;

export const Column = styled.div`
  float: left;
  width: 33.33%;
  padding-left: 3.33%;
  padding-right: 3.33%;
  text-align: center;
`

export const OutreachH = styled.span`
  font-size: 48px;
  font-family: 'Avenir', sans-serif;\
`

export const OutreachP = styled.p`
  font-size: 16px;
  line-height: 2;
  font-family: 'Avenir', sans-serif;\
`

export const Ashika = styled.div`
  background-image: url(${ashika});
  width: 166px;
  height: 158px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Nikhil = styled.div`
  background-image: url(${nikhil});
  width: 166px;
  height: 166px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Abhinav = styled.div`
  background-image: url(${abhinav});
  width: 166px;
  height: 166px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Caption = styled.span`
  padding-top: 10px;
  font-size: 18px;
  font-family: 'Avenir', sans-serif;\
  font-weight: bold;
`

export const Role = styled.p`
  font-size: 14px;
  color: grey;
  font-family: 'Avenir', sans-serif;
`