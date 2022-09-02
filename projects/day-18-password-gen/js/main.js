const pswDivElem = document.querySelector('#pswOutput')
const btnGenPass = document.querySelector('#btn-genpass')

btnGenPass.addEventListener('click', () => {
  genPassword()
})

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
  pswDivElem.innerHTML = `<p>${psw}</p>`
  console.log(psw)
}
