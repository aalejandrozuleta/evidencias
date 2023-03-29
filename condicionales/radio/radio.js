let radio = prompt("ingrese el radio");
let radioConversion = parseFloat(radio);

let area = (3.14 * (radio*radio));
let perimetro = (2* 3.14 * radio);

console.log("su area es de ",area ,"su perimetro es de ",perimetro);