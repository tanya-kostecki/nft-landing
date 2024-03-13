import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string;
    align?: string;
    direction?: string;
    gap?: string;
    wrap?: string;
    marginBottom?: string;
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'flex-start'};
    gap: ${props => props.gap};
    flex-wrap: ${props => props.wrap || 'no-wrap'};
    margin-bottom: ${props => props.marginBottom};

`