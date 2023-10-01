// 03- How to empty an array in Javascript? Do not reset it to a new array, and do not loop through to pop each value.

let arr = [0,1,2,3,4,5];
console.log(arr);

// arr = [] wrong way

arr.length = 0;
console.log(arr);