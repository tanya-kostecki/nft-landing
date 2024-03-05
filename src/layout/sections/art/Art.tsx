import React from 'react'
// import { FlexWrapper } from '../../../components/FlexWrapper'
// import { SectionTitle } from '../../../components/SectionTitle'
// import { Button } from '../../../components/button/Button'
import { Container } from '../../../components/Container'
import { Cards } from './Cards'
import { PrimaryColorSpan } from '../../../components/PrimaryColorSpan'
import { SectionTop } from '../../../components/section-top/SectionTop'

export const Art = () => {
  return (
    <section>
        <Container>
            {/* <FlexWrapper justify='space-between' align='flex-end'>
                <SectionTitle maxWidth='510px'><PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of This <PrimaryColorSpan>Week</PrimaryColorSpan></SectionTitle>
                <Button>See All</Button>
            </FlexWrapper> */}
            <SectionTop buttonChildren="See All">
              <PrimaryColorSpan>Amazing</PrimaryColorSpan> and Super Unique Art of This <PrimaryColorSpan>Week</PrimaryColorSpan>
            </SectionTop>
            <Cards/>
        </Container>
    </section>
  )
}
