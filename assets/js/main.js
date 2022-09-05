const navToggle = document.querySelector('.mobile-toggle')
const navMenu = document.querySelector('.nav-menu')
const navMenuLinks = document.querySelectorAll('.nav-menu a')
const btnScrollToTheTop = document.querySelector('#btnScrollToTheTop')
console.log(btnScrollToTheTop);

window.addEventListener('scroll', scrollToTheTop)

navMenuLinks.forEach(item => {
  item.addEventListener('click', openMenu)
})

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

function scrollToTheTop() {
  if (scrollY > 300) {
    btnScrollToTheTop.classList.add('isVisible')
  } else {
    btnScrollToTheTop.classList.remove('isVisible')
  }
}
