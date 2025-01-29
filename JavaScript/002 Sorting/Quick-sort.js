/*
    Time Complexity: O(N*logN), where N = size of the array.

    Reason: At each step, we divide the whole array, for that logN and n steps are taken for the partition() function, so overall time complexity will be N*logN.

    The following recurrence relation can be written for Quick sort : 

    F(n) = F(k) + F(n-1-k) 

    Here k is the number of elements smaller or equal to the pivot and n-1-k denotes elements greater than the pivot.

    There can be 2 cases :

    Worst Case – This case occurs when the pivot is the greatest or smallest element of the array. If the partition is done and the last element is the pivot, then the worst case would be either in the increasing order of the array or in the decreasing order of the array. 

    Recurrence:
    F(n) = F(0)+F(n-1)  or  F(n) = F(n-1) + F(0) 

    Worst Case Time complexity: O(n2) 

    Best Case – This case occurs when the pivot is the middle element or near to middle element of the array.
    Recurrence :
    F(n) = 2F(n/2)

    Time Complexity for the best and average case: O(N*logN)

    Space Complexity: O(1) + O(N) auxiliary stack space.
*/

// Partition function for quicksort
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot with arr[j]
    return j;
}

// Quick sort function
function qs(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        qs(arr, low, pIndex - 1);  // Recur for left partition
        qs(arr, pIndex + 1, high); // Recur for right partition
    }
}

// Function to return the sorted array
function quickSort(arr) {
    qs(arr, 0, arr.length - 1);
    return arr;
}

// Main function
const arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Using Quick Sort:");
console.log(arr);

const sortedArr = quickSort(arr);
console.log("After Using Quick Sort:");
console.log(sortedArr);
