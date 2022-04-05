import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Fishy } from './InfoElements'

const Info = ({ toggle }) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Meet the Suspicious Fish</Heading>
                <Subtitle>5050 uniquely generated, hand drawn suspicious fish ready to take back their ocean. We are a women-led project making an impact in ocean preservation efforts through our NFT sales and community driven efforts.</Subtitle>
              </TextWrapper>
            </Column1>
            {/* <Column3/> */}
            <Column2>
              <ImgWrap>
                <Fishy />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info

