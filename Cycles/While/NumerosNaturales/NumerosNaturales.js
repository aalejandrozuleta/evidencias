/*Cree un programa que muestre los números naturales de 1 a n (donde n es cualquier número natural, 5, 600, 1500 etc).*/

const limite = prompt("¿Hasta que numero se debera imprimir la secuencia?");
let contador=1;
while (contador<=limite) {
    console.log("Los numeros naturales positivos entre 1 y",limite,"son:",contador);
    contador++; 
}


