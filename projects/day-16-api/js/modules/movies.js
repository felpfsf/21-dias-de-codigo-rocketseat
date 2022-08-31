import { getPopMovies } from './api.js'
import { config } from './config.js'

const moviesElem = document.querySelector('#movies')
// console.log(moviesElem);

export async function render() {
  const movies = await getPopMovies()
  console.log(movies)

  moviesElem.innerHTML = movies?.map(movie => renderMovie(movie)).join('')
}

export function renderMovie(movie) {
  return `
      <div>
        <img src="${
          movie?.poster_path
            ? config.POSTER_URL + movie?.poster_path
            : config.PLACEHOLDER
        }">
        <h2>${movie?.title}</h2>
      </div>
    `
}
