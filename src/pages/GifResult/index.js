import {useEffect, useRef} from 'react'

import SEO from 'components/SEO'
import useObserver from 'hooks/useObserver'
import Gifs from 'components/Gif/List'
import Spinner from 'components/Spinner'
import SearchBar from 'components/SearchBar'
import useGifs from 'hooks/useGifs'
import useKeyword from 'hooks/useKeyword'

import {Container, HeadContent, H3, ListContent} from './style'
import debounce from 'just-debounce-it'

export default function GifResult({match}) {
  const {keyword} = match.params
  const inputRef = useRef(null)

  const {gifs, loading, setPage} = useGifs(keyword)
  const {keywordToUse, handleKeyword} = useKeyword(inputRef)
  const {isVisible, refToUse} = useObserver({rootMargin: '100px'})

  const handleNexPage = debounce(() => setPage((prev) => prev + 1), 200)

  useEffect(() => {
    if (isVisible) handleNexPage()
  }, [handleNexPage, isVisible])

  return (
    <>
      <SEO
        title={`${keyword} | Gif Hunter`}
        name={`${keyword} results`}
        content={keyword}
      />
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
            <div id='visor' ref={refToUse}></div>
          </>
        )}
      </Container>
    </>
  )
}
