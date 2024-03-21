import styled from "styled-components";
import { theme } from "../../styled/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Paragraph } from "../../components/Paragraph";

export const Footer = styled.footer`
    padding-top: 90px;

    @media ${theme.media.tablet} {
        padding-top: 40px;
    }
`
export const FooterFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 48px;
    position: relative;
    padding-left: 16px;
    padding-right: 16px;

    &::after {
        content: "";
        position: absolute;
        display: inline-block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.font};
    }
`
export const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
    margin-top: 20px;
    max-width: 272px;
`
export const LeftParagraph = styled(Paragraph)`
    margin-bottom: 0;
    margin-top: 5px;
`
export const RightBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 94px;
    margin-top: 10px;

    @media ${theme.media.tablet} {
        margin-top: 48px;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 32px;
        margin-top: 48px;
    }
`
export const Socials = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 25px;
`

export const SocialLink = styled.a`
  svg {
    fill: ${theme.colors.font};
  }

  &:hover {
    svg {
      fill: ${theme.colors.primary};
    }
  }
`;

export const CopyrightFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 92px;
    padding-top: 48px;

    @media ${theme.media.mobile} {
        flex-direction: column;
    }

    @media ${theme.media.tablet} {
        padding-bottom: 40px;
    }
`

export const CopyrightSpan = styled(Paragraph)`
    margin-bottom: 16px;
`
export const CopyrightWrapper = styled(FlexWrapper)`
    gap: 28px;

    @media ${theme.media.mobile} {
        gap: 16px;
        flex-direction: column;
    }
`

export const CopyrightLink = styled(Paragraph)`
    @media ${theme.media.mobile} {
        margin-bottom: 0;
    }
`