import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Paragraph } from '../../../components/Paragraph'
import { StyledButton } from '../../../components/button/Button'
import image5 from '../../../assets/images/image5.webp'
import image6 from '../../../assets/images/image6.webp'
import { Container } from '../../../components/Container'
import styled from 'styled-components'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { theme } from '../../../styled/Theme'

export const Create = () => {
  return (
    <StyledCreate>
      <Container>
        <CreateWrapper align="center" wrap="wrap">
          <StyledLeft>
            <SectionTitle>
              Create And Sell Your{" "}
              <PrimaryColorSpan>Best NFTs</PrimaryColorSpan>
            </SectionTitle>
            <CreateParagraph>
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </CreateParagraph>
            <div>
              <StyledButton>Explore Now</StyledButton>
              <StyledButton
                border="none"
                color={theme.colors.primary}
                backgroundColor="transparent"
              >
                Create Now
              </StyledButton>
            </div>
          </StyledLeft>

          <ImageBlock>
            <img src={image5} alt="first"></img>
            <img src={image6} alt="second"></img>
          </ImageBlock>
        </CreateWrapper>
      </Container>
    </StyledCreate>
  );
}

const StyledCreate = styled.section`
    background: radial-gradient(circle at right top, #1f413d 0%, #020014 40%);
`

const CreateWrapper = styled(FlexWrapper)`
    justify-content: space-between;

    @media screen and (max-width: 1212px) {
        justify-content: center;
    }
`

const StyledLeft = styled.div`
    max-width: 426px;
    margin-bottom: 48px;
    margin-top: 40px;

    @media screen and (min-width: 769px) and (max-width: 1212px) {
        max-width: 100%;
    }
`
const CreateParagraph = styled(Paragraph)`
    margin-top: 30px;
`
const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 559px;
    width: 740px;

    img {
        position: absolute;
        max-width: 410px;
        width: 100%;
    } 
    img:nth-of-type(1){
        top:0;
        right:0;
        max-height: 475px;
    }

    img:nth-of-type(2) {
        left: 0;
        bottom: 0;
        max-height: 400px;
    }

    @media ${theme.media.tablet} {
        width: 343px;
        height: 260px;

        img {
        position: absolute;
        max-width: 190px;
        width: 100%;
    } 
        img:nth-of-type(1){
            top:0;
            right:0;
            max-height: 220px;
        }

        img:nth-of-type(2) {
            left: 0;
            bottom: 0;
            max-height: 186px;
        }
    }
`

