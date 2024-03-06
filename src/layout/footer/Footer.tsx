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
            <FooterFlexWrapper justify='space-between'>
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
            <CopywrightFlexWrapper justify='space-between'>
                <Paragraph as='span'>© Copyright 2023 - Creativeart</Paragraph>
                <FlexWrapper gap='28px'>
                    <Paragraph as='a'>Privacy Policy</Paragraph>
                    <Paragraph as='a'>Terms & Conditions</Paragraph>
                </FlexWrapper>               
            </CopywrightFlexWrapper>
        </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-top: 90px;
`
const FooterFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 48px;
    margin-left: 18px;
    margin-right: 18px;
    position: relative;

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
    gap: 20px;
    max-width: 272px;
`
const LeftParagraph = styled(Paragraph)`
    margin-bottom: 0;
`
const RightBlock = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 94px;
`
const Socials = styled.div`
    display: flex;
    gap: 12px;
`
const CopywrightFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 92px;
    padding-top: 48px;
`