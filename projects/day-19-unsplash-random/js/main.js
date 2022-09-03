const btnGenRandom = document.querySelectorAll('.btnGenImg')
const imgContainer = document.querySelector('.image-display')

const URL_RANDOM = 'https://source.unsplash.com/random/500x500/'

for (let i = 0; i < btnGenRandom.length; i++) {
  btnGenRandom[i].addEventListener('click', () => {
    const attr = btnGenRandom[i].dataset.key
    console.log(btnGenRandom[i].dataset.key)
    renderImg(attr)
  })
}

function renderImg(attr) {
  fetch(`${URL_RANDOM}?${attr}`)
    .then(response => {
      const fetchedImage = response.url
      console.log(fetchedImage)
      imgContainer.innerHTML = `
        <img src="${fetchedImage}" alt="${attr}">
      `
    })
    .catch(err => console.log(`Error: ${err}`))
}
