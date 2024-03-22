import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'
import { PrimaryColorSpan } from '../PrimaryColorSpan'
import { font } from '../../styled/Common'
import { theme } from '../../styled/Theme'
import { animateScroll as scroll } from 'react-scroll'

export const Logo = () => {
  return (
    <StyledLogo onClick={() =>scroll.scrollToTop()}>
        <Icon iconId='logo' width='30px' height='30px' viewBox='0 0 30 30'/>
        <LogoTitle>Creative<PrimaryColorSpan>art</PrimaryColorSpan></LogoTitle>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
    display: flex;
`
const LogoTitle = styled.h3`
  ${font({ family: 'Inter, sans-serif', weight: 500, color: theme.colors.font, Fmax: 32, Fmin: 24 })};
  text-align: left;
`