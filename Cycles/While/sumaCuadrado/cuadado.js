let numero = parseFloat(prompt("Ingrese el numero para encontrar su cuadrado")); 
let contador = 1; 
let suma = 0; 

while (contador <= numero) {
    suma += contador * contador;
    contador++;
}

console.log(suma);