// reverse arr
let arr = [1, 2, 3, 4, 5, 6]
const reverseArray = (arr) => {
    let reversedArr = [];
    for (let i = (arr.length - 1); i >= 0; i--) 
        reversedArr.push(arr[i]); 
    return reversedArr;
}
console.log(reverseArray(arr));

// reverse arr in place
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const reverseArray = (arr) => {
    let halfArrLength = Math.floor(arr.length / 2);
    for (let i = 0; i < halfArrLength; i++) {
        const lastPosition = (arr.length - 1) - i;
        const lastValue = arr[lastPosition];
        arr[lastPosition] = arr[i];
        arr[i] = lastValue;
    }
}
reverseArray(arr);
console.log(arr);

