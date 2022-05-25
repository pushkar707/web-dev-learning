const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to the home page.')
})

app.get('/user/:input',(req,res)=>{
    const {input} = req.params
    res.send(`Here are results for ${input}`)
})

app.get('/query',(req,res)=>{
    const {q} = req.query
    if (q) {
        res.send(`Here are results for ${q}`)
    } else {
        res.send('No value assigned to q :)')
    }
    
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
    
})