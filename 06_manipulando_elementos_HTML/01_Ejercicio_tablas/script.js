function traerTablas(){
    let num = parseInt(document.getElementById("inputText").value);
   
    let result =`La tabla de ${num} es: <br>`;
    for(let i = 1;i <= 10;i++){
        result += `<li>${i} x ${num} = ${i*num}</li>`
    }
    document.getElementById("lista").innerHTML = result;
}

