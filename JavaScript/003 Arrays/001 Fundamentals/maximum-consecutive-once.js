/*
    Given a binary array nums, return the maximum number of consecutive 1s in the array.

    A binary array is an array that contains only 0s and 1s.

    Example 1
    Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
    Output: 3
    Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

    Example 2
    Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
    Output: 0
    Explanation: No 1s are present in nums, thus we return 0

*/

function findMaxConsecutiveOnes(arr, n){
    let cnt = 0, maxi = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] === 1){
            cnt++;
        }else{
            maxi = Math.max(maxi, cnt);
            cnt = 0;
        }
    }
    maxi = Math.max(maxi, cnt);
    return maxi;
}

let arr = [0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1];
let n = arr.length;
console.log(findMaxConsecutiveOnes(arr, n));