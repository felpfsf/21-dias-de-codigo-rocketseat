const keys = document.querySelectorAll('.teclas div')
console.log(keys)

keys.forEach(item => {
  item.addEventListener('click', evt => {
    console.log(evt.target.getAttribute('data-key'))
    tocaSom(evt.target.getAttribute('data-key'))
  })
})

document.body.addEventListener('keyup', e => {
  console.log(e.code.toLowerCase())
  // console.log(e.key.toLowerCase())
  // keys.textContent = `${e.key} ${e.code}`

  tocaSom(e.code.toLowerCase())
})

function tocaSom(som) {
  let audioElem = document.querySelector(`#s_${som}`)
  let teclaElem = document.querySelector(`div[data-key="${som}"]`)

  if (audioElem) {
    audioElem.currentTime = 0
    audioElem.play()
  }

  if (teclaElem) {
    teclaElem.classList.add('active')

    setTimeout(() => {
      teclaElem.classList.remove('active')
    }, 250)
  }
}
