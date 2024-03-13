import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Card } from './Card'
import image2 from '../../../assets/images/image2.webp'
import image3 from '../../../assets/images/image3.webp'
import image4 from '../../../assets/images/image4.webp'

const cards = [
    {
        name: 'Surgeon, Josh Rife',
        image: image2,
    },
    {
        name: 'Charge, Qi tiao yu',
        image: image3,
    },
    {
        name: 'Cyberpunk Cocomo',
        image: image4,
    },
]
export const Cards = () => {
  return (
    <FlexWrapper gap='15px' wrap='wrap' justify='center'>
        {cards.map((card, index) => <Card key={index} name={card.name} image={card.image}/>)}
    </FlexWrapper>
  )
}
