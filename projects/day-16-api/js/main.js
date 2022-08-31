import { render } from './modules/movies.js'
import { searchMovie } from './modules/search.js'

const searchInpt = document.querySelector('.input-search')

searchInpt.addEventListener('keyup', evt => searchMovie(evt.target.value))
// searchInpt.addEventListener('keyup', e => console.log(e.target.value))
function App() {
  render()
}

App()
