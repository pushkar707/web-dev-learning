const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine','ejs')

let comments = [
    {
        "id":uuid(),
        "comment":"this is random comment",
        "writer": "Ramesh"
    },
    {
        "id":uuid(),
        "comment":"Hi, Mujhe Bawasir h",
        "writer": "Priyanshu"
    },
    {
        "id":uuid(),
        "comment":"Bawasir ek aam samasya h",
        "writer": "Pushkar"
    }
]

// Not realted to comments
app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/tacos',(req,res)=>{
    const {fname, lname, age} = req.body
    res.send(`You are ${fname} ${lname} and you are ${age} years old `)
})

// Display all comments

app.get('/comments',(req,res)=>{
    res.render('comments', {comments})
})


// Add New Comment
app.get('/add',(req,res)=>{
    res.render('add')
})

app.post('/add',(req,res)=>{
    const {writer,comment} = req.body
    comments.push({id:uuid(),writer,comment})
    res.redirect('/comments')
})

// Display one particular comment
app.get('/comment/:id',(req,res)=>{
    const {id} = req.params
    const comment = comments.find(c=> c.id === id)
    res.render('comment',{comment})
})

// Update comment

app.get('/comment/:id/edit',(req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('edit',{comment})
})

app.patch('/comment/:id',(req,res)=>{
    const {id} = req.params
    const {newComment} = req.body
    const comment = comments.find(c => c.id === id)
    comment.comment = newComment
    res.redirect('/comments')
})

// Delete Comment
app.delete('/comment/:id',(req,res)=>{
    const {id} = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})