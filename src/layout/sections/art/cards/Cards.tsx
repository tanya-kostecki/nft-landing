import React, { FC } from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Card } from "./Card";
import { ICard } from "../../../../data/data";

type CardsPropsType = {
  cards: ICard[]
}
export const Cards: FC<CardsPropsType> = (props) => {
  return (
    <FlexWrapper gap="30px" wrap="wrap" justify="center">
      {props.cards.map((card) => (
        <Card key={card.id} name={card.name} image={card.image} />
      ))}
    </FlexWrapper>
  );
};
