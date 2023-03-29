let base = prompt("ingrese la base");
let altura = prompt("ingrese la altura");
let baseNumero = parseFloat(base); 
let alturaNumero= parseFloat(altura);

let perimetro = (2*baseNumero+2*alturaNumero);
let area = (baseNumero + alturaNumero);

console.log("su perimetro es de ",perimetro);
console.log("su area es de ",area);