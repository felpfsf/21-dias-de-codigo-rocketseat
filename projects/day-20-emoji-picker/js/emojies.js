import { getEmojies } from './api.js'

const emojieDiv = document.querySelector('#emojieDiv')

export async function render() {
  const emojies = await getEmojies()
  // console.log(emojies)

  emojieDiv.innerHTML = emojies
    ?.map(emojie => renderEmojieCard(emojie))
    .join('')

  // Function that copy the emojie
  // PS: I couldn't module it
  let element = document.querySelectorAll('.emoji-card span')
  let tooltip = document.querySelector('.tooltip-text')
  // console.log(element)
  element.forEach(item => {
    item.addEventListener('click', () => {
      let emojieCopy = item.innerText
      navigator.clipboard.writeText(emojieCopy)
      console.log(emojieCopy)
      showTooltip(emojieCopy)
    })
  })

  function showTooltip(emojieCopy) {
    Toastify({
      text: `${emojieCopy} copied to clipboard`,
      position: 'center',
      duration: 2000
    }).showToast()
  }
}

export function renderEmojieCard(emojie) {
  return `
    <div id="emojieCard" class="emoji-card">
      <span class="tooltip-text">Copied !</span>
      <span class="emoji-char">${emojie.character}</span>
      <p class="unicode-name">${emojie.unicodeName}</p>
    </div>
  `
}

// export function renderEmojieCard(emojie) {
//   let newEl = document.createElement('div')
//   newEl.setAttribute('class', 'emoji-card')
//   newEl.innerHTML += `<span class="emoji-char">${emojie.character}</span>`
// }
