const toggle = document.querySelector('#toggle')
toggle.addEventListener('click', () => {
  let element = document.body
  let title = document.querySelector('.title')
  let goBack = document.querySelector('.goBack').childNodes

  element.classList.toggle('dark')
  title.classList.toggle('neon')
  goBack.classList.toggle('dark')
})
