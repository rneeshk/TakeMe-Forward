function reverseNumber(n) {
    let ans = 0;
    while(n != 0){
        let digit = n % 10;
        ans = ans * 10 + digit;
        n = Math.floor(n / 10);
    }
    return ans;
}
let result = reverseNumber(123);
console.log(result)

// With String
function reverseNumber2(n){
    return Math.abs(n).toString().split('').reverse().join('');
}

let result2 = reverseNumber2(456);
console.log(result2);