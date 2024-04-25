//Ejercicios Creacion de Variables

//Una variable global de tipo
var global = "Global";
// Variable Local
let local = "Local";
// Constante
const constante = "Constante";

console.log("Variables: Global; " + global + "- Local: "
            + local + " - Cosnstante: " + constante);

let num = 4;  // Numero Entero 
let decimal = 3.1416; // Numero decimal
let string = "texto"; // Cadena de texto 
let bool = true; //Booleano
let array = ["Perro",20, "Gato", 50]; // Arreglo
let objeto = {  // Tipo Objeto
            Edad:18, 
            Nombre: "Isaias", 
            telefono: "6783592",
            Direccion: "El Rosal 2158"
            };
let indfefinida;  // Indefinida
let nula = null;  // Nula 

function sumar(num1, num2){  //Funcion sin parametros
    return 10 + 5;
};

console.log("Variables:\nEntero: " + num +"\nDecimal: " + decimal + "\nString: " + string 
+ "\NBooleano: " + bool + "\nArreglo: " + array + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " + indfefinida 
+ "\nNula: " + nula + "\nResultado de funcion: " + sumar());
console.log(sumar() );

