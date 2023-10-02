// 12- in an array of number and strings add all numnber and leave the string

let arr = [15, "aaAA", 15, "b", "CCc", 20];

let sum = 0;
arr.forEach((elem) => {
    if (typeof elem === "number") {
        sum = sum + elem
    }
    else {
        console.log("string: " + elem);
    }
})
console.log(sum);
