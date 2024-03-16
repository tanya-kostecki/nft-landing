import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Card } from './Card'
import { cards } from '../../../data/data'

export const Cards = () => {
  return (
    <FlexWrapper gap='15px' wrap='wrap' justify='center'>
        {cards.map((card, index) => <Card key={index} name={card.name} image={card.image}/>)}
    </FlexWrapper>
  )
}
