/*Cree un programa que calcule la suma de los primeros n números naturales.*/
let limite = parseFloat(prompt("¿Hasta que numero desea sumar los numeros naturales positivos?"));
let contador=1;
let suma=0;
while (contador<=limite) {
    suma= suma+contador
    contador++
}
console.log("La suma de todos los numero desde 1 hasta",limite,"es igual a",suma );