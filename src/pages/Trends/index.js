import React from 'react'

import SEO from 'components/SEO'
import List from 'components/Gif/List'
import useTrends from 'hooks/useTrends'

import {Container, H3} from './styles'

export default function Trends() {
  const {trends} = useTrends()

  return (
    <>
      <SEO title='Trends | Gif Hunter' name='Trendings page' content='trends' />
      <Container>
        <H3>Trends</H3>
        <List gifs={trends} />
      </Container>
    </>
  )
}
