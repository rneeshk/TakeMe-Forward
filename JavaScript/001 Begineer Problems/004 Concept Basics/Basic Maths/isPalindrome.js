function isPalindrome(n) {
    if(n < 0) return false;
    if(n >= 0 && n < 9) return true;
    let temp = n;
    let ans = 0;
    while(temp != 0){
        let digit = temp % 10;
        ans = ans * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return ans == n;
}

console.log(isPalindrome(123))
