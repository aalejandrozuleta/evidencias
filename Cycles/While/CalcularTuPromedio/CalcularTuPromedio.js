/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero.*/

let numero;
let contador=0;
let suma=0;
let verificador= prompt("¿Desea saber el promedio de los numero que va ingresar? (s/n)")

while (verificador != "s") {
    numero = parseFloat(prompt("Digite los numeros a los que se le va sacar el promedio, (Para ver el promedio digite 0)"))
    suma=suma+numero;
    contador++;
    promedio= suma/contador;
  }
  console.log("El promedio de los numeros ingresados es",promedio);



/*let numero;
let contador=0;
let suma=0;
while (true) {
    numero = parseFloat(prompt("Digite los numeros a los que se le va sacar el promedio, (Para ver el promedio digite 0)"))
    if (numero == 0) {
      break;
    }
    suma=suma+numero;
    contador++
}
let promedio=suma/contador;
console.log("El promedio de los numeros ingresados es",promedio);*/
