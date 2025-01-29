function isPrime(n) {
    let temp = n;
    if(temp < 2) return false;
    if(temp == 2) return true;
    if (temp % 2 == 0) return false;
    for(let i = 3; i * i <= temp; i+=2){
        if (n % i == 0) return false;
    }
    return true;
}
function primeUptoN(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if(isPrime(i)){
            cnt++;
        }
    }
    return cnt;
}
console.log(primeUptoN(20));