let btn = document.querySelector('#clickBtn')
btn.addEventListener('click', move)

function move() {
  let barra = document.querySelector('#barra')
  let width = 0
  let id = setInterval(frame, 48)

  function frame() {
    if (width >= 100) {
      clearInterval(id)
      btn.style.opacity = '1'
    } else {
      width++
      barra.style.width = width + '%'
      barra.innerHTML = width * 1 + '%'
      btn.style.opacity = '0'
    }
  }
}
