import React, { FC } from "react";
import * as S from './MobileMenu.styled'

export const Menu: FC<{
  menuItems: { title: string; href: string }[];
}> = (props) => {
  return (
    <S.Menu>
      <ul>
        {props.menuItems.map((menuItem, index) => (
          <S.LinkItem key={index}>
            <a href={menuItem.href}>{menuItem.title}
              <S.Mask>
                <span>{menuItem.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{menuItem.title}</span>
              </S.Mask>
            </a>
          </S.LinkItem>
        ))}
      </ul>
    </S.Menu>
  );
};