let Body = document.querySelector('body');
let button = document.querySelector( '.settings');
let control = document.querySelector('.controls');
let colorSet= document.querySelector('.filter');
let sizeSet =document.querySelector('.size-setting');
let pixel= document.querySelector('.pixels');
button.onclick =function(){
    control.classList.toggle('shown');
}
colorSet.onchange = function(){
    Body.style.color = colorSet.value;
}
sizeSet.onchange = function(){
    pixel.textContent= sizeSet.value;
    Body.style.fontSize= sizeSet.value + 'px';
}
