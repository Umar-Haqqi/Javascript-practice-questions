// 05- Make this Work: duplicate([1,2,3,4,5]) ==> [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arr) => {
    let duplicateArray = arr.concat(arr);
    return duplicateArray + (100+50);
}

let result = duplicate([1, 2, 3]);
console.log("Final result: " + result);

