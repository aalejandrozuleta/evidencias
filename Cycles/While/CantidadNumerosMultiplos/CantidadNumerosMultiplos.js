/*Cree un programa que muestre cuántos números múltiplos de 6 hay entre 0 y 100*/

let contador=0;
let cantidad=0;
while (contador<=100) {
    if (contador%6==0) {
        console.log("Los numeros multiplos de 6 entre 0 y 100 son",contador);
        cantidad++;
    }
    contador++;
}
console.log("Se encuntran",cantidad,"numeros multiplos de 6 entre 0 y 100 son");