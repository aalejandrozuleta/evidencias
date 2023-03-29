let contrasena = prompt("Ingrese una contraseña entre 8 y 15 caracteres con un espacio");
let verificacion = (contrasena.length > 8 || contrasena.length < 15 && contrasena.includes(" "));

switch (verificacion) {
    case true:
        console.log("Contraseña valida");
        break;

    case false:
        console.log("contraseña no valida");
    break;
}
