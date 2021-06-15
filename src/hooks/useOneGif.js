import {useState, useEffect} from 'react'
import {getGif} from '../services/api'

export default function useOneGif(id) {
  const [oneGif, setOneGif] = useState()

  useEffect(() => {
    getGif(id).then((gif) => setOneGif(gif))
  }, [])

  return {oneGif}
}
