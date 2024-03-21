import React, { FC } from "react";
import * as S from "./Card.styled";
import { theme } from "../../../../styled/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { BoldSpan } from "../../../../components/BoldSpan";
import { StyledButton } from "../../../../components/StyledButton";
import { Icon } from "../../../../components/icon/Icon";

type CardPropsType = {
  name: string;
  image: string;
};
export const Card: FC<CardPropsType> = (props) => {
  return (
    <S.Card>
      <S.Image src={props.image} alt="card" />
      <FlexWrapper justify="space-between" marginBottom="18px">
        <S.Name>{props.name}</S.Name>
        <FlexWrapper>
          <Icon iconId="ether" width="24px" height="24px" viewBox="0 0 24 24" />
          <S.Cost>490ETH</S.Cost>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <div>
          <S.Ending>Ending In:</S.Ending>
          <FlexWrapper align="center" gap="5px">
            <Icon
              iconId="clock"
              width="20px"
              height="20px"
              viewBox="0 0 25 25"
              fill="none"
            />
            <BoldSpan>03:24:56</BoldSpan>
          </FlexWrapper>
        </div>
        <StyledButton
          backgroundColor={theme.colors.blockBackground}
          color={theme.colors.primary}
        >
          Place A Bid
        </StyledButton>
      </FlexWrapper>
    </S.Card>
  );
};
