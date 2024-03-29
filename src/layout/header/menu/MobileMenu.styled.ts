import styled, { css } from "styled-components";
import { theme } from "../../../styled/Theme";

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }

  a {
    color: transparent;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;
export const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(4, 31, 49, 0.829);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  a {
    display: inline-block;
    color: transparent;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;

      transform: translateY(0);
    `}
`;
export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -80px;
  width: 180px;
  height: 180px;
  z-index: 9999999;
  background-color: transparent;
  border: none;
  margin-top: 25px;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
