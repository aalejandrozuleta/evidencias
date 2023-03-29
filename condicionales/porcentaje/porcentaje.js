let valor = Number(parseFloat(prompt("Ingrese el valor del objeto")));
let descuento = Number(parseFloat(prompt("Ingrese el descuento")));

let operacion = (valor * descuento)/100;
let resultado = (valor - operacion);


console.log("el reultado con el descuento queda en ",resultado);