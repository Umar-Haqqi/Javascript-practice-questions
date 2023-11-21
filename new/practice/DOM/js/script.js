const box = document.querySelector('#box');
console.log("before: ", box.classList);    // DOMTokenList is a list but it is an array


// add a class
box.classList.add('color','dimension')
console.log("after: ", box.classList);


// remove a class
box.classList.remove('dimension')


// check if there is a class or not
let checkClass = box.classList.contains('color')
console.log(checkClass);


// toggle class add/remove
box.classList.toggle('dimension')


// for (const css of box.classList) {
//     console.log(css);
// }
