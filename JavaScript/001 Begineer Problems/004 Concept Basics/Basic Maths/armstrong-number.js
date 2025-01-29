function countNum(n){
    if(n == 0) return 1;
    let cnt = 0;
    while(n != 0){
        cnt++;
        n = Math.floor(n / 10);
    }
    return cnt;
}
function isArmstrong(n) {
    let temp = n;
    let i = countNum(temp);
    if(temp == 0 || temp > 0 && temp < 10) return true;
    let ans = 0;
    while(temp != 0){
        let digit = temp % 10;
        ans += Math.pow(digit, i);
        temp = Math.floor(temp / 10);
    }
    return ans == n;
}
console.log(isArmstrong(153));