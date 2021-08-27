import {useState, useEffect} from 'react'
import {getGif} from 'services/getSingleGifs'
import avatar from 'assets/Hisoka.jpg'
export default function useOneGif(id) {
  const [oneGif, setOneGif] = useState([])

  useEffect(() => {
    getGif(id).then((gif) => {
      const set = {
        image: gif.images.downsized_medium.url,
        title: gif.title,
        username: gif.user?.username || 'Gif hunter',
        avatar: gif.user?.avatar_url || avatar,
        description:
          gif.user?.description ||
          'We are the best gif distributor in the city',
        date: new Date(gif.import_datetime).toLocaleDateString(),
        rating: gif.rating,
        other: gif,
      }
      return setOneGif(set)
    })
  }, [id])

  return {oneGif}
}
