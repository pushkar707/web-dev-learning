const btn2 = document.getElementById('btn2')
btn2.onclick = function () {
    console.log('The second Button is Clicked');
}

// 

// addEventListener

const btn3 = document.getElementById('btn3')
// btn3.addEventListener('click',() => alert('Done using addEventListener'))
btn3.addEventListener('dblclick',() => alert('Bro! Why are double clicking?'))
// Check MDN to see more events (mouseup, mousedown, mouseenter)

//

// Event Object

// This gives us a lot of info about the event fired
btn3.addEventListener('click', (evt) => console.log(evt));

// Event bubbling

const div = document.querySelector('#bubblingDiv')
const para = document.querySelector('#bubblingPara')
const btn = document.querySelector('#bubblingBtn')

// // If button is clicked so event will be fired for button as well as its parent elements with click event

//

// btn.addEventListener('click',() => alert('Event Fired By button'))
// para.addEventListener('click',() => alert('Event Fired By paragraph'))
// div.addEventListener('click',() => alert('Event Fired By div'))

// To make sure only event for button is fired and not its parent element is event bubbling
btn.addEventListener('click',(e) => {
    alert('Event Fired By button');
    e.stopPropagation()// Further events will not be fired
})
para.addEventListener('click',() => alert('Event Fired By paragraph'))
div.addEventListener('click',() => alert('Event Fired By div'))

// 

// Event Delegation