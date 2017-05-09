var num1="";
var num2="";
var sex="";
var iMC="";

function enviap(){
	num1= document.formulario.dpeso.value;
}

function enviaa(){
	num2=document.formulario.daltura.value;
	iMC=num1/(num2*num2);
}

function sexo(){
	sex=document.formulario.daltura.value;
	document.formulario.imc1.value=eval(iMC);
}

function resp(){
	alert("Si eres de sexo masculino, tu indice de masa debe ser entre 20.7 y 27.8, para estar saludable. Si eres de sexo femenino, tu indice de masa debe ser 19.1 a 27.3, para estar saludable")
}

function limpia(){
	document.formulario.dpeso.value="";
	document.formulario.daltura.value="";
	document.formulario.imc1.value="";
}

function refaz(){
	document.formulario.dpeso.value="";
	document.formulario.daltura.value="";
	document.formulario.imc1.value="";
	num1="";
	num2="";
	sex="";
	iMC="";
}
