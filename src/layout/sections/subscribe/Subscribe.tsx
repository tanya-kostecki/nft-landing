import React, { FC } from 'react'
import * as S from './Subscribe.styled'
import { Container } from '../../../components/Container'
import image12 from '../../../assets/images/image12.webp'
import image13 from '../../../assets/images/image13.webp'
import { SectionTitle } from '../../../components/SectionTitle'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { StyledButton } from "../../../components/StyledButton";

export const Subscribe: FC = () => {
  return (
    <S.Subscribe>
      <Container>
        <S.SubscribeWrapper justify="space-between" align="center">
          <S.ImageContainer>
            <img src={image12} alt=""></img>
            <img src={image13} alt=""></img>
          </S.ImageContainer>
          <S.TextBlock>
            <SectionTitle>
              Subscribe And <PrimaryColorSpan>get our Updates</PrimaryColorSpan>{" "}
              Every Week
            </SectionTitle>
            <S.TextParagraph>
              We have a blog related to NFT so we can share thoughts and
              routines on our blog which is updated weekly
            </S.TextParagraph>
            <S.SubscribeBlock>
              <input placeholder="Enter your e-mail" />
              <StyledButton>Subscribe</StyledButton>
            </S.SubscribeBlock>
          </S.TextBlock>
        </S.SubscribeWrapper>
      </Container>
    </S.Subscribe>
  );
}