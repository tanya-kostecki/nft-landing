import styled from "styled-components"

type SectionTitlePropsType = {
    maxWidth?: string;
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: 48px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0px;
    text-align: left;
    width: ${props => props.maxWidth || '100%'};
`