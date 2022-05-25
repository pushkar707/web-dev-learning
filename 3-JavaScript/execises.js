// Loops
// 1st

// for (let index = 25; index >= 0; index-= 5) {
//     console.log(index);
    
// }

// 2nd

// array = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element.toUpperCase());
    
// }

// // Alternative Solution

// array.forEach(element => console.log(element.toUpperCase()));

// 3rd

// const numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach(num => console.log(num*num))

//

// FUNCTIONS

// 1st
// const printHeart = () => console.log('<3');
// printHeart()

// 2nd
// const rant = (msg) => {
//     for (let index = 0; index < 3; index++) {
//         console.log(msg);        
//     }
// }

// rant("Dick!!")

// 3rd

// const isSnakeEyes = (die1,die2) => {
//     if (die1 == 2 && die2 == 3){
//         console.log('Bang!!');
//     }
//     else{
//         console.log('Fuck Off!!');
//     }
// }

// isSnakeEyes(2,3)

// 4th

// function multiply(num1,num2) {
//     console.log(num1*num2);
// }

// multiply(3.5,6)

// 5th

// function nakedWeather(temperature) {
//     if( temperature > 39){
//         console.log('Get off your clothes.');
//     }
//     else{
//         console.log('well! still get off your clothes');
//     }
// }

// nakedWeather(41)

// 6th

// function lastOfArray(array) {
//     if (array.length !== 0){
//         console.log(array[array.length - 1]);
//     }else{
//         console.log('Dont you dare give me that. ');
//     }
// }

// lastOfArray([1,2])

// const lastOfArray2 = (array) => array.length != 0 ? console.log(array[array.length - 1]) : console.log(null);

// lastOfArray2([4,6,6])

// 7th

// function capitalise(str) {
//     console.log(str.charAt(0).toUpperCase() + str.slice(1))
// }

// capitalise('hey')

// 8th

// function sumArray(array) {
//     sum = 0
//     array.forEach(element => {
//         sum = sum + element
//     });
//     console.log(sum);
// }

// sumArray([2,4,5])

// 9th

// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// function returnDay(daynum) {
//     if (daynum >= 1 && daynum <= 7){
//         console.log(days[daynum-1]);
//     }
//     else{
//         console.log('BSDK! Hafte m 7 din hote h.');
//     }
// }

// returnDay(-1)

// 10th

// function square(num) {console.log(num**2);}

//

//  Random forEach and forOf loop

//

// let movies = [
//     {
//         'name' : "Dune",
//         'score': 95
//     },
//     {
//         'name': "Spiderman NWH",
//         'score' : 90
//     },
//     {
//         'name' : "IDK",
//         'score' : 76
//     }
// ]

// movies.forEach(element => {
//     return `${element.name} - ${element.score}`;
// });

// for (const movie of movies) {
//     console.log(`${movie.name} - ${movie.score}`);
// }

//

// Random Map

// let texts = ['efcdx', 'ewsxz' , 'ewsx' , 'sd']

// let upperTexts =  texts.map( str => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// })

// console.log(upperTexts);

// 

// let movies = [
//     {
//         'name' : "Dune",
//         'score': 95
//     },
//     {
//         'name': "Spiderman NWH",
//         'score' : 90
//     },
//     {
//         'name' : "IDK",
//         'score' : 76
//     }
// ]

// let goodMovies = movies.filter(movie => movie.score > 80)

// console.log(goodMovies);


// Some/Every Exercise

// const nums = [2,4,6,52,54]

// console.log(nums.every((num) => (num %2 == 0)));
// console.log(nums.some((num) => (num %2 == 0)));

// const evenChecker = arr => (arr.every(num => (num%2 == 0)))
// console.log(evenChecker(nums));

// Reduce Method

nums = [6,4,5,5,66,5,54,60,44]

const LDO3 = nums.reduce((LDO3 , num) => {
    if (num %3 == 0 && num > LDO3){
        return num
    }else{
        return LDO3
    }
})

console.log(LDO3);


