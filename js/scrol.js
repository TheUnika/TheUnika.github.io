window.onscroll=function(){
  if (window.pageYOffset>6000){
    batonchik.classList.add('shown');
  }else{
    batonchik.classList.remove('shown');
  }
}
let batonchik= document.querySelector('.up-button');
batonchik.onclick=function(){
    window.scrollTo(0,0);
}