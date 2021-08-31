import {useState, useEffect} from 'react'
import {getGifs} from 'services/getGifs'

export default function useGifs(keyword) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(0)
  const [loadingPage, setLoadingPage] = useState(false)

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

  useEffect(() => {
    if (page === 0) return setLoadingPage(true)

    getGifs({keyword, lastKeyword, page}).then((nextPage) => {
      setGifs((prev) => prev.concat(nextPage))
      setLoadingPage(false)
    })
  }, [setLoadingPage, keyword, lastKeyword, page])

  return {gifs, loading, setPage, loadingPage}
}
