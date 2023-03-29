let numeroUno = parseInt(prompt("Ingrese el primer numero"));
let numeroDos = parseInt(prompt("Ingrese el segundo numero"));

if(numeroUno%numeroDos==0){
    console.log(numeroUno, "es multiplo de ", numeroDos);
}else{
    console.log(numeroUno, " no es multiplo de ", numeroDos);
};