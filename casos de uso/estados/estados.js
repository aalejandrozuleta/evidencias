function repetir() {
    const opcionElegida = parseInt(prompt("Elija 1 para usuario normal, 2 para usuario administrador"));

    const opciones = [
        {id: 1, tipo: "usuario normal"},
        {id: 2, tipo: "usuario administrador"}
    ];

    const usuarios = [
    {
        nombre: "juan",
        correo: "juan@gmail.com",
        contrasena: "juan123",
        edad: 23
    }
    ];

    const opcionesAdministrador = [
        {id: 1, tipo: "Cambiar nombre"},
        {id: 2, tipo: "Cambiar correo"},
        {id: 3, tipo: "Cambiar contraseña"},
        {id: 4, tipo: "Cambiar edad"},
        {id: 5, tipo: "Agregar usuario"}
    ];

    const user = opciones.find(opcion => opcion.id === opcionElegida);
    if (!user) {
        console.log("Opción inválida");
        return;
    }
    console.log("Usuario seleccionado:", user.tipo);

    if (user.tipo === "usuario normal") {
        const usuarioNormal = usuarios[0];
        console.log("nombre: ", usuarioNormal.nombre);
        console.log("correo: ", usuarioNormal.correo);
        console.log("contrasena: ", usuarioNormal.contrasena);
        console.log("edad: ", usuarioNormal.edad);
    } else if (user.tipo === "usuario administrador") {
        let correoAdmin = prompt("Ingrese el correo admin");
        let contrasenaAdmin = prompt("Ingrese la contraseña admin");

        while (correoAdmin !== "admin@gmail.com" || contrasenaAdmin !== "root") {
            if (correoAdmin !== "admin@gmail.com") {
            console.log("Correo incorrecto");
        }
        if (contrasenaAdmin !== "root") {
            console.log("Contraseña incorrecta");
        }
        correoAdmin = prompt("Ingrese el correo admin");
        contrasenaAdmin = prompt("Ingrese la contraseña admin");
    }
    console.log("Credenciales correctas");
    const opcionAdministradorElegida = parseInt(prompt(`seleccione una opcion ${opcionesAdministrador.map(opcion=>opcion.id + ". " + opcion.tipo).join(", ")}`))

    const opcionAdministrador = opcionesAdministrador.find(opcion => opcion.id === opcionAdministradorElegida);

    if(!opcionAdministrador){
        console.log("Opcion invalida");
        return;
    }else{
        console.log(`opcion seleccionada ${opcionAdministrador.tipo}`);
    }

    
        switch (opcionAdministrador.id) {
            case 1:
                const nuevoNombre = prompt("Ingrese el nuevo nombre");
                usuarios[0].nombre = nuevoNombre;
                console.log("Nombre actualizado correctamente");
                console.log(`Nombre actualizado a ${usuarios[0].nombre}`);
                break;
            case 2:
                const nuevoCorreo = prompt("Ingrese el nuevo correo");
                usuarios[0].correo = nuevoCorreo;
                console.log("Correo actualizado correctamente");
                console.log(`Correo actualizado a ${usuarios[0].correo}`);
                break;
            case 3:
                const nuevaContrasena = prompt("Ingrese la nueva contraseña");
                usuarios[0].contrasena = nuevaContrasena;
                console.log("Contraseña actualizada correctamente");
                break;
            case 4:
                const nuevaEdad = parseInt(prompt("Ingrese la nueva edad"));
                usuarios[0].edad = nuevaEdad;
                console.log("Edad actualizada correctamente");
                console.log(`Edad actualizada a ${usuarios[0].edad}`);
                break;
            case 5:
                const nuevoUsuario = {
                    nombre: prompt("Ingrese el nombre del nuevo usuario"),
                    correo: prompt("Ingrese el correo del nuevo usuario"),
                    contrasena: prompt("Ingrese la contraseña del nuevo usuario"),
                    edad: parseInt(prompt("Ingrese la edad del nuevo usuario"))
                };
                usuarios.push(nuevoUsuario);
                console.log("Usuario agregado correctamente");
                console.log(usuarios[1]);
                break;
            default:
                console.log("Opción inválida");
                break;
        }
    }
}
repetir();