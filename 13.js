// 13- Loop an array of objects and remove all objects which don't have gender's value male

const arr = [
    { name: 'Umar', gender: 'male' },
    { name: 'Ali', gender: 'male' },
    { name: 'Zara', gender: 'female' },
    { name: 'umar', gender: 'male' },
    { name: 'Laiba', gender: 'female' },
]


// way 1: this is making a new array
// const filterResult = arr.filter((elem) => {
//     return elem.gender === "male";
// })
// console.log(filterResult);



// way 2: do not want a new array, remove from actual array
let count = 0;

arr.forEach((elem) => {
    if (elem.gender !== "male") {
        count++
    }
})
// console.log(count);

for (let i = 0; i <= count; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].gender !== "male") {
            arr.splice(j, 1);
        }
    }
}
console.log(arr);




