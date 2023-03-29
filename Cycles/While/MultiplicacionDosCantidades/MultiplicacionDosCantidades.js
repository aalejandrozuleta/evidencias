/*Crear un programa que muestre la multiplicación de dos cantidades. Use ciclo while. NO USE LA OPERACIÓN MULTIPLICACIÓN*/

let multiplicando = parseFloat(prompt("Digite el multiplicando, recuerde que este es el numero que va ha ser multiplicado"));
let multiplicador = parseFloat(prompt("Digite el multiplicando, recuerde que este es el numero que indica cuantas veces se va sumar el multiplicando"));
let producto = 0;
while (multiplicador!=0) {
    producto= producto+multiplicando;
    multiplicador--;
}
console.log("El producto de la multiplicacion es",producto);
