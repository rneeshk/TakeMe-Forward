// alert("Hello");  // one-time pop-up
let input = prompt("Enter a number:");
let number = Number(input);
if (isNaN(number)) {
    console.log("Invalid input, please enter a number.");
} else if (number % 5 === 0) {
    console.log("True");
} else {
    console.log("False");
}
