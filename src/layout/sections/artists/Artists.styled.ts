import styled from "styled-components";
import { StyledButton } from "../../../components/StyledButton";
import { theme } from "../../../styled/Theme";

export const Artists = styled.section`
  background: radial-gradient(circle at left bottom, #1f413d 0%, #020014 30%);
  position: relative;
`
export const GridItem = styled.div`
  position: relative;

  div {
    position: absolute;
    left: 0;
    bottom: 0%;
    padding-left: 24px;
    padding-bottom: 24px;
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }

  @media screen and (max-width: 1275px) {
    max-width: 343px;
    max-height: 356px;
  }
`

export const GridImg = styled.img`
  @media screen and (max-width: 1275px) {
    width: 343px;
    height: 356px;
    object-fit: cover;
  }
`

export const ArtistsButton = styled(StyledButton)`
  @media ${theme.media.tablet} {
    display: none;
  }
`
export const GridArtists = styled.div`
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

    @media screen and (max-width: 1275px) {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-top: 32px;
    }
`