let num1 = Number(prompt("Ingrese un numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));

if (num1 == num2){
    console.log("Ambos numeros son iguales");
}

else if (num1>num2) {
    console.log(num1, "es mayor que ",num2);
}

else {
    console.log(num2, "es mayor que ",num1);
}