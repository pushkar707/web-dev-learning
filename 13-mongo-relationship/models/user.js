const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationships')
.then(()=>{
    console.log('Connected To Database');
}).catch((e)=>{
    console.log('Could Not Connect To Database');
    // console.log(e);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address:[
        {   
            street: String,     
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async() => {
    const user = new User({
        first: 'Pushkar',
        last: 'Bansal'
    })
    user.address.push({
        street: 'U-98',
        city: 'narela',
        state: 'Delhi',
        country: 'India'
    })
    user.address.push({
        street: 'U-99',
        city: 'narela',
        state: 'Delhi',
        country: 'India'
    })

    const res = await user.save()
    console.log(res);
}

makeUser()