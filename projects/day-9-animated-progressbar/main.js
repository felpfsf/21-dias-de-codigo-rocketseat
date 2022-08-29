let btn = document.querySelector('#clickBtn')
let msg = document.querySelector('.message')
let meter = document.querySelector('.meter')

meter.style.opacity = '0'

btn.addEventListener('click', move)

function move() {
  let barra = document.querySelector('#barra')
  let width = 0
  meter.style.opacity = '1'

  let id = setInterval(frame, 48)

  function frame() {
    msg.classList.remove('neon', 'skewed')
    msg.innerHTML = 'Carregando...'

    if (width >= 100) {

      clearInterval(id)
      btn.removeAttribute('disabled', false)
      msg.innerHTML = `dia 9 de #21diasdecodigo <br> Concluído !!!`
      msg.classList.add('neon', 'skewed')
      msg.style.opacity = '1'

    } else {
      
      width++
      barra.style.width = width + '%'
      barra.innerHTML = width * 1 + '%'
      btn.setAttribute('disabled', true)
    }
  }
}
