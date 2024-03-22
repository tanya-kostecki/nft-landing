import React, { FC } from "react";
import * as S from "./MenuItem.styled";
import { StyledLink } from "../../../../components/StyledLink";
import { menuItems } from "../../../../data/data";

export const MenuItem: FC = () => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <S.LinkItem key={index}>
          <StyledLink href={menuItem.href}>
            {menuItem.title}
            <S.Mask>
              <span>{menuItem.title}</span>
            </S.Mask>
            <S.Mask>
              <span>{menuItem.title}</span>
            </S.Mask>
          </StyledLink>
        </S.LinkItem>
      ))}
    </ul>
  );
};
