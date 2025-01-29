/*
    Print all even number from 0 to 100
*/
let ans = "";
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0) ans += i + " ";
}
console.log(ans);

/*
    Print all odd number from 0 to 100
*/
let ans1 = "";
for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0) ans1 += i + " ";
}
console.log(ans1);