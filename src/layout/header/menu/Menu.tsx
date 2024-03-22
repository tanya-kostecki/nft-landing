import React, { FC } from "react";
import * as S from './MobileMenu.styled'
import { MenuItem } from "./menu-item/MenuItem";

export const Menu: FC = () => {
  return (
    <S.Menu>
      <MenuItem/>
    </S.Menu>
  );
};