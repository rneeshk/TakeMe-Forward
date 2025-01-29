/*
    Higher-order functions in JavaScript are functions that either
    take other functions as arguments, return functions, or both.

    Array Method
    map(), filter(), reduce(), forEach(), find(), findIndex(), some(), every(), sort()
    
    Utility HOF
    setTimeout(), setInterval, Promise.catch(), Promise.finally(), 
*/

// Arrays HOF
// map() 
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]


// filter
const numbers2 = [1, 2, 3, 4];
const even = numbers2.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce() - Accumulates array elements into a single value based on the callback logic.
const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// forEach()
let arr = [1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
})

// find()
let arr2 = [1,2,3,4,5];
arr2.forEach((val) => {
    console.log(val);
})

// findIndex()
const numbers4 = [1, 2, 3, 4];
const index = numbers4.findIndex(num => num > 2);
console.log(index); // 2

// some() - Checks if at least one element satisfies a condition in the callback, returning true or false.
const numbers5 = [1, 2, 3];
const hasEven = numbers5.some(num => num % 2 === 0);
console.log(hasEven); // true

// every()
const numbers6 = [2, 4, 6];
const allEven = numbers6.every(num => num % 2 === 0);
console.log(allEven); // true


// sort()
let array = [5,9,7,1,3,5,10];
array.sort();   // alphabetically
console.log("Sort alphabetically: ", array);
console.log("Original Array: ", array);
array.sort((a, b) => a - b); // Ascending
console.log("Sort Ascending: ", array);
array.sort((a, b) => b - a); // Descending
console.log("Sort Descending: ", array);


// setTimeout - Executes a function after a specified delay.

console.log("Hello 1")
setTimeout(() => {
    console.log("Hello 2");
}, 3000);
console.log("Hello 3")

// setInterval
let count = 1;

const intervalId = setInterval(() => {
  console.log(count);

  if (count === 10) {
    clearInterval(intervalId);
    console.log("Counter stopped!");
  }

  count++;
}, 1000);