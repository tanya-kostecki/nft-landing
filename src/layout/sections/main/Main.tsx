import React from 'react'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { LeftBlock } from './LeftBlock'
import { RightBlock } from './RightBlock'
import styled from 'styled-components'

export const Main = () => {
  return (
    <StyledMain>
        <Container>
            <FlexWrapper justify='space-between' wrap='wrap'>
                <LeftBlock/>
                <RightBlock/>
            </FlexWrapper>
        </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  background: radial-gradient(closest-side, #1F413D, #020014);
`;


