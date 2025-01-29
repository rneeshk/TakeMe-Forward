/*
    Time Complexity: O(N2), (where N = size of the array), for the worst, and average cases.
    Space Complexity: O(N) auxiliary stack space.

    Time complexity in the best case will boil down to O(N)
*/  
function insertionSort(arr, i, n) {
    // Base Case: i == n
    if (i === n) return;

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        // Swap elements
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }

    // Recursive call
    insertionSort(arr, i + 1, n);
}

const arr = [13, 46, 24, 52, 20, 9];
const n = arr.length;

console.log("Before Using Insertion Sort:");
console.log(arr.join(" "));

insertionSort(arr, 0, n);

console.log("After Using Insertion Sort:");
console.log(arr.join(" "));
