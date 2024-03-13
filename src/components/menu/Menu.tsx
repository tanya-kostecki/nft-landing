import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styled/Theme'

export const Menu = (props: { menuItems: {title: string, href: string}[] }) => {
  return (
    <StyledMenu>
        <ul>
            {props.menuItems.map((menuItem, index) => <li key={index}><a href={menuItem.href}>{menuItem.title}</a></li>)}
        </ul>
        
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
      display: flex;
      gap: 40px;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
  }

  @media ${theme.media.tablet} {
    display: none;
  }

`

