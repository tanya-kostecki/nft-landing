import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/button/Button'
import { Container } from '../../../components/Container'
import { Cards } from './Cards'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import styled from "styled-components";

export const Art = () => {
  return (
    <StyledArt>
      <Container>
        <FlexWrapper justify="space-between" align="flex-end">
          <SectionTitle maxWidth="580px">
            <PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of
            This <PrimaryColorSpan>Week</PrimaryColorSpan>
          </SectionTitle>
          <Button>See All</Button>
        </FlexWrapper>
        <Cards />
      </Container>
    </StyledArt>
  );
};

const StyledArt = styled.section`
  background: radial-gradient(circle at right bottom, #1f413d 0%, #020014 40%);
`;
