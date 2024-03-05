import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTop } from '../../../components/section-top/SectionTop'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import image7 from '../../../assets/images/image7.webp'
import image8 from '../../../assets/images/image8.webp'
import image9 from '../../../assets/images/image9.webp'
import image10 from '../../../assets/images/image10.webp'
import image11 from '../../../assets/images/image11.webp'

import avatar1 from '../../../assets/images/avatar1.webp'
import avatar2 from '../../../assets/images/avatar2.webp'
import avatar3 from '../../../assets/images/avatar3.webp'
import avatar4 from '../../../assets/images/avatar4.webp'
import avatar5 from '../../../assets/images/avatar5.webp'

export const Artists = () => {
  return (
    <StyledArtists>
        <Container>
            <SectionTop buttonChildren='See All' maxWidth='310px'>
            Popular <PrimaryColorSpan>Artists</PrimaryColorSpan> On This Week
            </SectionTop>

            <GridArtists>
              <GridItem>
                <img src={image8} alt='#'></img>
                <img src={avatar1} alt='avatar1'></img>
              </GridItem>
              
              <GridItem>
                <img src={image10} alt='#'></img>
                <img src={avatar2} alt='avatar2'></img>
              </GridItem>

              <GridItem>
                <img src={image7} alt='#'></img>
                <img src={avatar3} alt='avatar3'></img>
              </GridItem>

              <GridItem>
                <img src={image9} alt='#'></img>
                <img src={avatar4} alt='avatar4'></img>
              </GridItem>

              <GridItem>
                <img src={image11} alt='#'></img>
                <img src={avatar5} alt='avatar5'></img>
              </GridItem>

          </GridArtists>
        </Container>
    </StyledArtists>
  )
}

const StyledArtists = styled.section``
const GridItem = styled.div`
  position: relative;

  img:nth-child(2) {
    position: absolute;
    left: 0;
    bottom: 0%;
    padding-left: 24px;
    padding-bottom: 24px;
  }
`
const GridArtists = styled.div`
    margin-top: 64px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    "one one one two two two two two three three three three"
    "four four four four five five five five three three three three";
    align-items: center;
    justify-items: center;
    column-gap: 30px;
    row-gap: 30px;
    
    ${GridItem} {
      height: 100%;
    }

    ${GridItem}:first-child {
      grid-area: one;
    }
    ${GridItem}:nth-child(2) {
      grid-area: two;
    }
    ${GridItem}:nth-child(3) {
      grid-area: three;
    }
    ${GridItem}:nth-child(4) {
      grid-area: four;
    }
    ${GridItem}:nth-child(5) {
      grid-area: five;
    }
`