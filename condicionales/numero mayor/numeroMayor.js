while (true){
    let numeroUno = parseFloat(prompt("Ingrese el primer numero"));
    let numeroDos = parseFloat(prompt("Ingrese el segundo numero"));

    if(numeroUno==numeroDos){
        console.log("los dos numeros son iguales, vuelva a ingresarlos");
        continue;
    }

    else if (numeroUno>numeroDos){
        console.log(numeroUno , " es mayor que ",numeroDos);
    }

    else{
        console.log(numeroDos, "es mayor que ",numeroUno);
    }
    break
};
