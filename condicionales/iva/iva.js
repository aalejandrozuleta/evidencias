const iva = 0.19;

let producto = prompt("Ingrese el valor del producto");
let productoConversion = parseFloat(producto);

let valor = productoConversion + productoConversion*iva

console.log(valor);