let edad = parseInt(prompt("Digite su edad"));
let dom = prompt("Digite su domicilio de recidencia");
let estadoCivil = prompt("Digite su estado civil");

console.log("su edad es ",edad, "su domicilio es ",dom, "su estado civil actual es",estadoCivil);

let respuesta = prompt("Estan correctos tus datos")

if (respuesta=="si" || respuesta=="correcto"){
    console.log("gracias")
}else{
    console.log("vuelva a ingresar los datos");
}