import React, { FC } from "react";
import * as S from "./RightBlock.styled";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import image from "../../../../assets/images/image1.webp";
import { BoldSpan } from "../../../../components/BoldSpan";
import { Icon } from "../../../../components/icon/Icon";

export const RightBlock: FC = () => {
  return (
    <S.RightBlock>
      <S.Image src={image} alt="main" />
      <S.IconContainer>
        <Icon
          iconId="circle"
          width="170px"
          height="170px"
          viewBox="0 0 170 170"
        />
      </S.IconContainer>
      <S.BidBlock>
        <FlexWrapper justify="space-between">
          <div>
            <span>Ends in:</span>
            <BoldSpan>05:45:47</BoldSpan>
          </div>
          <div>
            <span>Current Bid:</span>
            <BoldSpan>0.24ETH</BoldSpan>
          </div>
        </FlexWrapper>
        <S.BidButton>Place A Bid</S.BidButton>
      </S.BidBlock>
    </S.RightBlock>
  );
};
