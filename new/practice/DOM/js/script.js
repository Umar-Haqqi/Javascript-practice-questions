const elem = document.querySelector('.para')
const p = document.createElement('h1');
const text = document.createTextNode("hello hello");
p.appendChild(text)
elem.appendChild(p)