const anguloUno = Number(parseFloat(prompt("Ingrese el primer angulo")));
const anguloDos = Number(parseFloat(prompt("Ingrese el segundo angulo")));
const angulotres = Number(parseFloat(prompt("Ingrese el tercer angulo")));

let comprobacion = ((anguloUno + anguloDos + angulotres) == 180);

switch (comprobacion) {
    case true:
        console.log("Esto es un triangulo");
        break;
    default:
        console.log("Esto no es un triangulo");
        break;
};