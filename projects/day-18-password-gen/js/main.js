const pswDiv = document.querySelector('.output-container')
const pswOutputElem = document.querySelector('#pswOutput')
const loaderElem = document.querySelector('.loader')
const btnGenPass = document.querySelector('#btnGenpass')
const btnCopy = document.querySelector('#btnCopy')

btnCopy.addEventListener('click', copyPass)
btnGenPass.addEventListener('click', genPassword)

function genPassword() {
  pswDiv.style.opacity = 0

  // Storing characters to generate the password
  let characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()!@#$%^&*'

  // Password length is 12 characters long
  let pswLength = 12
  // Password variable that will receive the generated random characters
  let psw = ''

  for (let i = 0; i < pswLength; i++) {
    // will generate a random number each iteration, that number corresponds to
    // a character position in characters string variable
    // So it'll add that character in 'psw'
    let rdnNum = Math.floor(Math.random() * characters.length)
    // console.log(rdnNum)
    psw += characters.substring(rdnNum, rdnNum + 1)
  }
  // pswOutputElem.innerHTML = '<div class="loader"></div>'
  loaderElem.style.opacity = 1

  setTimeout(() => {
    loaderElem.style.opacity = 0
    pswDiv.style.opacity = 1
    pswOutputElem.textContent = psw
    // console.log(psw)
  }, 900)
}

function copyPass() {
  let pswToBeCopied = pswOutputElem.textContent
  // console.log(pswToBeCopied)

  navigator.clipboard.writeText(pswToBeCopied)
  pswOutputElem.textContent = 'Copied !'

  setTimeout(() => {
    pswOutputElem.textContent = pswToBeCopied
  }, 1000)
}
