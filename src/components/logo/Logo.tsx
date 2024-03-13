import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'
import { PrimaryColorSpan } from '../PrimaryColorSpan'
import { font } from '../../styled/Common'
import { theme } from '../../styled/Theme'

export const Logo = () => {
  return (
    <StyledLogo>
        <Icon iconId='logo' width='30px' height='30px' viewBox='0 0 30 30'/>
        <LogoTitle>Creative<PrimaryColorSpan>art</PrimaryColorSpan></LogoTitle>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
    display: flex;
`
const LogoTitle = styled.h3`
  ${font({ family: 'Inter, sans-serif', weight: 500, color: theme.colors.font, Fmax: 32, Fmin: 24 })};
  text-align: left;
`