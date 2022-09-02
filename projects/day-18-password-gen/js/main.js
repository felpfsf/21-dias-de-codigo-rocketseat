const pswOutputElem = document.querySelector('#pswOutput')

const btnGenPass = document.querySelector('#btnGenpass')

const btnCopy = document.querySelector('#btnCopy')

btnCopy.addEventListener('click', copyPass)

btnGenPass.addEventListener('click', genPassword)

function genPassword() {
  let characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()!@#$%^&*'
  let pswLength = 12
  let psw = ''

  for (let i = 0; i < pswLength; i++) {
    let rdnNum = Math.floor(Math.random() * characters.length)
    console.log(rdnNum)
    psw += characters.substring(rdnNum, rdnNum + 1)
  }
  pswOutputElem.textContent = psw
  console.log(psw)
}

function copyPass() {
  let pswToBeCopied = pswOutputElem.textContent
  console.log(pswToBeCopied)
  navigator.clipboard.writeText(pswToBeCopied)
}
