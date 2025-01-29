/*
    Create an aaray to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"

    a. Remove the first company from the array
    b. Remove Uber & Add Ola in its place
    c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);


let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let isIncreasing = true;

for (let i = 1; i < n; i++) {
    if (arr[i - 1] >= arr[i]) {
        console.log("False");
        isIncreasing = false;
        break;
    }
}

if (isIncreasing) {
    console.log("True");
}