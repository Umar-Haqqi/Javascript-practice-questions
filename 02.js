// 02- check whether it is an array or not

const checkArray = (elem) => {
    let returnVal = Array.isArray(elem);
    console.log("jjj");
    return returnVal;
}

let result1 = checkArray([]);
let result2 = checkArray({});
let qq = checkArray({});

console.log(result1, result2);

