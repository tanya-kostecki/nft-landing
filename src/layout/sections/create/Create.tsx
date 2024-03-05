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

export const Create = () => {
  return (
    <StyledCreate>
        <Container>
            <FlexWrapper justify='space-between' align='center' wrap='wrap'>
                <StyledLeft>
                    <SectionTitle>Create And Sell Your Best NFTs</SectionTitle>
                    <Paragraph>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Paragraph>
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
`
const StyledLeft = styled.div`
    max-width: 426px;
`
const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    img {
        max-width: 410px;
        max-height: 400px;
    }

    img:nth-of-type(2) {
        position: absolute;
        right: 80%;
        top: 30%;
    }
`

