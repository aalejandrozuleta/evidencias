let angulo1 = parseInt(prompt("Ingrese el primer angulo"));
let angulo2 = parseInt(prompt("Ingrese el segundo angulo"));
let angulo3 = parseInt(prompt("Ingrese el tercer angulo"));

const suma = (angulo1+angulo2+angulo3);

if (suma == 180){
    console.log(" es un triangulo");
}else{
    console.log("no es un triangulo");
}