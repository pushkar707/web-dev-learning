const link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const div = document.querySelector('div')
console.log(div);
for (let index = 1; index < 899; index+=10) {
    const imageSpan = document.createElement('span')
    const span = document.createElement('span')
    const img = document.createElement('img')
    imageSpan.classList.add('flex-column')
    span.innerText = `${index}`
    img.src = `${link}${index}.png`
    imageSpan.append(img,span)
    div.append(imageSpan)
}