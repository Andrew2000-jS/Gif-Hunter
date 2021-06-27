import Gifs from 'components/Gif/List'
import useGifs from 'hooks/useGifs'
import {Container} from './style'
export default function GifResult({match}) {
  const {keyword} = match.params
  const {gifs} = useGifs(keyword)
  console.log(keyword)
  console.log('keyword', gifs)
  return (
    <Container>
      <Gifs gifs={gifs} />
    </Container>
  )
}
