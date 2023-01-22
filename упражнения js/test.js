let image = document.querySelector('.pic');
let posX=0,posY=0;
let razmer=20;
image.onclick = function (){
    alert("Не трогай меня!")
}


document.onclick = function(event){
   image.style.top = event.y+"px";
   posY=event.y;
   image.style.left = event.x+"px";
}

document.onkeypress = function (event){
   if(event.code == "KeyW"){
posY=posY-5
image.style.top = posY +"px"
   }
   if(event.code == "KeyE"){
    posX=posX+5;
    image.style.left = posX +"px"
}
if(event.code == "KeyS"){
    posY=posY+5
    image.style.top = posY +"px"
}
if(event.code == "KeyD"){
    posX=posX-5;
    image.style.left = posX +"px"
}
if(event.code == "KeyR"){
    razmer++;
    image.style.width= razmer +"%"
}
if(event.code == "KeyA"){
    razmer--;
    image.style.width= razmer +"%"
}
}
