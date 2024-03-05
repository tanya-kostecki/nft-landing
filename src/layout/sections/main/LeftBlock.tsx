import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Button } from '../../../components/button/Button'
import { Paragraph } from '../../../components/Paragraph'
import { Statistics } from './Statistics'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { StyledLink } from '../../../components/StyledLink'

export const LeftBlock = () => {
  return (
    <StyledLeftBlock>
        <FlexWrapper direction='column'>
            <Title>Discover and Collect The Best NFT's <PrimaryColorSpan>Digital Art.</PrimaryColorSpan></Title>
            <Paragraph>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Paragraph>
            <div>
                <Button>Explore Now</Button>
                <StyledLink>Learn more</StyledLink>
            </div>
            <Statistics/>
        </FlexWrapper>
    </StyledLeftBlock>
  )
}

const StyledLeftBlock = styled.div`
    max-width: 540px;
`
const Title = styled.h1`
    font-size: 64px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 20px;
`
// const Link = styled.a`
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 120%;
//     letter-spacing: 0px;
//     text-align: left;
//     margin-left: 36px;
// `
