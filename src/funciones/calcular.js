export function calcular() {
    let monto=document.getElementById("simulador").value;//traigo el valor que se carga en el input//
    let resultado=document.getElementById("resultado") //el valor del resultado en el otro input
 resultado.innerText=monto*1.30/12 //el resultado es monto (lo que se cargue en el input) x1.30 (asi se le suma un 30%) dividido en 12
 }
