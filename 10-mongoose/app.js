const mongoose = require('mongoose');
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to Database');
})
.catch(err => {
    console.log('Could not connect :(');
})

const movieSchema = new Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie',movieSchema)
// const IronMan = new Movie({
//     title: 'Iron Man',
//     year: 2008,
//     score: 8.1,
//     rating: '13+'
// })

Movie.findById("61f0391df699ad960bf50140")
.then((data)=>{
    console.log(data);
})
.catch(()=> {
    console.log('Could not find what you are looking for :(');
})
