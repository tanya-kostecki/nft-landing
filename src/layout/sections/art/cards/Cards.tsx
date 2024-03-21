import React, { FC } from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Card } from "./Card";
import { cards } from "../../../../data/data";

export const Cards: FC = () => {
  return (
    <FlexWrapper gap="30px" wrap="wrap" justify="center">
      {cards.map((card, index) => (
        <Card key={index} name={card.name} image={card.image} />
      ))}
    </FlexWrapper>
  );
};
