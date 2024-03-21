import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Paragraph } from "../../../components/Paragraph";
import { theme } from "../../../styled/Theme";

export const Create = styled.section`
  background: radial-gradient(circle at right top, #1f413d 0%, #020014 40%);
`;

export const CreateWrapper = styled(FlexWrapper)`
  justify-content: space-between;

  @media screen and (max-width: 1212px) {
    justify-content: center;
  }
`;

export const StyledLeft = styled.div`
  max-width: 426px;
  margin-bottom: 48px;
  margin-top: 40px;

  @media screen and (min-width: 769px) and (max-width: 1212px) {
    max-width: 100%;
  }
`;
export const CreateParagraph = styled(Paragraph)`
  margin-top: 30px;
`;
export const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 559px;
  width: 740px;

  img {
    position: absolute;
    max-width: 410px;
    width: 100%;
  }
  img:nth-of-type(1) {
    top: 0;
    right: 0;
    max-height: 475px;
  }

  img:nth-of-type(2) {
    left: 0;
    bottom: 0;
    max-height: 400px;
  }

  @media ${theme.media.tablet} {
    width: 343px;
    height: 260px;

    img {
      position: absolute;
      max-width: 190px;
      width: 100%;
    }
    img:nth-of-type(1) {
      top: 0;
      right: 0;
      max-height: 220px;
    }

    img:nth-of-type(2) {
      left: 0;
      bottom: 0;
      max-height: 186px;
    }
  }
`;
