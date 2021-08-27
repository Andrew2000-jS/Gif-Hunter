import {useState, useEffect} from 'react'
import {getGifs} from 'services/getGifs'

export default function useGifs(keyword) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  const lastKeyword = !keyword
    ? window.localStorage.getItem('keyword')
    : keyword

  useEffect(() => {
    setLoading(true)
    getGifs({keyword: lastKeyword}).then((allGifs) => {
      setGifs(allGifs)
      setLoading(false)
      window.localStorage.setItem('keyword', keyword)
    })
  }, [keyword, lastKeyword])
  return {gifs, loading}
}
