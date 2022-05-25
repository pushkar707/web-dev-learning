const btns = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')

const colors = () => {
    r = Math.floor((Math.random() * 255)+1)
    g = Math.floor((Math.random() * 255)+1)
    b = Math.floor((Math.random() * 255)+1)
    let color = `rgb(${r},${g},${b})`
    return color
}

// Without This Keyword

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.style.backgroundColor = colors()
//         btn.style.color = colors()
//     })    
// });

// h1s.forEach(h1 => {
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = colors()
//         h1.style.color = colors()
//     })    
// });

// Using This Keyword

// This keyword doesn't work in arrow function
function changer() {
    this.style.backgroundColor = colors()
    this.style.color = colors()
}

btns.forEach(btn => {
    btn.addEventListener('click', changer);
})

h1s.forEach(h1 => {
    h1.addEventListener('click', changer)
})    