let a = parseFloat(prompt("Ingrese la base de la potencia")); 
let b = parseFloat(prompt("ingrese el exponente de la potencia")); 
let resultado = 1;
let contador = 0;

while (contador < b) {
    resultado *= a;
    contador++;
}

console.log(resultado);
