import ashika from '../../images/ashika.png';
import nikhil from '../../images/nikhil.png';
import abhinav from '../../images/abhinav.png';
import styled from 'styled-components';

export const TeamDiv = styled.div`
  // background: #FFF;

  // height: 600px;
  // padding: 0.5rem calc((85vw - 1000px) / 2);
  padding: 50px 0px 100px 0px;
@media screen and  (max-width: 1225px) {
    // padding: 100px 0;
    // height: 460px;
  }
`;

export const BigSpace = styled.div`
  height: 50px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and  (max-width: 900px) {
    // padding: 100px 0;
    // height: 460px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Space = styled.div`
  height: 20px;
`;

export const SmallSpace = styled.div`
  height: 10px;
`;

export const Column = styled.div`
  float: left;
  width: 30.33%;
  // padding-left: 3.33%;
  // padding-right: 3.33%;
  padding: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and  (max-width: 900px) {
    width: 100%;
  }
`

export const TeamH = styled.span`
  font-size: 48px;
  font-family: 'Avenir', sans-serif;\
`

export const TeamP = styled.p`
  font-size: 16px;
  line-height: 2;
  font-family: 'Avenir', sans-serif;\
`

export const Ashika = styled.div`
  background-image: url(${ashika});
  background-size: contain;
  width: 166px;
  height: 166px;
  // display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Nikhil = styled.div`
  background-image: url(${nikhil});
  background-size: contain;
  width: 166px;
  height: 166px;
  // display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Abhinav = styled.div`
  background-image: url(${abhinav});
  background-size: contain;
  width: 166px;
  height: 166px;
  // display: block;
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