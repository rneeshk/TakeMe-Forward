function sum(arr) {
    let ans = 0;
    for(let el of arr){
        ans += el;
    }
    return ans;
}
let arr = [1,2,3,4,5];
console.log(sum(arr))