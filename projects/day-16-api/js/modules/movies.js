import { getPopMovies } from './api.js'
import { config } from './config.js'

const moviesElem = document.querySelector('#movies')
const featElem = document.querySelector('#featured-movie')

export async function render() {
  const movies = await getPopMovies()

  const movie = movies[Math.floor(Math.random() * movies.length)]
  console.log(movie)

  moviesElem.innerHTML = movies?.map(movie => renderMovie(movie)).join('')
  featElem.innerHTML = renderFeat(movie)
}

export function renderMovie(movie) {
  return `
    <div class="movie-card">

      <div class="poster">
        <img src="${
          movie?.poster_path
            ? config.POSTER_URL + movie?.poster_path
            : config.PLACEHOLDER
        }">
      </div>

      <div class="content">
        <h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-rate">
          <span class="material-symbols-outlined">grade</span> ${
            movie.vote_average
          }</h3>
      </div>

    </div>
    `
}

export function renderFeat(movie) {
  return `
    <div class="featured-poster">
      <div class="overlay"></div>
      <img src="${
        movie?.poster_path
          ? config.POSTER_URL + movie?.poster_path
          : config.PLACEHOLDER
      }">
    </div>
    <div class="featured-content">
      <h1 class="feat-movie-title">${movie.title}</h1>
      <p class="feat-movie-overview">${movie.overview}</p>
      <p class="feat-movie-release">Released: ${movie.release_date}</p>
      
    </div>
  `
}
