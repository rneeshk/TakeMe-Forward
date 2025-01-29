/*
    Time complexity: O(N2), (where N = size of the array), for the best, worst, and average cases.
    Space Complexity - O(1)
*/

function selectionSort(arr) {
    const n = arr.length;

    // Selection sort
    for (let i = 0; i < n - 1; i++) {
        let mini = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        // Swap elements
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }

    console.log("After selection sort:");
    console.log(arr.join(" "));
}

const arr = [13, 46, 24, 52, 20, 9];

console.log("Before selection sort:");
console.log(arr.join(" "));
selectionSort(arr);
