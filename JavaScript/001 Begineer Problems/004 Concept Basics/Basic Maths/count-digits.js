function countDigit(n){
    let cnt = 0;
    if(n === 0) return 1;
    while(n != 0){
        cnt++;
        n = Math.floor(n / 10);
    }
    return cnt;
}
let ans = countDigit(234);
console.log(ans);

// Better approach with String
function countDigitWithString(n){
    return Math.abs(n).toString().length;
}
let ans1 = countDigitWithString(32145);
console.log(ans1);