import { config } from "./config.js"

export async function getEmojies() {
  let data = []
  try {
    const response = await fetch(
      `${config.API_URL_FACE}?access_key=${config.API_KEY}`
    )
    const responseData = await response.json()
    data = responseData
  } catch (error) {
    console.error(error)
  }
  return data
}