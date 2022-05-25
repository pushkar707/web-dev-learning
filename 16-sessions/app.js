const express = require('express')
const session = require('express-session')

const app = express()

const sessionOptions = {secret: 'badsecret',resave:false,saveUninitialized:false}
app.use(session(sessionOptions))

app.get('/',(req,res)=>{
    res.send('HOMEPAGE!!')
})

app.get('/viewcount',(req,res)=>{
    if (req.session.count) {
        req.session.count +=1
    }else{
        req.session.count = 1
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.listen(3000,()=>{
    console.log('Listening on Port 3000');
})