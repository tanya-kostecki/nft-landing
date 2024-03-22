import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styled/Theme'

export const GoTopBtn = () => {
  return (
    <StyledGoTop>
      <Icon iconId='arrowTop'height='15px' width='16px' viewBox='0 0 16 15'/>
    </StyledGoTop>
  )
}

const StyledGoTop = styled.button`
    padding: 7px;
    background-color: rgba(31, 65, 61, 0.705);;
    color: ${theme.colors.primary};
    position: fixed;
    right: 30px;
    bottom: 30px;
    border: none;
`