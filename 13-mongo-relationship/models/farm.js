const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationships')
.then(()=>{
    console.log('Connected To Database');
}).catch((e)=>{
    console.log('Could Not Connect To Database');
    // console.log(e);
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring','Summer','Fall','Winter']
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products:[{type: mongoose.Schema.Types.ObjectId,ref: 'Product'}]
})

const Product = mongoose.model('Product',productSchema)
const Farm = mongoose.model('Farm',farmSchema);

// product.insertMany([
//     {name:'Grains',price:40,season:'Summer'},
//     {name:'Tamato',price:25,season:'Winter'},
//     {name:'Patato',price:50,season:'Spring'}
// ])

const makeFarm = async() => {
    const farm = new Farm({name: 'Full Belly Farms', city: 'Narela,Delhi'})
    const tamato = await Product.findOne({name:'Tamato'});
    farm.products.push(tamato)
    await farm.save()
    console.log(farm);
}

// makeFarm()

const addProduct = async() => {
    const farm = await Farm.findOne({name:'Full Belly Farms'})
    const grains = await Product.findOne({name:'Grains'});
    farm.products.push(grains)
    await farm.save()
    console.log(farm);
}

// addProduct()

Farm.findOne({name:'Full Belly Farms'})
.populate('products')
.then((data)=>{
    console.log(data);
})