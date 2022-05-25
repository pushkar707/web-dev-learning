const express = require('express')
const app = express()
const reddit_data = require('./data.json')

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random',{num})
})

app.get('/r/:reddit',(req,res)=>{
    const {reddit} = req.params
    // console.log(reddit_data);
    let data = reddit_data[reddit]
    if (data) {
        res.render('home-reddit',{reddit,data})
    } else {
        res.send(`Reddit not found for ${reddit} `)
    }
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})