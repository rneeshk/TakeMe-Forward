/*
    Time Complexity: O(N2) for the worst and average cases and O(N) for the best case. Here, N = size of the array.

    Space Complexity: O(1)
*/

function bubbleSort(arr) {
    const n = arr.length;

    // Bubble sort
    for (let i = n - 1; i >= 0; i--) {
        let didSwap = false;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                didSwap = true;
            }
        }
        if (!didSwap) {
            break;
        }
    }

    console.log("After Using Bubble Sort:");
    console.log(arr.join(" "));
}

const arr = [13, 46, 24, 52, 20, 9];

console.log("Before Using Bubble Sort:");
console.log(arr.join(" "));
bubbleSort(arr);
