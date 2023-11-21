const elem = document.querySelector('.para')
const p = document.createElement('h1');

p.className = "heading";
p.id = "headingID";

const text = document.createTextNode("hello hello");
p.appendChild(text)
elem.appendChild(p)


// how to read an element
const main_heading = document.querySelector('#main-heading')
console.log(main_heading.textContent);


// add a new list item
const list = document.querySelector('.list')
const li = document.createElement('li')
li.textContent = "new 4"
list.appendChild(li)