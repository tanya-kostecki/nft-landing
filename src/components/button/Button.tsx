import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../../styled/Theme'

type ButtonPropsType = {
    children: ReactNode;
    backgroundColor?: string;
    height?: string;
    color?: string;
}
export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color}>{props.children}</StyledButton>
  )
}

type StyledButtonProps = {
    backgroundColor?: string;
    height?: string;
    color?: string;
}
export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${props => props.backgroundColor || theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 8px;
    padding: 12px 40px 12px 40px;
    height: ${props => props.height || '100%'};
    color: ${props => props.color || theme.colors.blockBackground}
`