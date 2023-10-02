// 14- Write a function to clone an array

// function cloneArr(arr){
//     return [...arr+1]
// }
// console.log(cloneArr([1,2,3,4,5]));


// another way
let myArr = [1, 2, 3, 4, 5];
console.log("original Array: " + myArr);

const cloneArr = (arr) => {
    let newArr = [];
    arr.map((elem) => {
        newArr.push(elem);
    });
    return newArr;
}

let newArr = cloneArr(myArr);
console.log("cloned array:" + newArr);
newArr.pop();
console.log("cloned array after pop:" + newArr);

