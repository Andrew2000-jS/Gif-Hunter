import React from 'react'
import useOneGif from 'hooks/useOneGif'
import {Container} from './style'

export default function Detail({match}) {
  const {id} = match.params
  const {oneGif} = useOneGif(id)

  return (
    <Container>
      <h1>{oneGif.title}</h1>
      <img src={oneGif.image} alt={oneGif.title} />
    </Container>
  )
}
