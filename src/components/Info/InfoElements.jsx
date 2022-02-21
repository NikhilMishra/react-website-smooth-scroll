import styled from 'styled-components';
// import fishy from '../../images/fishy.png';
import fishy from '../../images/profile_image.png';
import background from '../../images/background_test_3.png';

export const InfoContainer = styled.div`
  color: #fff;
  //background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and  (max-width: 1225px) {
    padding: 100px 0;
    height: 460px;
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 660px;
  padding: 0.5rem calc((85vw - 1000px) / 2);
  justify-content: center;
  @media screen and (max-width: 1225px) {
    height: 460px;
  }
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  height: 600px;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col3 col1'` : `'col1 col3 col2'`)};

  @media screen and (max-width: 1225px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Fishy = styled.div`
  background-image: url(${fishy});
  background-position: center;
  background-size: contain;
  width: 410px;
  height: 410px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 1225px) {
    display: none;
  }
`;

export const Column2 = styled.div`
  // margin-bottom: 15px;
  // padding: 0 15px;
  // background-color: black;
  align-content: center;
  grid-area: col2;
  width: 450px;
`

export const Column3 = styled.div`
  // margin-bottom: 15px;
  // padding: 0 15px;
  // grid-area: col2;
  // width: 401px;
`

export const TextWrapper = styled.div`
  max-width: 600px;
  padding: 0 2rem;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  font-family: corben;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 24px;
  color: black;
  font-family: 'Avenir', sans-serif;
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  // max-width: 555px;
  // align-content: center;
  // height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
