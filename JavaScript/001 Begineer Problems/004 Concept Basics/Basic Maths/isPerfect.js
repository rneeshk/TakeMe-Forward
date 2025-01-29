function isPerfect(n) {
    let temp = n;
    let sum = 0;
    for(let i = 1; i < temp; i++){
        if(temp % i == 0) sum += i;
    }
    return sum == n;
}
console.log(isPerfect(6))