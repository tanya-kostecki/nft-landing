import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styled/Theme";
import { Paragraph } from "../../../components/Paragraph";
import { StyledButton } from "../../../components/StyledButton";

export const Subscribe = styled.section`
     background: radial-gradient(circle at left top, #1f413d 0%, #020014 30%);
`
export const SubscribeWrapper = styled(FlexWrapper)`
  @media screen and (max-width: 1144px) {
    flex-direction: column-reverse;
    gap: 48px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 458px;
  max-width: 630px;
  width: 100%;

  img:first-child {
    max-width: 410px;
    max-height: 376px;
    /* transform: translate(8%, 10%) rotate(-11deg); */
  }

  img:last-child {
    position: absolute;
    top: 25%;
    left: 45%; //85
    max-width: 282px;
    max-height: 348px;
  }

  @media ${theme.media.tablet} {
    max-width: 343px;
    max-height: 250px;

    img:first-child {
      max-width: 224px;
    }

    img:last-child {
      left: 45%;
      max-width: 152px;
    }
  }
`;
export const TextBlock = styled.div`
    max-width: 520px;

    input {
        padding: 16px 24px 16px 24px;
        border-radius: 8px;
        background: rgb(19, 30, 58);
        border: none;
        width: 100%;
    }
`
export const TextParagraph = styled(Paragraph)`
    margin-top: 20px;
`
export const SubscribeBlock = styled.form`
    width: 100%;
    position: relative;

    ${StyledButton} {
        position: absolute;
        right: 0;
    }

    input {
      color: ${theme.colors.font};
    }

    @media ${theme.media.mobile} {
        position: static;

        ${StyledButton} {
            position: static;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            display: block;
        }
    }
`