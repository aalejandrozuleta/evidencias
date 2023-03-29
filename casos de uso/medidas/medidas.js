let length = parseInt(prompt("Digite la longitud a convertir")); 
let fromUnit = prompt("Digite la unidad de la medida"); 
let toUnit = prompt("Digite la unidad a la que desea convertir"); 

let result;

switch (fromUnit) {
    case "m":
        switch (toUnit) {
    case "cm":
        result = length * 100;
    break;
    case "km":
        result = length / 1000;
    break;
    case "ft":
        result = length * 3.28084;
    break;
    default:
        console.log("Unidad de medida de destino no válida.");
    }
    break;
        case "cm":
            switch (toUnit) {
                case "m":
                result = length / 100;
            break;
        case "km":
            result = length / 100000;
        break;
        case "ft":
            result = length / 30.48;
        break;
        default:
            console.log("Unidad de medida de destino no válida.");
    }
    break;
        case "km":
            switch (toUnit) {
        case "m":
            result = length * 1000;
        break;
        case "cm":
            result = length * 100000;
        break;
        case "ft":
            result = length * 3280.84;
        break;
        default:
            console.log("Unidad de medida de destino no válida.");
    }
        break;
        case "ft":
            switch (toUnit) {
            case "m":
                result = length / 3.28084;
            break;
        case "cm":
            result = length * 30.48;
        break;
        case "km":
            result = length / 3280.84;
        break;
        default:
            console.log("Unidad de medida de destino no válida.");
    }
        break;
    default:
        console.log("Unidad de medida original no válida.");
}

    console.log(`La longitud de ${length} ${fromUnit} es igual a ${result} ${toUnit}.`);
