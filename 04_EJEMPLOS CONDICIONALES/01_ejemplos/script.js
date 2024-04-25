function identificarMayorEdad()
{
    let resultado = "";
    //Identificar si es mayor o menor edad
    let edad = prompt("Por favor ingrese su Edad: ");

    if(edad >= 18 ){
        resultado = `Es mayor de Edad - tiene: <h2>${edad}</h2>`
    } else {
        resultado = `Es menor de Edad - tiene: <h2>${edad}</h2>`
    }
    document.getElementById(`lista`).innerHTML = resultado;


}         