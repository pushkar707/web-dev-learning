const input = document.getElementById('query')
input.addEventListener('change',()=>{
    getResults(input.value)
})

const getResults = async(query) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    const data = res.data
    data.forEach(element => {
        if (element.show.image != null){
            const {name,summary,image} = element.show
            console.log(name,summary,image.original);
        }
        else{
            const {name,summary} = element.show
            console.log(name,summary,'Image not available');
        }
        
    });
}