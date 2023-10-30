const users = [
    {
        id: 1,
        name: "Harray",
        isActive: true,
        age: 19
    },
    {
        id: 2,
        name: "John",
        isActive: false,
        age: 25
    },
    {
        id: 3,
        name: "Alice",
        isActive: true,
        age: 30
    },
    {
        id: 4,
        name: "Bob",
        isActive: false,
        age: 22
    },
    {
        id: 5,
        name: "Sarah",
        isActive: true,
        age: 29
    },
    {
        id: 6,
        name: "Michael",
        isActive: false,
        age: 35
    },
    {
        id: 7,
        name: "Linda",
        isActive: true,
        age: 27
    },
    {
        id: 8,
        name: "David",
        isActive: false,
        age: 20
    },
    {
        id: 9,
        name: "Emily",
        isActive: true,
        age: 32
    },
    {
        id: 10,
        name: "James",
        isActive: false,
        age: 28
    }
];

// --- if user with such name exist

// level 0
// const isNameExists = (name, users) => {
//     let exists = false;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             exists = true
//         }
//     }
//     return exists
// }

// level 1
const isNameExists1 = (name) => {
    const user = users.find((user) => user.name === name)
    return Boolean(user)
    // we use boolean here because it is giving whole object
}
// console.log(isNameExists1("Alice"));

// level 2
const isNameExists2 = (name) => {
    const user = users.findIndex((user) => user.name === name)
    // return user  
    return user >= 0
    // now it will return a boolean before it was index vale
}
// console.log(isNameExists2("Alice"));

// level 3
const isNameExists3 = (name) => {
    const user = users.some((user) => user.name === name)
    // some method will return a boolean no need to use boolean explicit
    return user
}
// console.log(isNameExists3("Emily"));




// --- adding element to the array
let myArr = [1, 2, 3]
function append(arr, val) {

    // arr.push(val) // it will modify/push into orignal array
    // return arr

    return [...arr, val] // it will create a new array
}
// console.log("Orignal array: ", myArr);
// console.log("function: ", append(myArr, 4));
// spread operator is used to expand the array into individual arguments




// --- Remove dublicate elements in the array 
// level 0
let myArr2 = [1, 2, 3, 3, 4, 4, 5, 5]
function check() {
    let uniqueElem = []
    myArr2.forEach((elem) => {
        // if element is not unique then push
        if (!uniqueElem.includes(elem)) {
            uniqueElem.push(elem); // it will mofity the orignal array
        }
    })
    return uniqueElem
}
// console.log(check(myArr2));
// The includes method is used to check if it already exists in the array. if it does not exists include else leave 


// level 1 - optimize
// The Set Object is a built in javascript data structure that allows you to store unique values of any type.

let myArr3 = [1, 2, 3, 3, 4, 4, 5, 5]
function CheckDuplicateWithSet(arr) {
    // return [new Set(arr)] // Set will give a object, we pass it in array which will go to 0 index
    // to pass each value of Set in array form
    return [...new Set(arr)]
}
// console.log(CheckDuplicateWithSet(myArr3)); // it will not modify orignal array
// console.log(myArr3);


// level 2 - array prototype also give a reduce method, which is a higher order array method
// reduce take two arguments callback and initial value
let myArr4 = [1, 2, 3, 6, 3, 4, 4, 5, 5, 6]
function CheckDuplicateWithReduce(arr) {
    return arr.reduce((acc, elem) => {
        // console.log("acc: " + acc, "elem: " + elem);

        // if acc has elem then return else make a new array and whatever the value of elem put it into acc array 
        const ans = acc.includes(elem) ? acc : [...acc, elem]
        return ans
    }, [])
}
console.log(CheckDuplicateWithReduce(myArr4));
// console.log(myArr4);




// --- thrown a error when calling the show function without providing a param argument
function checkParam() {
    console.log("Error: param Required!");
    throw new Error("param Required");
}

function show(param) {
    param === undefined ? checkParam() : console.log(param);
}
// show()