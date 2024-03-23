import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledButton } from "../../../components/StyledButton";
import { theme } from "../../../styled/Theme";

export const Art = styled.section`
  background: radial-gradient(circle at right bottom, #1f413d 0%, #020014 40%);
  padding-top: 55px;
  position: relative;
`;
export const ArtWrapper = styled(FlexWrapper)`
  margin-bottom: 64px;
  justify-content: space-between;

  @media screen and (max-width: 1294px) {
    margin-bottom: 32px;
  }
`;

export const ArtButton = styled(StyledButton)`
  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const MobileArtButton = styled(StyledButton)`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
  }
`;