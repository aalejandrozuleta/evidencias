/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el*/

let salir = prompt("¿Desea salir del sistema?")
while (salir != "s") {
    salir= prompt("¿Desea salir del sistema?")
}
console.log("Su salida ha sido exitosa");