import React from 'react'
import useGif from '../../../hooks/useGifs'
import Card from '../Card'
import {Container} from './style'

export default function List(keyword) {
  const {gifs} = useGif(keyword)

  return (
    <Container>
      {gifs.map((collectionGifs) => {
        const {title, id, image} = collectionGifs
        return <Card title={title} key={id} image={image} />
      })}
    </Container>
  )
}
