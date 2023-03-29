const precio = Number(parseFloat(prompt("Ingrese el precio del Producto")));
const plazo = Number(prompt("ingrese la cantidad de coutas"));



if(plazo>0){
    let precioTotal = (precio*1.25)
    let cuotaMensual = (precioTotal/plazo);
    console.log("El precio del electrodomestico es de ",precioTotal);
    console.log("La cuota mensual es de ",cuotaMensual);
}else if(plazo<0){
    precioTotal = precio
    console.log("El precio del electrodomestico es de ",precioTotal);
    console.log("la couta mensual es de",precio);
}else {
    console.log("el valor o las coutas, no son un valor valido");
}





