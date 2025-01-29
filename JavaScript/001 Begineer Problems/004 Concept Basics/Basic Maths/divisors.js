function divisors(n){
    let arr = new Array();
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(divisors(6));