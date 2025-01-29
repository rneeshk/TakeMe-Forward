function countOdd(arr){
    let cnt = 0;
    for(let el of arr){
      if(el % 2 != 0){
          cnt++;
      }
    }
    return cnt;
}
let arr = [1,2,3,4,5];
console.log(countOdd(arr))