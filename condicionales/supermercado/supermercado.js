let productos = prompt("Digite el producto a comprar");

if(productos == "arroz" || productos=="lentejas"){
    console.log("este producto no paga iva");
}

else if (productos == "vino" || productos== "crema"){
    console.log("este producto si paga iva");
}

else{
    console.log("Producto no disponible ");
}

