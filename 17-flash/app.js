const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Product = require('./models/product')
const Farm = require('./models/farm')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log('Connected To Database');
})
.catch(()=>{
    console.log('Could not connect to the database.');
})

const app = express()

const sessionOptions = {secret:'GOODSECRET',resave:false,saveUninitialized:false}
app.use(session(sessionOptions))
app.use(flash())

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine','ejs')

// Flash Middleware
app.use((req,res,next)=>{
    res.locals.messages = req.flash('success');
    next()
})

app.get('/',(req,res)=>{
    res.send('Welcome :)')
})

// Farm Routes

//

app.get('/farms',async(req,res)=> {
    const farms = await Farm.find()
    res.render('allfarms',{farms})
})

app.get('/farms/add',(req,res)=>{
    res.render('addFarm')
})

app.post('/farms/add',async(req,res)=>{
    const farm = await new Farm(req.body)
    await farm.save()
    req.flash('success','Successfully Created a Farm.')
    res.redirect('/farms')
})

app.get('/farm/:id',async(req,res)=> {
    const {id} = req.params;
    const farm = await Farm.findById(id).populate('products');
    res.render('showFarm',{farm});
})

const categories = ['fruits','vegetables','dairy']

app.get('/farm/:id/product/add',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id)
    res.render('add',{farm,categories})
})

app.post('/farm/:id/product/add',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id)
    const product = new Product(req.body)
    farm.products.push(product)
    product.farm = farm
    farm.save(); product.save();
    res.redirect(`/farm/${id}`)
})

app.delete('/farm/:id/delete',async(req,res)=>{
    const {id} = req.params
    await Farm.findByIdAndDelete(id)
    res.redirect('/farms')
})

// Product Routes

//

// Show All Products
app.get('/products',async(req,res)=>{
    const products = await Product.find()
    res.render('index',{products})
})


// See Paticular Products 
app.get('/products/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const foundProduct = await Product.findById(id).populate('farm','name')
        console.log(foundProduct)
        res.render('show',{product: foundProduct})
    } catch (error) {
        res.send(error.message)
    }
    
})

// Add Product
app.get('/product/add',(req,res)=>{
    res.render('add',{categories})
})

app.post('/product/add',async(req,res)=>{
    const {name,price,category} = req.body
    const newProduct = await new Product({name,price,category})
    newProduct.save()
    res.redirect('/products')
})

// Update Product

app.get('/product/update/:id',async(req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
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

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})