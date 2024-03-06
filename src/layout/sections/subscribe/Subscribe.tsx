import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import image12 from '../../../assets/images/image12.webp'
import image13 from '../../../assets/images/image13.webp'
import { SectionTitle } from '../../../components/SectionTitle'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { Paragraph } from '../../../components/Paragraph'
import { Button, StyledButton } from '../../../components/button/Button'

export const Subscribe = () => {
  return (
    <StyledSubscribe>
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <ImageContainer>
                    <img src={image12} alt=''></img>
                    <img src={image13} alt=''></img>
                </ImageContainer>
                <TextBlock>
                    <SectionTitle>Subscribe And <PrimaryColorSpan>get our Updates</PrimaryColorSpan> Every Week</SectionTitle>
                    <TextParagraph>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</TextParagraph>
                    <SubscribeBlock>
                        <input placeholder='Enter your e-mail'/>
                        <Button>Subscribe</Button>
                    </SubscribeBlock>
                </TextBlock>
            </FlexWrapper>
        </Container>
    </StyledSubscribe>
  )
}

const StyledSubscribe = styled.section`
     background: radial-gradient(circle at left top, #1f413d 0%, #020014 30%);
`
const ImageContainer = styled.div`
    position: relative;

    img:last-child {
        position: absolute;
        top: 22%;
        left: 75%;
    }
`
const TextBlock = styled.div`
    max-width: 520px;

    input {
        padding: 16px 24px 16px 24px;
        border-radius: 8px;
        background: rgb(19, 30, 58);
        border: none;
        width: 100%;
    }
`
const TextParagraph = styled(Paragraph)`
    margin-top: 20px;
`
const SubscribeBlock = styled.form`
    width: 100%;
    position: relative;

    ${StyledButton} {
        position: absolute;
        right: 0;
    }
`