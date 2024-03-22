import React, { FC, useState } from "react";
import * as S from "./Art.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Cards } from "./cards/Cards";
import { PrimaryColorSpan } from "../../../components/PrimaryColorSpan";
import { cards } from "../../../data/data";

export const Art: FC = () => {
  const [allCards, setAllCards] = useState<boolean>(false);
  const lessCards = cards.slice(3)

  const toggleCards = () => {
    setAllCards(!allCards);
  };
  return (
    <S.Art id="collection">
      <Container>
        <S.ArtWrapper justify="space-between" align="flex-end">
          <SectionTitle maxWidth="580px">
            <PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of
            This <PrimaryColorSpan>Week</PrimaryColorSpan>
          </SectionTitle>
          <S.ArtButton onClick={toggleCards}>
            {allCards === false ? "See All" : "See Less"}
          </S.ArtButton>
        </S.ArtWrapper>
        <Cards cards={allCards === false ? lessCards : cards}/>
        <S.MobileArtButton onClick={toggleCards}>
          {allCards === false ? "See All" : "See Less"}
        </S.MobileArtButton>
      </Container>
    </S.Art>
  );
};
