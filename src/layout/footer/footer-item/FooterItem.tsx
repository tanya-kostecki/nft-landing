import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../../../components/Paragraph';

interface ParagraphItems {
    url: string;
    title: string;
}

type FooterItemPropsType = {
    title: string;
    paragraphs: ParagraphItems[];
}
export const FooterItem = (props: FooterItemPropsType) => {
  return (
    <StyledFooterItem>
        <ItemTitle>{props.title}</ItemTitle>
        {props.paragraphs.map((paragraph, index) => <ItemSpan as='a' key={index} href={paragraph.url}>{paragraph.title}</ItemSpan>)}
    </StyledFooterItem>

  )
}

const StyledFooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const ItemTitle = styled.h4`
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 16px;
`
const ItemSpan = styled(Paragraph)`
    margin-bottom: 0
`