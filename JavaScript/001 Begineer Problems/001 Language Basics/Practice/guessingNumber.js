let gameNum = 25;

let userNum = Number(prompt("Guess the game number :"));
while (gameNum != userNum) {
    userNum = prompt("You entered wrong number. Guess again")
}
console.log("Congratulations, you entered the right number");
