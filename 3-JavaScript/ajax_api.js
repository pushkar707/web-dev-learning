const getCryptoPrice = async() => {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log(res.data.ticker.price);
}

const getJokes = async() =>{
    const config = { headers: {Accept: 'application/json'} }
    const res = await axios.get(`https://icanhazdadjoke.com/`, config)
    return res.data.joke
}

const button = document.querySelector('button')
const p = document.getElementById('joke')

button.addEventListener('click',async()=>{
    let joke = await getJokes()
    p.innerText = joke
})