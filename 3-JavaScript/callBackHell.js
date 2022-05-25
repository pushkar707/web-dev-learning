const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() *4500) +500
    setTimeout(() => {
        if (delay < 4000){
            success(`Here is your fake data from ${url}`);
        }
        else{
            failure(`Oops! Connection Timmed Out in ${delay}`)
        }
    }, delay);
}

fakeRequestCallBack('books.com' , () =>{
    console.log('It worked first time');
    fakeRequestCallBack('books.com/page1' , () =>{
        console.log('It worked 2nd Time.');
        fakeRequestCallBack('books.com/page2',()=> {
            console.log('Bro! Go to a casino or something');
        }, ()=>{
            console.log('Thats as far as you go.');
        })
    }, () => {
        console.log('Better Luck Next Time');
    })
}, (err) => {
    console.log('Your luck is really bad :(', err);
} )