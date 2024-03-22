import React, { FC, useState } from "react";
import * as S from "./MobileMenu.styled";
import { StyledButton } from "../../../components/StyledButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MenuItem } from "./menu-item/MenuItem";

export const MobileMenu: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={showMobileMenu} onClick={toggleMobileMenu}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={showMobileMenu}
        onClick={() => setShowMobileMenu(false)}
      >
        <FlexWrapper direction="column" gap="20px">
          <MenuItem/>
          <StyledButton>Contact</StyledButton>
        </FlexWrapper>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
