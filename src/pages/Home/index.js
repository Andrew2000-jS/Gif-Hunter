import React, {useState} from 'react'
import {Container} from './styles'
import SearchBar from 'components/SearchBar'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const handleChange = (e) => setKeyword(e.target.value)

  return (
    <Container>
      <h1>Gif Hunter</h1>
      <SearchBar handleChange={handleChange} keyword={keyword} />
    </Container>
  )
}
