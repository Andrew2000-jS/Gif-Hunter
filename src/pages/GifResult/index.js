import {useRef} from 'react'

import Gifs from 'components/Gif/List'
import Spinner from 'components/Spinner'
import SearchBar from 'components/SearchBar'
import useGifs from 'hooks/useGifs'
import useKeyword from 'hooks/useKeyword'

import {Container, HeadContent, H3, ListContent} from './style'

export default function GifResult({match}) {
  const {keyword} = match.params
  const {gifs, loading} = useGifs(keyword)
  const inputRef = useRef(null)
  const {keywordToUse, handleKeyword} = useKeyword(inputRef)

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <HeadContent>
            <SearchBar
              keyword={keywordToUse}
              inputRef={inputRef}
              handleChange={handleKeyword}
            />
            <H3>You search: {keyword.toUpperCase()}</H3>
          </HeadContent>
          <ListContent>
            <Gifs gifs={gifs} />
          </ListContent>
        </>
      )}
    </Container>
  )
}
