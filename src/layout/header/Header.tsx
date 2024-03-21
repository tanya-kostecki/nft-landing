import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Menu } from '../../components/menu/Menu'
import { StyledButton } from '../../components/button/Button'
import { theme } from '../../styled/Theme'
import { Logo } from '../../components/logo/Logo';
import { menuItems } from '../../data/data'
import { MobileMenu } from './mboile-menu/MobileMenu'

export const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <Logo/>
                <Menu menuItems={menuItems}/>
                <MobileMenu menuItems={menuItems}/>
                <HeaderButton>Contact</HeaderButton>
            </FlexWrapper>
        </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 30px 0;
  background-color: ${theme.colors.background};

  @media ${theme.media.tablet} {
    padding-top: 40px;
  }
`
const HeaderButton = styled(StyledButton)`
  /* font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700; */

  @media ${theme.media.tablet} {
    display: none;
  }
`


