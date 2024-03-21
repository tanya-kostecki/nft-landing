import styled from "styled-components";
import { theme } from "../styled/Theme";

export const StyledLink = styled.a`
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    text-align: left;
    
    transition: ${theme.animations.transition};
    -webkit-transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
        color: ${theme.colors.primary};
    }
`