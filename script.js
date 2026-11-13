
let btn = document.querySelector("#btn");

let container = document.querySelector("#container");

btn.addEventListener("click", randomBg)

function randomBg(){

    let colors = "#" + Math.random().toString(16).slice(2, 8);

    container.style.backgroundColor = colors ;
    btn.style.color = colors;
    btn.style.border = '1px', 'solid', colors
}
console.log('hello');
