// 04- How would you check if a number is an integer?

const checkIsNum = (isNum) => isNum % 1 === 0 ? console.log("Yes!!!") : console.log("No!!!");
checkIsNum(12);


// let isNum = 12;

// function checkIsNum() {
    // if (isNum % 1 === 0) {
    //     console.log("Yes! it's a integer");
    // }
    // else {
    //     console.log("No! not a integer");
    // }
// }
// checkIsNum()


// console.log(Number.isInteger(1.0)); also possible like this
// ("2 + 2")