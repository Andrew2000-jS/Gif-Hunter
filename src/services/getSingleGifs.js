import {BASE_URL, SDK} from './settings'

export const getGif = async (id) => {
  const request = await fetch(`${BASE_URL}${id}?api_key=${SDK}`)
  const response = await request.json()
  const {data} = await response
  return data
}
