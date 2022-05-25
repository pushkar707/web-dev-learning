const express = require('express');
const shelterRoutes = require('./routes/shelters')

const app = express();
app.use('/shelters',shelterRoutes)

app.get('/noadmin',(req,res)=>{
    res.send('You do not need to be admin to come here.')
})

app.listen('3000',()=>{
    console.log('Listening On Port 3000');
})
