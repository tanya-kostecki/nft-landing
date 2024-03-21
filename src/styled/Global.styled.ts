import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;

    }

    li {
        transition: ${theme.animations.transition};
        -webkit-transition: ${theme.animations.transition};
    }

    li:hover {
        transform: scale(1.2);
        color: ${theme.colors.primary};
    }

    a {
        color: ${theme.colors.font};
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
        transition: ${theme.animations.transition};
        -webkit-transition: ${theme.animations.transition};
    }

    a:hover {
        transform: scale(1.2);
        color: ${theme.colors.primary};
    }

    button {
        cursor: pointer;
        transition: ${theme.animations.transition};
    }

    button:hover {
        transform: scale(1.2);
    }

    img {
        border-radius: 16px;
    }
    
    body {
        margin: 0;
        font-family: "Inter", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.background};
        color: ${theme.colors.font};
    }

    section {
        padding-top: 90px;
        padding-bottom: 90px;

        @media ${theme.media.tablet} {
            padding-top: 40px;
            padding-bottom: 40px;
        }
    }
`