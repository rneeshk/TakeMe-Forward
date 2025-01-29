function countOddDigit(n) {
    let cnt = 0;
    while(n != 0){
        let digit = n % 10;
        if(digit % 2 != 0){
            cnt++;
        }
        n = Math.floor(n / 10);
    }
    return cnt;
}
let ans = countOddDigit(15);
console.log(ans);