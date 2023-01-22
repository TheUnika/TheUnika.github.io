let knopka = document.getElementById("calculator")


knopka.addEventListener("click", function (){
    let a = Number (prompt ("Введи чисто А "));
    let b = Number (prompt ("Введи число В"));
    let dey = prompt ("Введите действие");
    if (dey=="+"||dey=="сложить"|| dey=="add"){
        alert ("a+b="+add(a,b));
    } else if (dey=="-"|| dey=="вычесть"|| dey=="take")
    alert ("a"+dey+"b="+minus(a,b));
    else if (dey=="*"||dey=="умножить"|| dey=="multiply")
    alert ("a"+dey+"b="+umnozit(a,b));
    else if (dey=="/"||dey=="делить"|| dey=="divide")
    alert ("a"+dey+"b="+delit(a,b));
    else {alert("Ты шо, совсем тю-тю?")}

})
function add(a,b){
    return a+b;
}
function minus (a,b){
    return a-b;
}
function umnozit (a,b){
    return a*b;
}
function delit (a,b){
    return a/b;
}