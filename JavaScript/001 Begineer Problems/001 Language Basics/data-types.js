/*
    Primitive data-type (7) - Number, String, Boolean, Undefined, Null, BigInt, Symbol
*/

// Number
let age = 24;   // Integer
let price = 25.50;  // Float
let morePrecise = 3.1457542;    // double
console.log(age, typeof age);


// String - sequence of characters.
let fullName = "Rajneesh";
console.log(fullName, typeof fullName);

// Boolean - represents one of two values: true or false.
let isFollow = true;
console.log(isFollow, typeof isFollow)

// undefined - variable or function that has not been assigned a value is of type undefined.
let x;
console.log(x);
console.log(typeof x);

// null -  represents the intentional absence of any object value.

let a = null;
console.log(a, typeof a);

// BigInt
let bigNumber = BigInt("123456789");
console.log(bigNumber, typeof bigNumber);

// Symbol
let sym = Symbol("I am a nice symbol");
/*
    Non-Primitive data-type - Object
*/

// object - collection of properties, and a property is an association between a name (or key) and a value.

const student = {
    //keys         values
    fullName: "Rajneesh Kumar",
    age: 23,
    cgpa: 6.6,
    isPass: true
}
console.log(student);
console.log(typeof student)
console.log(student.fullName)
console.log(student["cgpa"]);

student.age = student.age + 1;
console.log(student);


// student = 123;
// console.log(student);

student = {
    greet: "Hello"
}
console.log(student);

