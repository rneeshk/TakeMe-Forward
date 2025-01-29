/*

    Second Smallest Element

    Given an array of integers nums, return the second-smallest element in the array. If the second-smallest element does not exist, return -1.

    Example 1
    Input: nums = [1,2,4,7,7,5]
    Output: 2
    Explanation: The smallest value in nums is 1, the second smallest is 2

    Example 2
    Input: nums = [10, 10, 10, 10, 10]
    Output: -1
    Explanation: The only value in nums is 10, so there is no second smallest value, thus -1 is returned
*/
function secondLargest(arr, n) {
    if (n < 2) {
        return -1;
    }
    let smallest = Infinity;
    let sSmallest = Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < sSmallest && arr[i] !== smallest) {
            sSmallest = arr[i];
        }
    }

    return sSmallest === Infinity ? -1 : sSmallest;
}
let arr = [10, 10, 10, 10, 10];
let n = arr.length;
console.log(secondLargest(arr, n));