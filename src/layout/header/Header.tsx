import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Menu } from '../../components/menu/Menu'
import { Button } from '../../components/button/Button'
import { theme } from '../../styled/Theme'
import { Logo } from '../../components/logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <Logo/>
                <Menu/>
                <Button>Contact</Button>
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
    padding: 10px 0;
    background-color: ${theme.colors.background};
`


