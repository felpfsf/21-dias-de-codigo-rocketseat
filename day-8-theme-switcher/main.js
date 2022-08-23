const toggle = document.querySelector('#toggle')
toggle.addEventListener('click', () => {
  let element = document.body
  let title = document.querySelector('.title')
  element.classList.toggle('dark')
  title.classList.toggle('neon')
})