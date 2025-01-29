function countDigit(arr, n){
    let cnt0 = 0, cnt1 = 0, cnt2 = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] === 0) cnt0++;
        else if(arr[i] === 1) cnt1++;
        else cnt2++;
    }
    let ans = `${cnt0} ${cnt1} ${cnt2}`;
    return ans;
}
let arr = [0,1,0,2,1,2,0,1,2,0];
let n = arr.length;
console.log(countDigit(arr, n));