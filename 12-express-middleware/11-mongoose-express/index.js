const Product = require('./models/product')

const random = Product.findById('weaSDSF322')
.then((data)=> console.log(data))
console.log(random);