function allEvens(arr) {
  let newArray = arr.every(num => num % 2 === 0);
  return newArray;
}

console.log(allEvens([6,8,4,,6]))

// // Using arrow function
// const allEvens = arr => {
//   let newArray = arr.every(num => num % 2 === 0);
//   return newArray;
// }

// // Using implicit return
// const allEvens = arr => arr.every(num => num % 2 === 0);

// Spread 

boys = ['Pushkar', 'Rishi', 'Naman']
girls = ['Sanya', 'honey']

students = [...boys, ...girls, 'hello']
console.log(students);