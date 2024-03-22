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
            {props.menuItems.map((menuItem, index) => (
              // <li key={index}>
              //   <StyledLink href={item.href}>{item.title}</StyledLink>
              // </li>
              <S.LinkItem key={index}>
                <StyledLink href={menuItem.href}>{menuItem.title}
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
          <StyledButton>Contact</StyledButton>
        </FlexWrapper>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
