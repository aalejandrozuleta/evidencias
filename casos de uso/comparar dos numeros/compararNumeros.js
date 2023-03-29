function comprarNumeros(params) {
    
    const num1 = Number(parseFloat(prompt("Digite el primer numero")));
    const num2 = Number(parseFloat(prompt("Digite el segundo numero")));
    
    switch (true) {
        case isNaN(num1) || isNaN(num2):
            console.log("Los datos ingresados no son validos");
            break;
        case num1 == num2:
            console.log("Los dos numeros son iguales");
            comprarNumeros();
            break;
        case num1>num2:
            console.log("El numero",num1, "es mayor que",num2);
            break;
        default:
            console.log("el numero",num2,"es mayor que",num1);
            break;
    }
}
comprarNumeros();