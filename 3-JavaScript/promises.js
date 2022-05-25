const fakeRequestPromises = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * 4500) +500
        setTimeout(() => {
            if (delay < 4000){
                resolve(`Here is your fake data from ${url}`);
            }
            else{
                reject('Connection Timed Out :(');
            }
        }, delay);
    })
}

// Using promises like callbacks 


// fakeRequestPromises('dff')
// .then((succ) => {
//     console.log('worked first time');
//     console.log(succ);
//     fakeRequestPromises('df')
//     .then(() => {
//         console.log('worked second time');
//     })
//     .catch(()=> {
//         console.log('Didnt work thi time');
//     })
// })
// .catch((err)=> {
//     console.log("didn't worked");
//     console.log(err);
// })



// Real use of promises

// fakeRequestPromises('books.com')
// .then(() => {
//     console.log('Worked first time');
//     return fakeRequestPromises("cheats.com")
// })
// .then(()=>{
//     console.log('it worked again! OH YEAH!!');
//     return fakeRequestPromises('hints.com')
// })
// .then(()=>{
//     console.log('It worked again!!!!!!!');
// })
// .catch(()=>{
//     console.log("Today's not your day");
// })

// Async and Await Keyword

const asyncFunction = async() => {
    throw 'Fuck Man!!'
    return 'Learning async'
}

asyncFunction()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})