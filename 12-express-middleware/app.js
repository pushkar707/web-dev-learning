const express = require('express')
const morgan = require('morgan')
const AppError = require('./appError')

const app = express()
app.use(morgan('tiny'))

app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
})

const verifyPassword = (req,res,next)=>{
    const {password} = req.query
    // console.log(password);
    if (password == 'helloo'){
        next();
    }else{
        throw new AppError('Please Enter correct password',401)
    }    
}

// app.use((req,res,next)=>{
//     console.log('This is first middleware');
//     next()
//     console.log('This is middleware after next()');
// })

// app.use((req,res,next)=>{
//     console.log('This is second middleware');
//     next()
// })

app.get('/',(req,res)=>{
    console.log('Running / route')
    res.send('Hello World')
})

app.get('/error',(req,res)=>{
    beans.get()
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send('Logged in successfully')
})

app.get('/admin',(req,res)=>{
    throw new AppError('You are not the admin',403)
})

app.use((req,res)=>{
    res.status(404).send('Page not found :(')
})

app.use((err,req,res,next)=>{
    console.log('The is an error:(');
    res.send(err.message)
})

app.listen(3000,()=>{
    console.log('Running on port 3000.');
})