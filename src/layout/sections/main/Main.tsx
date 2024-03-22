import React, { FC } from 'react'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { LeftBlock } from "./left-block/LeftBlock";
import { RightBlock } from "./right-block/RightBlock";
import styled from 'styled-components'
import useGetWindowWidth from '../../../hooks/useWindowSize'
import { theme } from '../../../styled/Theme'

export const Main: FC = () => {
  const screen = useGetWindowWidth()
  const maxWidth = 1153
  console.log('screenWidth', screen.width)
  return (
    <StyledMain id='marketplace'>
        <Container>
            <FlexWrapper wrap='wrap'  justify={screen.width > maxWidth ? 'space-between' : 'center'}>
                <LeftBlock/>
                <RightBlock/>
            </FlexWrapper>
        </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  background: radial-gradient(closest-side, #1f413d, #020014);
  padding-top: 200px; //130px
  min-height: 100vh;

  display: flex;
  align-items: center;

  @media ${theme.media.tablet} {
    padding-top: 130px; //130px
  }
`;


