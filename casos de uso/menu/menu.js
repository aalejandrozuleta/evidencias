let opcion = parseInt(prompt("Ingrese 1 para sumar , 2 para restar, 3 para dividir, 4 para multiplicar"));
let num1 = parseFloat(prompt("Ingrese el primer numero para la operacion"));
let num2 = parseFloat(prompt("Ingrese el segundo numero para la operacion"));
let resultado = 0;

switch(opcion) {
    case 1:
        resultado = num1 + num2;
        console.log(`el resultado de la suma es ${resultado}`);
    break;

    case 2:
        resultado = num1 - num2;
        console.log(`el resultado de la resta es ${resultado}`);
    break;

    case 3:
        resultado = num1 / num2;
        console.log(`el resultado de la division es ${resultado}`);
    break;

    case 4:
        resultado = num1 * num2;
        console.log(`el resultado de la multiplicacion es ${resultado}`);
    break;
}