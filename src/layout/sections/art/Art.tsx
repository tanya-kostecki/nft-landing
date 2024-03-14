import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledButton } from '../../../components/button/Button'
import { Container } from '../../../components/Container'
import { Cards } from './Cards'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import styled from "styled-components";
import { theme } from '../../../styled/Theme'

export const Art = () => {
  return (
    <StyledArt>
      <Container>
        <ArtWrapper justify="space-between" align="flex-end">
          <SectionTitle maxWidth="580px">
            <PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of
            This <PrimaryColorSpan>Week</PrimaryColorSpan>
          </SectionTitle>
          <ArtButton>See All</ArtButton>
        </ArtWrapper>
        <Cards />
        <MobileArtButton>See All</MobileArtButton>
      </Container>
    </StyledArt>
  );
};

const StyledArt = styled.section`
  background: radial-gradient(circle at right bottom, #1f413d 0%, #020014 40%);
`;
const ArtWrapper = styled(FlexWrapper)`
  margin-bottom: 64px;

  //
  justify-content: space-between;

  @media screen and (max-width: 1294px) {
    margin-bottom: 32px;
    //
    justify-content: center;
  }
`

const ArtButton = styled(StyledButton)`
  @media ${theme.media.tablet} {
    display: none;
  }
`

export const MobileArtButton = styled(StyledButton)`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
  }

`