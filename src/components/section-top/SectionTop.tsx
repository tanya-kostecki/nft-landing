import React, { ReactNode } from 'react'
import { FlexWrapper } from '../FlexWrapper'
import { SectionTitle } from '../SectionTitle'
import { Button } from '../button/Button'

type SectionTopPropsType = {
    children: ReactNode;
    buttonChildren: ReactNode;
    maxWidth?: string
}
export const SectionTop = (props: SectionTopPropsType) => {
  return (
    <FlexWrapper justify='space-between' align='flex-end'>
        <SectionTitle maxWidth={props.maxWidth}>{props.children}</SectionTitle>
        <Button>{props.buttonChildren}</Button>
    </FlexWrapper>
  )
}
