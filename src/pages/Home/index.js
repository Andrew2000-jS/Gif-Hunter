import React, {useRef} from 'react'

import SearchBar from 'components/SearchBar'
import Trends from 'components/Trend'
import List from 'components/Gif/List'
import useGifs from 'hooks/useGifs'
import useKeyword from 'hooks/useKeyword'

import {
  Container,
  ListContainer,
  TrendsContainer,
  LinkTrend,
  H4,
} from './styles'

export default function Home() {
  const inputRef = useRef(null)
  const {gifs} = useGifs()
  const {keywordToUse, handleKeyword} = useKeyword(inputRef)

  return (
    <Container>
      <SearchBar
        handleChange={handleKeyword}
        keyword={keywordToUse}
        inputRef={inputRef}
      />

      <TrendsContainer>
        <LinkTrend to='/trends'>Trending</LinkTrend>
        <Trends />
      </TrendsContainer>

      <ListContainer>
        <H4>Last search</H4>
        <List gifs={gifs} />
      </ListContainer>
    </Container>
  )
}
