// 08- Write a javascript function that returns a passed string letters in alphabetical order

// const alphabeticOrder = (str) => {
//     return str.split("").sort().join("")
// }
// console.log(alphabeticOrder("umar"));

let str = ["umar" ,"haaqui","hello"]

const sorted =  str.map((word)=>{
    // console.log(word);
    return word.toString().split("").sort().join("")
})

const result = sorted.join(" ")
console.log(result);