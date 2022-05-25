const scorekeeper = document.getElementById('score')
const select = document.querySelector('select')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const reset = document.getElementById('reset')

let totalscore = parseInt(select.value)
select.addEventListener('click',() => {
    totalscore = select.value
})

let currentscore = scorekeeper.innerText
let player1Score = parseInt(currentscore[0])
let player2Score = parseInt(currentscore[currentscore.length - 1])

player1.addEventListener('click',()=>{
    if (player1Score == totalscore || player2Score == totalscore) {
        player1.style.opacity = 0.8
        player2.style.opacity = 0.8
    }

    if (player1Score < totalscore && player2Score < totalscore) {
        player1Score++
        scorekeeper.innerHTML = `${player1Score} to ${player2Score}`
    }

    if (player1Score > player2Score) {
        scorekeeper.innerHTML = `<span style="color:green;">${player1Score}</span> to <span style="color:red;">${player2Score}</span>`
    }
    else{
        scorekeeper.innerHTML = `<span style="color:red;">${player1Score}</span> to <span style="color:green;">${player2Score}</span>`
    }
})

player2.addEventListener('click',()=>{
    if (player1Score == totalscore || player2Score == totalscore) {
        player1.style.opacity = 0.8
        player2.style.opacity = 0.8
    }

    if (player1Score < totalscore && player2Score < totalscore) {
        player2Score++
        scorekeeper.innerHTML = `${player1Score} to ${player2Score}`
    }

    if (player1Score > player2Score) {
        scorekeeper.innerHTML = `<span style="color:green;">${player1Score}</span> to <span style="color:red;">${player2Score}</span>`
    }
    else{
        scorekeeper.innerHTML = `<span style="color:red;">${player1Score}</span> to <span style="color:green;">${player2Score}</span>`
    }
})

reset.addEventListener('click',() => {
    player1Score = 0
    player2Score = 0
    scorekeeper.innerHTML = `${player1Score} to ${player2Score}`
    player1.style.opacity = 1
    player2.style.opacity = 1
})