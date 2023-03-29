/* Cree un programa que calcule el promedio de 10 números.*/

let nota;
let suma=0;
let contador=0;
while (contador<10) {
    let nota= parseFloat(prompt("Digite la nota para realizar el promedio"))
    suma=suma+nota;
    contador++;
}
let promedio=suma/10
console.log("El promedio de las notas ingresadas es de",promedio);