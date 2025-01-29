/*
    Time complexity: O(N2), (where N = size of the array), for the worst, and average cases.
    Space Complexity: O(1)

    Best Case Time Complexity: 

    The best case occurs if the given array is already sorted. And if the given array is already sorted, the outer loop will only run and the inner loop will run for 0 times. So, our overall time complexity in the best case will boil down to O(N), where N = size of the array.
*/
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap elements
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    console.log("After Using Insertion Sort:");
    console.log(arr.join(" "));
}

const arr = [13, 46, 24, 52, 20, 9];

console.log("Before Using Insertion Sort:");
console.log(arr.join(" "));
insertionSort(arr);