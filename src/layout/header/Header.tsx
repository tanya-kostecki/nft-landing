import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "./menu/Menu";
import { StyledButton } from "../../components/StyledButton";
import { theme } from "../../styled/Theme";
import { Logo } from "../../components/logo/Logo";
import { MobileMenu } from "./menu/MobileMenu";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu/>
          <MobileMenu/>
          <HeaderButton>Contact</HeaderButton>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 30px 0 10px;
  background-color: ${theme.colors.background};

  @media ${theme.media.tablet} {
    padding-top: 40px;
  }
`;
const HeaderButton = styled(StyledButton)`
  @media ${theme.media.tablet} {
    display: none;
  }
`;
