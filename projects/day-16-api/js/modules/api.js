import { config } from './config.js'

const API_KEY = config.KEY_API
const BASE_URL = config.BASE_URL

export async function getPopMovies(page = 1) {
  let data = []

  try {

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`)
    const responseData = await response.json()
    data = responseData?.results

  } catch(err) {

    console.log(err);

  }

  return data
}
