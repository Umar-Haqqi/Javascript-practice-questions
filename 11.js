// 11- Loop an array and add all member of it

const arr = [1, 2, 3, 4, 5];

let sum = 0

arr.forEach((elem) => {
    // console.log(elem);
    sum = sum + elem;
})

console.log(sum);