import styled from "styled-components"
import { font } from "../styled/Common"
import { theme } from "../styled/Theme"

type SectionTitlePropsType = {
    maxWidth?: string;
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({ family: 'Montserrat, sans-serif', weight: 500, color: theme.colors.font, Fmax: 48, Fmin: 31 })}
    text-align: left;
    width: ${props => props.maxWidth || '100%'};

    @media screen and (max-width: 1153px) {
        text-align: center;
        width: 100%;
    }
`