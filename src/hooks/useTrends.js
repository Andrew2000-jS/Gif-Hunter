import {useEffect, useState} from 'react'
import {getTrending} from 'services/getTrends'

export default function useTrends() {
  const [trends, setTrends] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getTrending().then((trend) => {
      setTrends(trend)
      setLoading(true)
    })
  }, [])
  return {trends, loading}
}
