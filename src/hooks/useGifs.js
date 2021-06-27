import {useState, useEffect} from 'react'
import {getGifs} from '../services/api'

export default function useGifs(keyword) {
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    getGifs({keyword}).then((allGifs) => setGifs(allGifs))
  }, [keyword])
  return {gifs}
}
