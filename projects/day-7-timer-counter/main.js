const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const DATETARGET = new Date('Sep 05, 2022 23:59:59').getTime()

let i = setInterval(() => {
  let datePresent = new Date().getTime()

  let diff = DATETARGET - datePresent


  const days = Math.floor(diff / DAY)
  const hours = Math.floor((diff % DAY) / HOUR)
  const mins = Math.floor((diff % HOUR) / MINUTE)
  const secs = Math.floor((diff % MINUTE) / SECOND)

  document.querySelector('#countdown').innerHTML = `
    <div><h2>${days}</h2><p>Days</p></div>
    <div><h2>${hours}</h2><p>hours</p></div>
    <div><h2>${mins}</h2><p>mins</p></div>
    <div><h2>${secs}</h2><p>secs</p></div>
  `

  if (diff < 0) {
    clearInterval(i)
    document.querySelector('#countdown').innerHTML = 'Prazo encerrado'
  }
}, SECOND)
