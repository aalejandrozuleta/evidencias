/*Cree un programa que muestre cuántos números impares hay entre 0 y 100*/

let contador=0;
let cantidad=0;
while (contador<=100 && cantidad<=100) {
    if (contador%2!=0) { 
        console.log("Los numeros impares son",contador);
        cantidad++
    }
    contador++
}
console.log("Se encuentran",cantidad,"numeros impares entre 0 y 100");