import React, { FC } from "react";
import * as S from './Art.styled'
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Cards } from "./cards/Cards";
import { PrimaryColorSpan } from "../../../components/PrimaryColorSpan";

export const Art: FC = () => {
  return (
    <S.Art>
      <Container>
        <S.ArtWrapper justify="space-between" align="flex-end">
          <SectionTitle maxWidth="580px">
            <PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of
            This <PrimaryColorSpan>Week</PrimaryColorSpan>
          </SectionTitle>
          <S.ArtButton>See All</S.ArtButton>
        </S.ArtWrapper>
        <Cards />
        <S.MobileArtButton>See All</S.MobileArtButton>
      </Container>
    </S.Art>
  );
};


