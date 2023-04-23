let Big = document.querySelector('.imagecont img');
let smallImg= document.querySelector('.galery-small');
let smallImgs = smallImg.querySelectorAll('img');


for(let img of smallImgs){
    img.onclick=function(){
        Big.src = img.src;
    }
}
Big.src= smallImgs[9].src;