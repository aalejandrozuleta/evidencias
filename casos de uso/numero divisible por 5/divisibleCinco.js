const numero = Number(parseFloat(prompt("DIgite el numero")));
switch (numero%5) {
    case 0:
        console.log("El numero",numero,"es divisible por cinco");
        break;
    default:
        console.log("El numero",numero, "No es divisible por cinco");
        break;
}