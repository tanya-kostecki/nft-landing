import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import image12 from '../../../assets/images/image12.webp'
import image13 from '../../../assets/images/image13.webp'
import { SectionTitle } from '../../../components/SectionTitle'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { Paragraph } from '../../../components/Paragraph'
import { StyledButton } from '../../../components/button/Button'
import { theme } from "../../../styled/Theme";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeWrapper justify="space-between" align="center">
          <ImageContainer>
            <img src={image12} alt=""></img>
            <img src={image13} alt=""></img>
          </ImageContainer>
          <TextBlock>
            <SectionTitle>
              Subscribe And <PrimaryColorSpan>get our Updates</PrimaryColorSpan>{" "}
              Every Week
            </SectionTitle>
            <TextParagraph>
              We have a blog related to NFT so we can share thoughts and
              routines on our blog which is updated weekly
            </TextParagraph>
            <SubscribeBlock>
              <input placeholder="Enter your e-mail" />
              <StyledButton>Subscribe</StyledButton>
            </SubscribeBlock>
          </TextBlock>
        </SubscribeWrapper>
      </Container>
    </StyledSubscribe>
  );
}

const StyledSubscribe = styled.section`
     background: radial-gradient(circle at left top, #1f413d 0%, #020014 30%);
`
const SubscribeWrapper = styled(FlexWrapper)`
  @media screen and (max-width: 1144px) {
    flex-direction: column-reverse;
    gap: 48px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  height: 458px;
  //
  max-width: 630px;
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */

  img:first-child {
    max-width: 410px;
    max-height: 376px;
    /* transform: translate(8%, 10%) rotate(-11deg); */
  }

  img:last-child {
    position: absolute;
    top: 25%;
    left: 45%; //85
    max-width: 282px;
    max-height: 348px;
  }

  @media ${theme.media.tablet} {
    max-width: 343px;
    max-height: 250px;

    img:first-child {
      max-width: 224px;
    }

    img:last-child {
      left: 45%;
      max-width: 152px;
    }
  }
`;
const TextBlock = styled.div`
    max-width: 520px;

    input {
        padding: 16px 24px 16px 24px;
        border-radius: 8px;
        background: rgb(19, 30, 58);
        border: none;
        width: 100%;
    }
`
const TextParagraph = styled(Paragraph)`
    margin-top: 20px;
`
const SubscribeBlock = styled.form`
    width: 100%;
    position: relative;

    ${StyledButton} {
        position: absolute;
        right: 0;
    }

    input {
      color: ${theme.colors.font};
    }

    @media ${theme.media.mobile} {
        position: static;

        ${StyledButton} {
            position: static;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            display: block;
        }
    }
`