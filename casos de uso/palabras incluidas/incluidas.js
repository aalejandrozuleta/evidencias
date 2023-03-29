let oracion = "ADSO desarolladores";
let verificacion = oracion.includes("ADSO" && "desarolladores");

switch (verificacion) {
    case true:
        console.log(`la oracion: ${oracion}, si contiene las palabras ADSO y desarrolladores`);
        break;

    default:
        console.log(`la oracion: ${oracion}, No contiene las palabras ADSO y desarrolladores`);
        break;
}