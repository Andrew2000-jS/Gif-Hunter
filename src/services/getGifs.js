import {BASE_URL, SDK} from './settings'

export const getGifs = async ({keyword, limit = 10, page}) => {
  const request = await fetch(
    `${BASE_URL}search?api_key=${SDK}&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&rating=g&lang=en`,
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
