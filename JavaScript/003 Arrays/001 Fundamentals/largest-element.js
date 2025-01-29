/*
    Largest Number

    Given an array of integers nums, return the value of the largest element in the array.

    Example 1
    Input: nums = [3, 3, 6, 1]
    Output: 6
    Explanation: The largest element in array is 6

    Example 2
    Input: nums = [3, 3, 0, 99, -40]
    Output: 99
    Explanation: The largest element in array is 99
*/

// function largestNumber(arr, n){
//     let maxi = arr[0];
//     for(let i = 1; i < n; i++){
//         if(arr[i] > maxi){
//             maxi = arr[i];
//         }
//     }
//     return maxi;
// }
// let arr = [3, 3, 0, 99, -40];
// let n = arr.length;
// console.log(largestNumber(arr, n));

let arr = [3,3,0,99,-40];
let maxi = Math.max(...arr);
console.log(maxi)
