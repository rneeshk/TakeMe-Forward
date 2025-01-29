// Using swap method
console.log("Using Swap Method")
function reverseArray1(arr, n){
    let left = 0, right = n - 1;
    while(left <= right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp; 
        left++, right--;
    }
    return arr;
}
let arr1 = [1,2,3,4,5];
let n1 = arr1.length;
console.log(reverseArray1(arr1, n1));


// Method 2: Using for loop
console.log("Using for loop and extra array")
function reverseArray2(arr2){
    let revArray = [];
    for(let i = arr2.length - 1; i >= 0; i--){
        revArray.push(arr2[i]);
    }
    return revArray;
}
let arr2 = [-20,-5,-5,8,5];
console.log(reverseArray2(arr2))

// Method 3: Using reverse() method
console.log("Using reverse() Method")
function reverseArray3(arr3){
    arr3.reverse();
    console.log(arr3)
}
let arr3 = [1,2,3,4,5];
reverseArray3(arr3)

// Method 4: using toReversed()
console.log("Using toReversed() Method")
function reverseArray4(arr4){
    let b = arr4.toReversed();
    console.log(b);
}
let arr4 = [1,2,3,4,5]
reverseArray4(arr4)
