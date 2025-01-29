let str = "33";
console.log(str, typeof str)
console.log()

let valueInNumber = Number(str);
console.log(valueInNumber, typeof valueInNumber);
console.log();

let strWithNumber = "33abc";
console.log(strWithNumber, typeof strWithNumber)
console.log();

let strWithNumberConv = Number(strWithNumber);
console.log(strWithNumberConv, typeof strWithNumberConv)
console.log();

let value = null;
console.log(value, typeof value);
console.log();

let valueConv = Number(value);
console.log(valueConv, typeof valueConv);
console.log();

let valueUnd = undefined;
console.log(valueUnd, typeof valueUnd);
console.log();

let valueUndConv = Number(valueUnd);
console.log(valueUndConv, typeof valueUndConv);
console.log();

let bool = true;
console.log(bool, typeof bool);
console.log();

let boolConv = Number(bool);
console.log(boolConv, typeof boolConv);
console.log();

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

let isLoggedInContains = "raj";
let checkContainsStr = Boolean(isLoggedInContains);
console.log(checkContainsStr);

let isLoggedInEmpty = "";
let checkEmptyStr = Boolean(isLoggedInEmpty);
console.log(checkEmptyStr);

let someNumber = 33;
let numToStr = String(someNumber);
console.log(numToStr, typeof numToStr);

// *************************** Why String to number conversion is confusing *************************************
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
