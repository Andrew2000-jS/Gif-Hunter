import React from 'react'
import Card from '../Card'
import {Container} from './style'

export default function List({gifs = []}) {
  return (
    <Container>
      {gifs.map((collectionGifs) => {
        const {title, id, image} = collectionGifs
        return <Card title={title} key={id} id={id} image={image} />
      })}
    </Container>
  )
}
