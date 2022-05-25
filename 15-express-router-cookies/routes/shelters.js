const express = require('express')
const router = express.Router()

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next()
    }
    res.send('You are not an admin.')
})

router.get('/',(req,res)=>{
    res.send('All Shelters')
})

router.post('/',(req,res)=>{
    res.send('Shelter Created')
})

router.get('/:id',(req,res)=>{
    res.send('Viewing on a particular shelter')
})

router.put('/:id/edit',(req,res)=>{
    res.send('Editing Shelter')
})

module.exports = router