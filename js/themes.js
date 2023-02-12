let themeButton=document.querySelector('.themebutton');
themeButton.addEventListener("click",function () {
    document.body.classList.toggle("dark-theme");

});


  function playAudio(url){    
    new Audio(url).play();
  }