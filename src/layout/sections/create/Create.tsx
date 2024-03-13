import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Paragraph } from '../../../components/Paragraph'
import { Button } from '../../../components/button/Button'
import { StyledLink } from '../../../components/StyledLink'
import image5 from '../../../assets/images/image5.webp'
import image6 from '../../../assets/images/image6.webp'
import { Container } from '../../../components/Container'
import styled from 'styled-components'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'

export const Create = () => {
  return (
    <StyledCreate>
        <Container>
            <FlexWrapper justify='space-between' align='center' wrap='wrap'>
                <StyledLeft>
                    <SectionTitle>Create And Sell Your <PrimaryColorSpan>Best NFTs</PrimaryColorSpan></SectionTitle>
                    <CreateParagraph>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</CreateParagraph>
                    <div>
                        <Button>Explore Now</Button>
                        <StyledLink>Create Now</StyledLink>
                    </div>
                </StyledLeft>

                <ImageBlock>
                    <img src={image5} alt='first'></img>
                    <img src={image6} alt='second'></img>
                </ImageBlock>

            </FlexWrapper>
        </Container>
    </StyledCreate>
  )
}

const StyledCreate = styled.section`
    background: radial-gradient(circle at right top, #1f413d 0%, #020014 40%);
`
const StyledLeft = styled.div`
    max-width: 426px;
`
const CreateParagraph = styled(Paragraph)`
    margin-top: 20px;
`
const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 38vw;
    width: 38vw;

    img {
        position: absolute;
        max-width: 410px;
        max-height: 400px;
        /* width: 60%; */
    } 
    img:nth-of-type(1){
        top:0;
        right:0;
    }

    img:nth-of-type(2) {
        left: 0;
        bottom: 0;
    }
`

