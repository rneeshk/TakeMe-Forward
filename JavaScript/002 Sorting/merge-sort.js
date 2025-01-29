/*
    Time complexity: O(nlogn) 

    Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get sorted array, so overall time complexity will be nlogn

    Space complexity: O(n)  

    Reason: We are using a temporary array to store elements in sorted order.

    Auxiliary Space Complexity: O(n)
*/

function merge(arr, low, mid, high) {
    let temp = []; // Temporary array
    let left = low; // Starting index of left half
    let right = mid + 1; // Starting index of right half

    // Storing elements in the temporary array in sorted manner
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // If elements on the left half are still left
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // If elements on the right half are still left
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid); // Left half
    mergeSort(arr, mid + 1, high); // Right half
    merge(arr, low, mid, high); // Merging sorted halves
}

const arr = [9, 4, 7, 6, 3, 1, 5];

console.log("Before Sorting Array:");
console.log(arr.join(" "));
mergeSort(arr, 0, arr.length - 1);
console.log("After Sorting Array:");
console.log(arr.join(" "));