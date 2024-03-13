import React from 'react'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { LeftBlock } from './LeftBlock'
import { RightBlock } from './RightBlock'
import styled from 'styled-components'
import useGetWindowWidth from '../../../hooks/useWindowSize'

export const Main = () => {
  const screen = useGetWindowWidth()
  const maxWidth = 1153
  console.log('screenWidth', screen.width)
  return (
    <StyledMain>
        <Container>
            <FlexWrapper wrap='wrap' align='center' justify={screen.width > maxWidth ? 'space-between' : 'center'}>
                <LeftBlock/>
                <RightBlock/>
            </FlexWrapper>
        </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  background: radial-gradient(closest-side, #1F413D, #020014);
  padding-top: 130px;
  /* min-height: 100vh; */
  
`;

// const MainWrapper = styled(FlexWrapper)`
//   /* justify-content: space-between; */

//   @media screen and (max-width: 1025px) {
//     justify-content: center;
//   }
// `


