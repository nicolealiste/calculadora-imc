function calcularIMC(){
var num=0;
var inputP = document.getElementById("peso").value;
var inputE = document.getElementById("estatura").value;
var calcula = document.getElementById("mostrar");
num = (inputP/(inputE*inputE)).toFixed(2);
calcula.innerHTML = "Su IMC es de <b>"+num+"</b>";
}
