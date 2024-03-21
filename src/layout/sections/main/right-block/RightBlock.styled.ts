import styled, { keyframes } from "styled-components";
import { theme } from "../../../../styled/Theme";
import { StyledButton } from "../../../../components/StyledButton";

export const RightBlock = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 120px; //90px
  position: relative;

  @media screen and (max-width: 1137px) {
    padding-top: 32px;
  }

  @media ${theme.media.tablet} {
    padding-top: 32px;
  }

  @media ${theme.media.mobile} {
    width: 100%;
    padding-left: 0;
    padding-right: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-width: 464px;
  max-height: 544px;
  border-radius: 24px;

  @media ${theme.media.mobile} {
    width: 100%;
    padding-left: 29px;
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 34%;
  left: 0;

  svg {
    animation: ${rotation} 20s linear infinite;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;
export const BidBlock = styled.div`
  border-top: 1px solid ${theme.colors.primary};
  border-radius: 16px;
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
  background: ${theme.colors.blockBackground};
  padding: 20px;

  position: absolute;
  /* top: 75%; */
  bottom: 6%;
  right: 0;
  width: 304px;

  span {
    display: block;
    line-height: 27px;
  }

  span:first-child {
    color: ${theme.colors.primary};
  }

  @media ${theme.media.mobile} {
    /* width: 224px; */
    width: 60vw;
  }
`;
export const BidButton = styled(StyledButton)`
  width: 100%;
  margin-top: 24px;
`;
