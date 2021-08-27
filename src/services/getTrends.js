import {BASE_URL, SDK} from './settings'

export const getTrending = async () => {
  const request = await fetch(
    `${BASE_URL}trending?api_key=${SDK}&limit=20&rating=g`,
  )
  const {data} = await request.json()

  const gif = data.map((gifData) => {
    return {
      image: gifData.images.downsized_medium.url,
      title: gifData.title,
      id: gifData.id,
    }
  })

  return gif
}
