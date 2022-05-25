const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcrypt')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/auth2',)
.then(()=>{
    console.log('Connected To Database');
}).catch(()=>{
    console.log('Databse Not Connected');
})

const app = express()
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(session({secret: 'notgoodsecret'}))

const requirelogin = (req,res,next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async(req,res)=>{
    const {username,password} = req.body
    const user = new User({username,password})
    user.save()
    req.session.user_id = user._id
    res.redirect('/secret')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const foundUser = await User.findAndValidate(username,password)
    if (foundUser) {
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    } else {
        res.send('Invalid Login Details')
    }
})

app.post('/logout',(req,res)=>{
    req.session.user_id = null;
    res.redirect('/')
})

app.get('/secret',requirelogin,(req,res)=>{
    res.render('secret')
})

app.get('/topsecret',requirelogin,(req,res)=>{
    res.send('This is another secret')
})

app.listen(3000,()=>{
    console.log('Running on port 3000');
})