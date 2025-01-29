function largestDigit(n) {
    if(n >= 0 && n < 9) return n;
    let temp = n;
    let ans = 0;
    while(temp != 0){
        let digit = temp % 10;
        if(digit > ans){
            ans = digit;
        }
        temp = Math.floor(temp / 10);
    }
    return ans;
}
console.log(largestDigit(25));