import React from 'react'
import {GifCard, Img, Title} from './style'

export default function Card({id, title, image}) {
  return (
    <div>
      <GifCard key={id}>
        <Title>{title || 'Cool title'}</Title>
        <Img src={image} alt={title} />
      </GifCard>
    </div>
  )
}
