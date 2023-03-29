let resultado = 0;
let sumado = 0;
for(let contador=0; contador<10;contador++) {
    let notas = parseFloat(prompt("Digite sus 10 notas"));

    if(notas<0 || notas>10 || notas == isNaN){
        console.log("Nota no valida");
    }else{
        sumado +=  notas;
        resultado = sumado/10
    }
}
console.log(resultado);