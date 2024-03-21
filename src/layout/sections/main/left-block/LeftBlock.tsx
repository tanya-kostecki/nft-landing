import React, { FC } from "react";
import * as S from './LeftBlock.styled'
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledButton } from "../../../../components/StyledButton";
import { Statistics } from "../statistics/Statistics";
import { PrimaryColorSpan } from "../../../../components/PrimaryColorSpan";
import { theme } from "../../../../styled/Theme";

export const LeftBlock: FC = () => {
  return (
    <S.LeftBlock>
      <FlexWrapper direction="column" height="100%">
        <S.Title>
          Discover and Collect The Best NFT's{" "}
          <PrimaryColorSpan>Digital Art.</PrimaryColorSpan>
        </S.Title>
        <S.LeftParagraph>
          Get started with the easiest and most secure platform to buy and trade
          digital ART and NFT’s. Start exploring the world of digital art and
          NFTs today and take control of your digital assets with confidence!
        </S.LeftParagraph>
        <S.ExploreBlock>
          <StyledButton>Explore Now</StyledButton>
          <StyledButton
            color={theme.colors.primary}
            backgroundColor="transparent"
            border="none"
          >
            Learn more
          </StyledButton>
        </S.ExploreBlock>
        <Statistics />
      </FlexWrapper>
    </S.LeftBlock>
  );
};