/*

	    ALFONSO CANICOBA
	TRABAJO FINAL JAVASCRIPT
	    NEXT UNIVERSITY
	      ENERO 2017
	
	
*/

//TODO ESTO FUNCIONA PERFECTO // HAY QUE METERLO EN EL OBJETO CALCULADORA

var visor = document.getElementById("display");
var operacion = "";
var primerValor = 0;
var segundoValor = 0;
var resultado = 0;
var auxTeclaIgual = false; // Par permitir ingreso consecutivo
var ultimoValor = 0;

document.getElementById("on").onclick = 	function() {borrarVisor()};
document.getElementById("sign").onclick = 	function() {cambiarSigno()};
document.getElementById("punto").onclick = 	function() {ingresoDecimal()};
document.getElementById("0").onclick = function() {ingresoNumero(0)};
document.getElementById("1").onclick = function() {ingresoNumero(1)};
document.getElementById("2").onclick = function() {ingresoNumero(2)};
document.getElementById("3").onclick = function() {ingresoNumero(3)};
document.getElementById("4").onclick = function() {ingresoNumero(4)};
document.getElementById("5").onclick = function() {ingresoNumero(5)};
document.getElementById("6").onclick = function() {ingresoNumero(6)};
document.getElementById("7").onclick = function() {ingresoNumero(7)};
document.getElementById("8").onclick = function() {ingresoNumero(8)};
document.getElementById("9").onclick = function() {ingresoNumero(9)};
document.getElementById("mas").onclick = 	function() {ingresoOperacion("+")};
document.getElementById("menos").onclick = 	function() {ingresoOperacion("-")};
document.getElementById("por").onclick = 	function() {ingresoOperacion("*")};
document.getElementById("dividido").onclick = 	function() {ingresoOperacion("/")};
document.getElementById("raiz").onclick = 	function() {ingresoOperacion("raiz")};
document.getElementById("igual").onclick = 	function() {verResultado()};


function borrarVisor(){ //Borra el visor e inicializa todas las variables
	visor.innerHTML = "0";
	operacion = "";
	primerValor = 0;
	segundoValor = 0;
	resultado = 0;
	Operación = "N";
	auxTeclaIgual = false;
	ultimoValor = 0;
};

function cambiarSigno(){
	if (visor.innerHTML !="0") {
		var aux;
		if (visor.innerHTML.charAt(0)=="-") {
			aux = visor.innerHTML.slice(1);
		}	else {
			aux = "-" + visor.innerHTML;
	}
	visor.innerHTML = "";
	visor.innerHTML = aux;
	}
};

function ingresoDecimal(){
	if (visor.innerHTML.indexOf(".")== -1) {
		if (visor.innerHTML == ""){
			visor.innerHTML = visor.innerHTML + "0.";
		} else {
		    visor.innerHTML = visor.innerHTML + ".";
		}
	}
};

function ingresoNumero(valor){
	if (visor.innerHTML.length < 8) {
		
		if (visor.innerHTML=="0") {
				visor.innerHTML = "";
				visor.innerHTML = visor.innerHTML + valor;
		} else {
		visor.innerHTML = visor.innerHTML + valor;
		} 	
	} 
}; 

function ingresoOperacion(oper){
	primerValor = parseFloat(visor.innerHTML);
	visor.innerHTML = "";
	operacion = oper;
	auxTeclaIgual = false;
};

//Ver Resultado y realizar la operación

function verResultado(){

	if(!auxTeclaIgual){ //Primer vez que presiono igual
		segundoValor = parseFloat(visor.innerHTML);
		ultimoValor = segundoValor;
		
		//Calculo el resultado
		realizarOperacion(primerValor, segundoValor, operacion);
		
	} else { //Siguientes veces que presiono igual
		//Calculo el resultado
		realizarOperacion(primerValor, ultimoValor, operacion);
	}
	
	//Almaceno el resultado como primer valor para poder seguir operando
	primerValor = resultado;
	
	//Borro el visor y lo reemplazo por el resultado
	visor.innerHTML = "";
	
	//verifico el largo del resultado para recortarlo si hace falta

	if (resultado.toString().length < 9){
		visor.innerHTML = resultado.toString();
	} else {
		visor.innerHTML = resultado.toString().slice(0,8) + "...";
	}
	
	//Auxiliar para indicar si ya se presionó la tecla igual, para calcular sobre el último valor
	auxTeclaIgual = true;
	
};

//Función que realiza las operaciones. Se ejecuta al presionar tecla igual "="

function realizarOperacion(primerValor, segundoValor, operacion){
	switch(operacion){
		case "+": 
			resultado = eval(primerValor + segundoValor);
			break;
		case "-": 
			resultado = eval(primerValor - segundoValor);
			break;
		case "*": 
			resultado = eval(primerValor * segundoValor);
			break;
		case "/": 
			resultado = eval(primerValor / segundoValor);
			break;
		case "raiz":
			resultado = eval(Math.sqrt(primerValor));
		}
};

