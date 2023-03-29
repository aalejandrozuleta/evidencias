/*Cree un programa que muestre los números impares entre 1 y n.*/

let limite =parseFloat(prompt("¿Hasta que numero desea que aparezcan los numeros impares?"));
let contador =0;
while (contador<=limite) {
    if (contador%2 != 0) {
        console.log("Los numeros impares desde 1 hasta",limite,"son",contador);
    }
    contador++
}
