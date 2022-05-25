const express = require( 'express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/',(req,res)=>{
    // console.log(req.cookies);
    const {name='no-name'} = req.cookies;
    res.send(`This is homepage for ${name}`);
})

app.get('/cookie',(req,res)=>{
    res.cookie('name', 'Pushkar');
    res.send('A cookie is saved for you :)')
})

app.listen('3000',()=>{
    console.log('Running On Port 3000');
})