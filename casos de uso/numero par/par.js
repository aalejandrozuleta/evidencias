const numero = parseFloat(prompt("Digite un numero"));
const comprobacion = numero%2 == 0

switch (comprobacion) {
    case true:
        console.log("El numero es par");
        break;
    default:
        console.log("El numero es impar");
        break;
}