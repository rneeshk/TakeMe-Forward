/*
    Arrays: An array in JavaScript is a data structure used to store multiple values in a single variable.
    It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0 to length - 1

    Arrays are mutable in nature, e.g., change the element value;
*/
// Why not object ?

// creation of arrays
let a = [1,2,3,4,5];
//array constructor
let brr = new Array(1,2,3,4,5); 
let marks = [50,60,70,80,90];
let heroes = ["Ironman", "Hulk", "Thor", "Batman", "Antman", "Dr. Strange"];
let info = ["Garu", 23, "Delhi"]

console.log(marks.length)   // length of marks
console.log(heroes.length)   // length of heroes
console.log(info.length)   // length of info

console.log(typeof marks)   // length of marks
console.log(typeof heroes)   // length of heroes
console.log(typeof info)   // length of info

// Array Indexed
// arr = [10,20,30,40,50]
//         0  1  2  3  4

// first element
console.log(marks[0])
// second element
console.log(marks[1]);
//last index
console.log(marks[marks.length - 1]);
// index not exist - undefined
console.log(marks[6]);

// change the value of array elements
marks[5] = 100;
console.log(marks)

// Looping Over Arrays

// Using Traditional Loop
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// for of 
for(let el of heroes){
    console.log(el)
}

/*
    Arrays Method: push, pop, shift, unshift, concat, forEach, map, filter, find, sort, toString, at
*/
// push : insert an element at the end of the array, change the original array
let array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
console.log("Original Array: ", array)

// pop() : remove last element in the array, change the original array
let deletedElement = array.pop();
console.log("Delete Last Element in array: ", array);
console.log("Delete Element: ", deletedElement);

// shift() : Remove the first Element in array, change the original array
array.shift();
console.log("Remove the first Element in array: ", array);

// unshift() : Add one or more element in starting in array, change the original array
array.unshift(1 , 5);
console.log("Add element in starting in array: ", array);

// concat() : Merge two array in one, return new array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log("Merge two array in one: ", arr3)

// at()
console.log(array.at(2));

// toString() - converts an array to a string with comma separated, return new array
let newArray = array.toString();
console.log(newArray);

// join()
let joinArray = array.join("+");
console.log(joinArray)

// split()
let newJoinArray = array.join(", ")
let splitArray = newJoinArray.split(", ");
console.log(splitArray);

// forEach() : Return the element and its index of an array
array.forEach(function(index, item){
    console.log()
    console.log(index, item);
})

// map() - creates a new array from calling a function for every array element.
// does not execute the function for empty elements, and does not change the original array
console.log("Original Array: ", array);
let newArr = array.map(function(item){
    if(item % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
})
console.log("After map: ", newArr);

/* 
    filter() : creates a new array filled with elements that pass a condition,
               does not execute the function for empty elements,
               does not change the original array.
*/
console.log("Original Array: ", array);

let newArr1 = array.filter(function(item){
    if(item > 3){
        return item;
    }
})
console.log("After filter: ", newArr1);
/* 
        find() - returns the value of the first element, executes a function for each array element,
        returns undefined if no elements are found, does not execute the function for empty elements,
        does not change the original array.
*/
console.log("Original Array: ", array);
let newArr2 = array.find(element => element > 3);
console.log("After filter: ", newArr2);

// sort()

array.sort();   // alphabetically
console.log("Sort alphabetically: ", array);
console.log("Original Array: ", array);
array.sort((a, b) => a - b); // Ascending
console.log("Sort Ascending: ", array);
array.sort((a, b) => b - a); // Descending
console.log("Sort Descending: ", array);

// find the max element in array
let arr = [8, 7, 5, 9, 1, 3];
let ans = Math.max(...arr);
console.log(ans);

// slice : returns selected elements in an array, as a new array. (start, end)
console.log(heroes.slice(1,3));

// splice : adds and/or removes array elements, change the original array.
// To add - splice(startIdx, delCount, newEl1.....)
// To remove - splice(startIdx, delCount)
let count = [1,2,3,4,5,6,7,8,9,10];
let deleteCount = count.splice(2,3,100,101,102);
console.log(count);
console.log(deleteCount)

// every () - executes a function for each array element, return true/false, not execute on empty elements, not change the original array
const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}
console.log(ages.every(checkAge));

// entries - returns an Iterator object with the key/value pairs, does not change the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const list = fruits.entries();
let text = "";
for (let x of list) {
  text += x + "\n";
}
console.log(text)

// keys - returns an Iterator object with the key/value pairs, does not change the original array.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const list1 = fruits1.entries();
let text1 = "";
for (let x of list1) {
  text1 += x + "\n";
}
console.log(text1)