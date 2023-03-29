const letra = "z";
const precio = 48.5;
const juego = "fifa18";

let decision = prompt("Que juego quieres comprar");

if(decision== juego || decision==letra || decision == "fifa"){
    console.log("Juego comprado, tiene un valor de ",precio);
}

else{
    console.log("Juego no disponible");
}