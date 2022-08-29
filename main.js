const navToggle = document.querySelector('.mobile-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', openMenu)

function openMenu() {
  const isOpen = navMenu.getAttribute('data-visible')
  if (isOpen === 'false') {
    navMenu.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
    navToggle.innerHTML = '<i id="menu-icon" class="ph-x-light"></i>'
  } else if (isOpen === 'true') {
    navMenu.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
    navToggle.innerHTML = '<i id="menu-icon" class="ph-list-light"></i>'
  }
}
