import { config } from "./config.js"

export async function getEmojies() {
  let data = []
  try {
    const response = await fetch(
      'https://emoji-api.com/categories/smileys-emotion?access_key=33689ed776c86ee708efd715701838cac27dcc6d'
    )
    const responseData = await response.json()
    data = responseData
  } catch (error) {
    console.error(error)
  }
  return data
}


// const options = {method: 'GET'};

// fetch('https://emoji-api.com/categories/smileys-emotion?access_key=33689ed776c86ee708efd715701838cac27dcc6d', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// `${config.API_URL_FACE}&access_key=${config.API_KEY}`