import React from 'react'
import * as S from "./Create.styled";
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledButton } from "../../../components/StyledButton";
import image5 from "../../../assets/images/image5.webp";
import image6 from "../../../assets/images/image6.webp";
import { Container } from "../../../components/Container";
import { PrimaryColorSpan } from "../../../components/PrimaryColorSpan";
import { theme } from "../../../styled/Theme";

export const Create = () => {
  return (
    <S.Create>
      <Container>
        <S.CreateWrapper align="center" wrap="wrap">
          <S.StyledLeft>
            <SectionTitle>
              Create And Sell Your{" "}
              <PrimaryColorSpan>Best NFTs</PrimaryColorSpan>
            </SectionTitle>
            <S.CreateParagraph>
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </S.CreateParagraph>
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
          </S.StyledLeft>

          <S.ImageBlock>
            <img src={image5} alt="first"></img>
            <img src={image6} alt="second"></img>
          </S.ImageBlock>
        </S.CreateWrapper>
      </Container>
    </S.Create>
  );
};

