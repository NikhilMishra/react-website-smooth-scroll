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
                <Subtitle>5,050 uniquely generated suspicious fish ready to take back their ocean. Hand drawn and code generated, no two fish are the same.</Subtitle>
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

