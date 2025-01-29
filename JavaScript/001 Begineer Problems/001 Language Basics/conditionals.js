// The if statement executes a block of code if a specified condition is true.

let name = "Garima";
let age = 24;
let isStudent = true;

if(isGucchu){
    console.log(name,"is Student");
}

let result = isGucchu ? "Good Girl" : "GGGGG Girl";
console.log(result);

let temperature = 30;
if(temperature > 25){
    console.log("Hot Day");
}

// 3. Write an if statement to check if a string is not empty.

let str = "";
if(str.length > 0){
    console.log("Contains Somethings");
}


// if-else : statement allows you to execute one block of code if the condition is true and another if it's false.

if(age >= 18){
    console.log("Adult");
}else{
    console.log("Teen");
}

// // if-else-if
let marks = 85;
if(grade >= 90){
    console.log("A");
}else if(marks >= 80){
    console.log("B");
}else{
    console.log("D");
}

// Switch Case
// statement is used to perform different actions based on different conditions.

let day = "Sunday";
switch(day){
    case "Monday":
        console.log("1");
        break;
    case "Tuesday":
        console.log("2");
        break;
    case "Wednesday":
        console.log("3");
        break;
    default:
        console.log("Invalid")
}

// return
function square(num){
    if(num <= 0){
        console.log("Number should be greater than 0");
        return;
    }
    return num * num;
}
console.log(square(0));
