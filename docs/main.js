//Variables
let pantalla = document.getElementById("pantalla");
let subpantalla = document.getElementById("subpantalla");
let numeroSeleccionado = "";
let operadorSeleccionado = "";
let resultado = "";

//función para digitar una tecla númerica
function numero(num) {
    numeroSeleccionado = numeroSeleccionado + num;
    resultado = resultado + num;
    pantalla.innerHTML = resultado;
}

//función para digitar una tecla de operación
function operacion(ope) {
    operadorSeleccionado = ope;
    resultado = resultado + ope;
    numeroSeleccionado = "";
    pantalla.innerHTML = resultado;
}

//Función para realizar una operación matemática
function calculo() {
    resultado = eval(resultado);
    subpantalla.innerHTML = resultado;
    resultado = resultado.toString();
    numeroSeleccionado = "";
    pantalla.innerHTML = resultado;
}

//función para limpiar pantalla
function limpiar() {
    operadorSeleccionado = "";
    resultado = "";
    subpantalla.innerHTML = "";
    numeroSeleccionado = "";
    pantalla.innerHTML = "0";
}

//función para eliminar ultimo digito
function eliminar() {
    cifras = resultado.length;
    resultado = resultado.substring(0, cifras - 1)
    pantalla.innerHTML = resultado;
}