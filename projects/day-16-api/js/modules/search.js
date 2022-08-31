import { getSearchedMovie } from './api.js'
import { renderMovie } from './movies.js'

const loaderElem = document.querySelector('#loader')
const searchResultElem = document.querySelector('#searchResult')

let reqCount = 0

export function searchMovie(searchTxt) {
  if (searchTxt.trim() !== '' && reqCount < 100) {
    let searchTimeout
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      fetchSearchedMovie(searchTxt)
      loaderElem.textContent = 'Searching...'
    }, 750)
  } else {
    searchResultElem.innerHTML = ''
    loaderElem.textContent = ''
  }
}

export async function fetchSearchedMovie(searchTxt) {
  const movies = await getSearchedMovie(searchTxt)
  if (movies.length > 0) {
    searchResultElem.innerHTML = movies.map(movie => renderMovie(movie)).join('')
    loaderElem.textContent = `${movies.length} for ${searchTxt}`
  }
  if (movies?.length === 0) {
    searchResultElem.innerHTML = ''
    loaderElem.textContent = 'No results were found ...'
  }
  reqCount++
}
