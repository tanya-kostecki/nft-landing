import styled from "styled-components";
import { theme } from "../../../../styled/Theme";
import { font } from "../../../../styled/Common";
import { Paragraph } from "../../../../components/Paragraph";

export const Statistics = styled.div`
    margin-top: 72px;
`
export const StatisticsElement = styled.div`
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
export const StatisticsTitle = styled.div`
  margin-bottom: 12px;
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

export const StatisticsItem = styled(Paragraph)``