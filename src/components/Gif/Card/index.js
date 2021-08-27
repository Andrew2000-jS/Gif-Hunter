import React from 'react'
import {GifCard, Img, Title} from './style'
import {Link} from 'react-router-dom'

function Card({id, title, image}) {
  return (
    <Link to={`/search/gif/${id}`} style={{justifySelf: 'center'}}>
      <GifCard key={id}>
        <Title>{title || 'Cool title'}</Title>
        <Img src={image} alt={title} />
      </GifCard>
    </Link>
  )
}

export default React.memo(Card, (prev, next) => {
  return prev.id === next.id
})
