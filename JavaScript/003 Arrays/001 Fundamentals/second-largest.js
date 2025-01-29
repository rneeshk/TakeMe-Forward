/*

    Second Largest Element

    Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

    Example 1
    Input: nums = [8, 8, 7, 6, 5]
    Output: 7
    Explanation: The largest value in nums is 8, the second largest is 7

    Example 2
    Input: nums = [10, 10, 10, 10, 10]
    Output: -1
    Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned
*/

function secondLargest(arr, n) {
    if (n < 2) {
        return -1;
    }
    let largest = -Infinity;
    let sLargest = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        } else if (arr[i] > sLargest && arr[i] !== largest) {
            sLargest = arr[i];
        }
    }

    return sLargest === -Infinity ? -1 : sLargest;
}
let arr = [8, 8, 7, 6, 5];
let n = arr.length;
console.log(secondLargest(arr, n));
