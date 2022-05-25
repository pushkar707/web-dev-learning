const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')
const AppError = require('./AppError')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log('Connected To Database');
})
.catch(()=>{
    console.log('Could not connect to the database.');
})

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Welcome :)')
})

// Show All Products
app.get('/products',async(req,res)=>{
    const products = await Product.find()
    res.render('index',{products})

    
})


// See Paticular Products 
app.get('/products/:id',async(req,res,next)=>{
    try {
        const {id} = req.params
        const foundProduct = await Product.findById(id)
        res.render('show',{product: foundProduct})
    } catch (error) {
        // res.send(error.message)
        next(error)
    }
    
})

const categories = ['fruits','vegetables','dairy']

// Add Product
app.get('/product/add',(req,res)=>{
    // res.render('add',{categories})
    throw new AppError('Products not available',500)
})

app.post('/product/add',async(req,res)=>{
    const {name,price,category} = req.body
    const newProduct = await new Product({name,price,category})
    newProduct.save()
    res.redirect('/products')
})

// Update Product

app.get('/product/update/:id',async(req,res,next)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    // if (!product) {
    //     return next(new AppError('Product Not Found',404))
    // }
    res.render('update',{product,categories})
})

app.patch('/product/update/:id',async(req,res)=>{
    const {id} = req.params
    const {name,price,category} = req.body
    const foundProduct = await Product.findByIdAndUpdate(id, {name,price,category},{runValidators:true})
    res.redirect('/products')
})

// Delete Product

app.get('/product/:id/delete',async(req,res)=>{
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.delete('/product/:id/delete',async(req,res)=>{
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.use((err,req,res,next)=>{
    const {status=500,message='Something Went Wrong'} = err;
    // console.log(message,status);
    res.status(status).send(message)
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})