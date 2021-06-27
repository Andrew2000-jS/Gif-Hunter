import {useState, useEffect} from 'react'
import {getGif} from '../services/api'

export default function useOneGif(id) {
  const [oneGif, setOneGif] = useState([])

  useEffect(() => {
    getGif(id).then((gif) => {
      const set = {
        image: gif.images.downsized_medium.url,
        title: gif.title,
      }
      return setOneGif(set)
    })
  }, [id])

  return {oneGif}
}
