const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/relationships')
.then(()=>{
    console.log('Connected To Database');
}).catch((e)=>{
    console.log('Could Not Connect To Database');
})

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

const makeTweets = async() => {
    const user = new User({username:'pushkar707',age:17})
    const tweet = new Tweet({text:'This is my first tweet.',likes:10})
    tweet.user = user
    await user.save()
    await tweet.save()
}

// makeTweets()

const addTweet = async() => {
    const user = await User.findOne({username: 'pushkar707'})
    const tweet = new Tweet({text:'This is my second tweet and I know U dont care.',likes:100})
    tweet.user = user
    tweet.save()
    // console.log();
}

// addTweet()

const findTweets = async() => {
    const t = await Tweet.find().populate('user','username')
    console.log(t);
}

findTweets()