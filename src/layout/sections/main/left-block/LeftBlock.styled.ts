import styled from "styled-components";
import { font } from "../../../../styled/Common";
import { theme } from "../../../../styled/Theme";
import { Paragraph } from "../../../../components/Paragraph";

export const LeftBlock = styled.div`
  max-width: 540px;
`;
export const Title = styled.h1`
  ${font({
    family: "Montserrat, sans-serif",
    weight: 500,
    color: theme.colors.font,
    Fmax: 64,
    Fmin: 39,
  })}
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;

  @media ${theme.media.mobile} {
    text-align: center;
  }
`;
export const LeftParagraph = styled(Paragraph)`
  width: 100%;
  margin-bottom: 45px;

  @media ${theme.media.mobile} {
    text-align: center;
  }
`;
export const ExploreBlock = styled.div`
  @media ${theme.media.mobile} {
    margin: 0 auto;
  }
`;
