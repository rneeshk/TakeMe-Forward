function arraySortedOrNot(arr, n) {
    for(let i = 1; i < n; i++){
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
let arr = [5,4,6,7,8];
let n = arr.length;
console.log(arraySortedOrNot(arr, n));

let arr2 = [1,2,3,4,5];
let n2 = arr.length;
console.log(arraySortedOrNot(arr2, n2));