
let now = new Date();
console.log(now);
let kanec = new Date(2023,03,02,11,30);
let dr = new Date(2023,06,25);
console.log(dr)
if (dr>=now){
    console.log( 'До дня рождения осталось:');
    console.log( dr.getMonth()- now.getMonth());
    console.log("месяцев и ");
    console.log( dr.getDate()- now.getDate());
    console.log("и дней");
} else{
    console.log('Гуляй !');
}
let a = 8;
let b = 2;
console.log(Number(a)+b)

console.log
let student = {
    name:"sofiaaaa",
    age: 79,
    class: 8

};
for(let key in dr){
    console.log (key);
    console.log([key]);
}
let smille = document.querySelector('.smille')
for(let key in smille){
    console.log(key);
    console.log(smille[key]);
}
let Xpchela=0
let Ypchela=0
let pchela = document.querySelector('.pchela');
let lyk = document.querySelector('.lyk');
let orxidea= document.querySelector('.orxidea');
document.onclick=function(event){
    
    pchela.style.top=event.y+"px"
    pchela.style.left=event.x+"px"
   
}
