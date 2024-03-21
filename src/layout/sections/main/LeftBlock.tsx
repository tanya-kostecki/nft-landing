import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { StyledButton } from '../../../components/button/Button'
import { Paragraph } from '../../../components/Paragraph'
import { Statistics } from './Statistics'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { StyledLink } from '../../../components/StyledLink'
import { font } from '../../../styled/Common'
import { theme } from '../../../styled/Theme'

export const LeftBlock = () => {
  return (
    <StyledLeftBlock>
        <FlexWrapper direction='column' height='100%'>
            <Title>Discover and Collect The Best NFT's <PrimaryColorSpan>Digital Art.</PrimaryColorSpan></Title>
            <LeftParagraph>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</LeftParagraph>
            <ExploreBlock>
                <StyledButton>Explore Now</StyledButton>
                <StyledLink>Learn more</StyledLink>
            </ExploreBlock>
            <Statistics/>
        </FlexWrapper>
    </StyledLeftBlock>
  )
}

const StyledLeftBlock = styled.div`
    max-width: 540px;
`
const Title = styled.h1`
    ${font({ family: 'Montserrat, sans-serif', weight: 500, color: theme.colors.font, Fmax: 64, Fmin: 39 })}
    text-align: left;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;

    @media ${theme.media.mobile} {
        text-align: center;
    }
`
const LeftParagraph = styled(Paragraph)`
    width: 100%;
    margin-bottom: 45px;

    @media ${theme.media.mobile} {
        text-align: center;
    }
`
const ExploreBlock = styled.div`
    @media ${theme.media.mobile} {
        margin: 0 auto;
    }
`
