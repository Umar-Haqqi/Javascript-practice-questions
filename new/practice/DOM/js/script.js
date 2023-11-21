const btn = document.querySelector('#btn');

function click1(){
    console.log("click 1");
}
function click2(){
    console.log("click 2");
}

// just passing function reference, if call function here like click1(), then it will be called and will print in console without clicking btn, means click event listener will not work
btn.addEventListener('click',click1)
btn.addEventListener('click',click2)
// btn.addEventListener('click',click2())   see the difference

btn.removeEventListener('click',click2)