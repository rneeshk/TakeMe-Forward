function factorial(n) {
    let temp = n;
    if(temp == 0) return 1;
    let fact = 1;
    for(let i = 1; i <= temp; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(8));