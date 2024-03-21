import React, { FC } from "react";
import * as S from "./Statistics.styled";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const Statistics: FC = () => {
  return (
    <S.Statistics>
      <FlexWrapper justify="space-between">
        <S.StatisticsElement>
          <S.StatisticsTitle>
            <span>8.9</span>
            <span>K</span>
          </S.StatisticsTitle>
          <S.StatisticsItem as="span">Art work</S.StatisticsItem>
        </S.StatisticsElement>

        <S.StatisticsElement>
          <S.StatisticsTitle>
            <span>65</span>
            <span>K</span>
          </S.StatisticsTitle>
          <S.StatisticsItem as="span">Artist</S.StatisticsItem>
        </S.StatisticsElement>

        <S.StatisticsElement>
          <S.StatisticsTitle>
            <span>87</span>
            <span>K</span>
          </S.StatisticsTitle>
          <S.StatisticsItem as="span">Collection</S.StatisticsItem>
        </S.StatisticsElement>
      </FlexWrapper>
    </S.Statistics>
  );
};
