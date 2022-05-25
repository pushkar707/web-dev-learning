const tweetForm = document.querySelector('form')
const tweets = document.getElementById('tweets')

tweetForm.addEventListener('submit', function(e){
    e.preventDefault()// Prevents from relaoding page

    const username = tweetForm.elements.username
    const tweet = tweetForm.elements.tweet
    addTweet(username.value,tweet.value)
    username.value = ''
    tweet.value = ''
})

const addTweet = (username,tweet) => {
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    li.innerHTML = `<b>${username}</b> - ${tweet}`
    ul.append(li)
    tweets.append(ul)
}

// Input Event
// Fires as soon as value changes in input

const input = document.getElementById('input')
const inputText = document.getElementById('inputText')

input.addEventListener('input',() => {
    inputText.innerText = input.value
})


// Change event
// Fires when input is done and cursor is out of input


const change = document.getElementById('change')
const changeText = document.getElementById('changeText')

change.addEventListener('change',() => {
    changeText.innerText = change.value
})


// Event Delegation // Deleting tweet

// The only way to select elements which are created after web page is loaded is to target their parent element. This is called event delegation:)
// For Example: The tweets are created after page is already loaded, so there is no way to directly access them but we can access them through there parent element which was created while loading the page

tweets.addEventListener('click',(evt)=>{
    evt.target.remove();
})