/*
    You are given an array, stored in a variable with name arr with length n.
    You have to return the reverse array.

    Example 1:
    Input: arr = [1, 3, 2, 4, 5]
    output: [5, 4, 2, 3, 1]
*/

function reverseArray(arr, n) {
  // arr.reverse();
  let left = 0,
    right = n - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++, right--;
  }
  return arr;
}
let arr = [1, 3, 2, 4, 5];
let n = arr.length;
console.log(reverseArray(arr, n));
