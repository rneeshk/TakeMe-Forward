/*
    Smallest Number

    Given an array of integers nums, return the value of the Smallest element in the array.

    Example 1
    Input: nums = [3, 3, 6, 1]
    Output: 1
    Explanation: The smallest element in array is 1

    Example 2
    Input: nums = [3, 3, 0, 99, -40]
    Output: -40
    Explanation: The smallest element in array is -40
*/

function smallestNumber(arr, n){
    if(n === 1) return arr[0];
    let mini = arr[0];
    for(let i = 1; i < n; i++){
        if(arr[i] < mini){
            mini = arr[i];
        }
    }
    return mini;
}
let arr = [3, 3, 0, 99, -40];
let n = arr.length;
console.log(smallestNumber(arr, n));

// let arr = [3,3,0,99,-40];
// let mini = Math.min(...arr);
// console.log(mini)