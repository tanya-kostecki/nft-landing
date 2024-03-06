import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'
import { PrimaryColorSpan } from '../PrimaryColorSpan'

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
    font-size: 32px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0px;
    text-align: left;
`