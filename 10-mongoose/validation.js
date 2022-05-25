const mongoose = require('mongoose');
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/showroom', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to Database');
})
.catch(err => {
    console.log('Could not connect :(');
})

const productSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    sale:{
        type:Boolean,
        default:false
    }
})

productSchema.methods.greet = function(){
    console.log(`Hello from ${this.name}, you can have me for just ${this.price} rupees.`);
}

productSchema.methods.toogleOnSale = function(discount){
    this.sale = !this.sale
    if (this.sale){
        this.price = this.price - (discount/100)*this.price
    }
    else{
        this.price = this.price + (discount/100-discount)*this.price
    }    
    return this.save()
}


const Product = mongoose.model('Products',productSchema)
// const bullet = new Product({name:"Bullet Bike", price:150000,description:"fatfatiya"})
// bullet.save()

Product.findOne({name:"Bullet Bike"})
.then(async (data)=>{
    console.log(data);
    data.greet()
    await data.toogleOnSale(10)
    console.log(data);
    data.greet()
    await data.toogleOnSale(10)
    console.log(data);
    data.greet()
})