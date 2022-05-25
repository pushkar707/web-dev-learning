const input = document.getElementById('input')

// Whenever any key is pressed within input the event is fired
input.addEventListener('keydown',() => console.log('Key Pressed in input'))
input.addEventListener('keyup',() => console.log('Key Unpressed in input'))

// Fire an event by just randomly pressing the key

window.addEventListener('keydown',()=> console.log('Key pressed'))

// Knowing which key was pressed

input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);
})