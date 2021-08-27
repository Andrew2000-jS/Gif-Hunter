import React from 'react'

import List from 'components/Gif/List'
import useTrends from 'hooks/useTrends'

import {Container, H3} from './styles'

export default function Trends() {
  const {trends} = useTrends()

  return (
    <Container>
      <H3>Trends</H3>
      <List gifs={trends} />
    </Container>
  )
}
