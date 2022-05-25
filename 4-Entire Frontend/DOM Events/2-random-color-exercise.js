const btn = document.getElementById('btn')
const h2 = document.querySelector('h2')

btn.addEventListener('click',() => {
    r = Math.floor((Math.random() * 255)+1)
    g = Math.floor((Math.random() * 255)+1)
    b = Math.floor((Math.random() * 255)+1)

    let color = `rgb(${r},${g},${b})`
    h2.innerText = color
    document.body.style.backgroundColor = color
})