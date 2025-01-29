// Arithmetic Operator (+,-,*,/,%,**,++,--) and Unary Operator
console.log("Arithmetic Operator (+,-,*,/,%,**,++,--)");
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

// Increment/Decrement

// pre-increment
console.log("++Pre-increment");
let a = 5;
++a;
console.log(a);
// Post-Increment 
console.log("Post-increment++");
let b = 10;
b++;
console.log(b);

// post-decrement
console.log("--Pre-Decrement");
let c = 5;
--c;
console.log(c);

// Post-Increment 
console.log("Post-Decrement --");
let d = 10;
d--;
console.log(d);

// Unary Operator (+ , -)
console.log("Unary Operator (+,-)");
let z = -5;
console.log(-z); // -(5)
//  Comparison Operators (==, ===, ≠, ≠=, >, <, ≥, ≤) ---------- Return the Boolean Value

console.log("Comparison Operators (==, ===, ≠, ≠=, >, <, ≥, ≤)");
console.log(10 == 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 !== 10);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);

// Logical Operator: These operators combine two or more conditions (&&, ||, !) ----------- Return the Boolean Value
console.log("Logical Operator (&&, ||, !)");
let age = 24;
let nationality = "Indian";
if(age >= 18 && nationality === "Indian" || typeof age === number){
    console.log("True")
}else{
    console.log("False")
}


// typeof operator
console.log(typeof "Garima");
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof 123);

// ternary operator
// condition ? expressionTrue : expressionFalse
let num = 14;
let ans = (num % 2 === 0) ? "Even" : "Odd";
console.log(ans);