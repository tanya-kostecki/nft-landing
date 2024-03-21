import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { Logo } from '../../components/logo/Logo'
import { Paragraph } from '../../components/Paragraph'
import { items } from '../../data/data'
import { FooterItem } from './footer-item/FooterItem'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { theme } from '../../styled/Theme'

export const Footer = () => {
  return (
    <StyledFooter>
        <Container>
            <FooterFlexWrapper justify='space-between' wrap='wrap'>
                <LeftBlock>
                    <Logo/>
                    <LeftParagraph>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</LeftParagraph>
                    <Socials>
                        <Icon iconId='facebook' width='24px' height='24px' viewBox='0 0 24 24'/>
                        <Icon iconId='telegram' width='24px' height='24px' viewBox='0 0 24 24'/>
                        <Icon iconId='twitter' width='24px' height='24px' viewBox='0 0 24 24'/>
                        <Icon iconId='linkedIn' width='24px' height='24px' viewBox='0 0 24 24'/>
                    </Socials>
                </LeftBlock>
                <RightBlock>
                    {items.map((item) => <FooterItem key={item.id} title={item.title} paragraphs={item.paragraphs}/>)}
                </RightBlock>
            </FooterFlexWrapper>
            <CopyrightFlexWrapper justify='space-between'>
                <CopyrightSpan as='span'>© Copyright 2023 - Creativeart</CopyrightSpan>
                <CopyrightWrapper>
                    <CopyrightLink as='a'>Privacy Policy</CopyrightLink>
                    <CopyrightLink as='a'>Terms & Conditions</CopyrightLink>
                </CopyrightWrapper>               
            </CopyrightFlexWrapper>
        </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-top: 90px;

    @media ${theme.media.tablet} {
        padding-top: 40px;
    }
`
const FooterFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 48px;
    position: relative;
    //
    padding-left: 16px;
    padding-right: 16px;

    &::after {
        content: "";
        position: absolute;
        display: inline-block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.font};
    }
`
const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
    margin-top: 20px;
    max-width: 272px;
`
const LeftParagraph = styled(Paragraph)`
    margin-bottom: 0;
    margin-top: 5px;
`
const RightBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 94px;
    margin-top: 10px;
    /* margin-top: 48px; */

    @media ${theme.media.tablet} {
        margin-top: 48px;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 32px;
        margin-top: 48px;
    }
`
const Socials = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 25px;
`
const CopyrightFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 92px;
    padding-top: 48px;

    @media ${theme.media.mobile} {
        flex-direction: column;
    }

    @media ${theme.media.tablet} {
        padding-bottom: 40px;
    }
`

const CopyrightSpan = styled(Paragraph)`
    margin-bottom: 16px;
`
const CopyrightWrapper = styled(FlexWrapper)`
    gap: 28px;

    @media ${theme.media.mobile} {
        gap: 16px;
        flex-direction: column;
    }
`

const CopyrightLink = styled(Paragraph)`
    @media ${theme.media.mobile} {
        margin-bottom: 0;
    }
`