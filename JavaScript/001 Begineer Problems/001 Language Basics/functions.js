/*
    Functions: 
    
    Function are Set of code which perform something for you.
    Function are used to modularise code
    Function are used to increase readaility
    Function are used to use same code multiple time

    parameter and argument
*/

// function which does not return anything
    function sayHello(){
        const name = "Garu"
        console.log(`Hello ${name}`);
    }
    sayHello();

// function which return something
function sum(){
    return 10 + 5;
}
console.log(sum());

// parameterised function
function addTwoNum(a, b){
    console.log(a + b);
    // return a + b;
}
addTwoNum(10,50);

// arrow function

const hello = () => console.log("Hello World");
hello();

const add = (a, b) => a + b;
console.log(add(5,7));

const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));


// anonymous function
const greet = function (){
    console.log("Hello World")
}
greet();


let countVowels = (str) =>{
    let count = 0;
    str = str.toLowerCase();
    for(let char of str){
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello"));

// forEach loop in array

// optional parameter (value, index, array itself)
let arr = [1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
})
let cities = ["Pune", "Delhi", "Bangalore"];
cities.forEach((city, index) => {
    console.log(city, index, cities);
})