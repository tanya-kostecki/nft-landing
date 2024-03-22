import React, { FC } from "react";
import * as S from "./MenuItem.styled";
import { menuItems } from "../../../../data/data";

export const MenuItem: FC = () => {
  return (
    <ul>
      {menuItems.map((menuItem) => (
        <S.LinkItem key={menuItem.id}>
          <S.NavLink
            to={menuItem.href}
            activeClass="active"
            spy={true}
            smooth={true}
          >
            {menuItem.title}
            <S.Mask>
              <span>{menuItem.title}</span>
            </S.Mask>
            <S.Mask>
              <span>{menuItem.title}</span>
            </S.Mask>
          </S.NavLink>
        </S.LinkItem>
      ))}
    </ul>
  );
};
