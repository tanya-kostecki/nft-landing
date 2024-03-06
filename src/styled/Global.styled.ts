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

    a {
        color: ${theme.colors.font};
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
        color: ${theme.colors.primary};
    }

    button {
        cursor: pointer;
        transition: .3s ease;
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
    }
`