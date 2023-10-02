// 10- Write a function which accepts an argument and returns the type

const typeTeller = (elem) => {
    return typeof (elem)
}

console.log(typeTeller([]));
console.log(typeTeller(function () { }));
console.log(typeTeller(12));
console.log(typeTeller("umar"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));