/*Cree un programa que muestre los múltiplos de 6 entre 0 y 100*/

let contador=0;
while (contador<=100) {
    if (contador %6 ==0) {
        console.log("Los numeros multiplos de 6 del 0 100 son:",contador);
    }
    contador++
}