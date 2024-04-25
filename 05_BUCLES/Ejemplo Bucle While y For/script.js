// Ejercicios: Numeros del 20 al 10 decreciendo. Implementar while para mostrar una lista de numeros.
//Ejercicio con Wile
function contarWhile(){
    let contador = 20;
    let array = [];

    while (contadador > 10){
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `<p>Numeros del 20 al 10 :</p> <br><h2> ${array}</h2>`;}
//Ejercicio con For
function contadorFor(){
    let array = [];

    for (let i = 20; i >= 10; i--){
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `<p>Numeros del 20 al 10 con For:</p> <br><h2> ${array}</h2>`;
}