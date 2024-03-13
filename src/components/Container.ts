import styled from "styled-components"
import { theme } from "../styled/Theme"

export const Container = styled.div`
    max-width: 1305px; //1290px
    width: 100%;
    min-height: 100%;
    padding: 0 16px;
    margin: 0 auto;
    border: 1px solid red;

    /* @media ${theme.media.tablet} {
        padding-left: 16px;
        padding-right: 16px;
    } */
`