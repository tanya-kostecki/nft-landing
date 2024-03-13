import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { theme } from '../../../styled/Theme'
import { Paragraph } from '../../../components/Paragraph'
import { font } from "../../../styled/Common";

export const Statistics = () => {
  return (
    <StyledStatistics>
      <FlexWrapper justify="space-between">
        <StatisticsElement>
          <StatisticsTitle>
            <span>8.9</span>
            <span>K</span>
          </StatisticsTitle>
          <StatisticsItem as="span">Art work</StatisticsItem>
        </StatisticsElement>

        <StatisticsElement>
          <StatisticsTitle>
            <span>65</span>
            <span>K</span>
          </StatisticsTitle>
          <StatisticsItem as="span">Artist</StatisticsItem>
        </StatisticsElement>

        <StatisticsElement>
          <StatisticsTitle>
            <span>87</span>
            <span>K</span>
          </StatisticsTitle>
          <StatisticsItem as="span">Collection</StatisticsItem>
        </StatisticsElement>
      </FlexWrapper>
    </StyledStatistics>
  );
}

const StyledStatistics = styled.div`
    margin-top: 72px;
`
const StatisticsElement = styled.div`
  position: relative;

  &:first-child::after,
  &:nth-child(2)::after {
    content: "";
    display: inline-block;
    height: 100%;
    background-color: ${theme.colors.primary};
    width: 1px;
    right: -20px;
    top: 0;
    position: absolute;
  }
`;
const StatisticsTitle = styled.div`
  span {
    ${font({
      family: "Montserrat, sans-serif",
      weight: 500,
      color: theme.colors.font,
      Fmax: 48,
      Fmin: 31,
    })}
    text-align: left;
  }

  span:nth-of-type(odd) {
    color: ${theme.colors.primary};
  }

  span:nth-of-type(even) {
    color: ${theme.colors.font};
  }
`;

const StatisticsItem = styled(Paragraph)``
