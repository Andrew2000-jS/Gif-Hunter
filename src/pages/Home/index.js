import React from 'react'

import SEO from 'components/SEO'
import SearchBar from 'components/SearchBar'
import Trends from 'components/Trend'
import List from 'components/Gif/List'
import useGifs from 'hooks/useGifs'

import {
  Container,
  ListContainer,
  TrendsContainer,
  LinkTrend,
  H4,
} from './styles'

export default function Home() {
  const {gifs} = useGifs()

  return (
    <>
      <SEO title='Home | Gif Hunter' name='home' content='home page' />
      <Container>
        <SearchBar />

        <TrendsContainer>
          <LinkTrend to='/trends' role='a'>
            Trending
          </LinkTrend>
          <Trends />
        </TrendsContainer>

        <ListContainer>
          <H4>Last search</H4>
          <List gifs={gifs} />
        </ListContainer>
      </Container>
    </>
  )
}
