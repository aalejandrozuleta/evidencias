let numero = parseFloat(prompt("Digite un numero para saber si es divisible por 3 y 5"))
let validacion = numero%3==0 && numero%5==0;

switch(validacion){
    case true:
        console.log(`el numero: ${numero} es divisible por 3 y 5`);
    break;

    default:
        console.log(`el numero: ${numero} no es divisible por 3 y 5`);
        break;
}