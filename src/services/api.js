const BASE_URL = 'https://api.giphy.com/v1/gifs/'
const SDK = 'Wb0VCWiWFBQco5s1Dlh6jhBUDI1QMb0q'

export const getGifs = async ({keyword, limit = 10}) => {
  const request = await fetch(
    `${BASE_URL}search?api_key=${SDK}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`,
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

export const getGif = async (id) => {
  const request = await fetch(`${BASE_URL}${id}?api_key=${SDK}`)
  const response = await request.json()
  const data = await response
  return data
}
