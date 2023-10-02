// 20- Write a program to compute the union of two arrays:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));     ==> [1, 2, 3, 10, 100] 

const union = (arr1, arr2) => {
    let newArr = [...new Set(arr1.concat(arr2))];
    return newArr;
}

const result = union([1, 2, 3, 4, 10], [10, 2, 4, 1, 100]);
console.log(`Union of two arrays: ${result}`);