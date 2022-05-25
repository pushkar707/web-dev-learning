const Product = require('./models/product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log('Connected To Database');
})
.catch(()=>{
    console.log('Could not connect to the database.');
})

const products = [{name:'milk',price:65,category:'dairy'},
{name:"Patato",price:50,category:'vegetables'},
{name:'Paneer',price:240,category:'dairy'}]

Product.insertMany(products)
.then(res => console.log(res))
.catch(()=> console.log('Did not work.'))