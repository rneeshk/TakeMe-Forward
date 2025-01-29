/*
    Loops are used to execute a piece of code again and again

    1. for: Used when the number of iterations is known beforehand.

    for(initialization; condition; increment/decrement){

        // some code here

    }

    2. while loop: Used when the number of iterations is unknown and depends on a condition.
    let i = 1;  initialization
    while(condition){
    
        some logic inside

        increment/decrement
    }

    3. do-while - run atleast one time (entry control loop)

    let j = 1;  // initialization
    do{
        some logic here

        increment/decrement
    } while(condition);

    An exit-controlled loop evaluates its condition after executing the loop body, ensuring that the loop runs at least once. (do while)
    An entry-controlled loop checks the condition before executing the loop body, ensuring the loop runs only if the condition is true. (for, while)

    4. for-of and for-in: help to iterate on some special data type

    for of - String and Array
    for in - Object

*/

// for
for(let i = 1; i <= 5; i++){
    console.log("Hello World");
}
console.log("for loop ended");

// while
let i = 1;
while(i <= 5){
    console.log("i =", i);
    i++;
}

// do while
let j= 20;
do{
    console.log("j =", j);
    j++;
}while(j <= 10);

// for of
// String - for of
let str = "Rajneesh";
for(const char of str){
    console.log(char)
}
// Array - for of
let arr = [1,5,7,8,9,4];
for(const el of arr){
    console.log(el);
}

// Object - for in
const student = {
    name: "Rajneesh Kumar",
    age: 23,
    cgpa: 6.6,
    isPass: true
};
// return keys
for(const key in student){
    console.log(key);
}

// return both key and values
for(const key in student){
    console.log(key, student[key]);
}
// another way to return both key and values
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}