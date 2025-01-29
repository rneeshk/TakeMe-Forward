/*
    Time Complexity: O(N2) for the worst and average cases and O(N) for the best case. Here, N = size of the array.
    Space Complexity: O(N) auxiliary stack space.
*/
function bubbleSort(arr, n) {
    // Base Case: range == 1.
    if (n === 1) return;

    let didSwap = false;
    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap elements
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            didSwap = true;
        }
    }

    // If no swapping happens
    if (!didSwap) return;

    // Range reduced after recursion
    bubbleSort(arr, n - 1);
}

const arr = [13, 46, 24, 52, 20, 9];

console.log("Before Using Bubble Sort:");
console.log(arr.join(" "));

bubbleSort(arr, arr.length);

console.log("After Using Bubble Sort:");
console.log(arr.join(" "));