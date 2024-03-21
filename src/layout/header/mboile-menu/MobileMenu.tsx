import React, { FC, useState } from "react";
import * as S from "./MobileMenu.styled";
import { StyledButton } from "../../../components/StyledButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledLink } from "../../../components/StyledLink";

export const MobileMenu: FC<{
  menuItems: { title: string; href: string }[];
}> = (props) => {
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
          <ul>
            {props.menuItems.map((item, index) => (
              <li key={index}>
                <StyledLink href={item.href}>{item.title}</StyledLink>
              </li>
            ))}
          </ul>
          <StyledButton>Contact</StyledButton>
        </FlexWrapper>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
