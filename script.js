window.addEventListener("load", load);

function load(){

var circle = document.getElementById("circle");
var btnUp = document.getElementById("btnUp");
var btnDown = document.getElementById("btnDown");

var rotateValue = circle.style.transform;
var rotateSum;

btnUp.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";

    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

btnDown.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";

    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

}