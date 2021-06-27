import React from 'react'
import {GifCard, Img, Title} from './style'
import {Link} from 'react-router-dom'

export default function Card({id, title, image}) {
  return (
    <Link to={`/search/gif/${id}`}>
      <GifCard key={id}>
        <Title>{title || 'Cool title'}</Title>
        <Img src={image} alt={title} />
      </GifCard>
    </Link>
  )
}
