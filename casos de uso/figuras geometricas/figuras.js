const figura = prompt("A que figura desea encontrarle el area, (triangulo),(rectangulo) o (circulo)");
const num1 = parseFloat(prompt("Digite un numero"));
const num2 = parseFloat(prompt("Digite el segundo numero"));


switch (true) {
    case figura === "triangulo":
        let areaTriangulo = (num1*num2)/2;
        console.log("El area del trangulo es",areaTriangulo);
    break;

    case figura === ("rectangulo"):
        let  areaRectangulo = (num1 * num2);
        console.log("El area del rectangulo es",areaRectangulo);
    break;

    case figura === ("circulo"):
        let areaCirculo = (3.14 * num1) **2;
        console.log("El area del circulo es",areaCirculo);
        break;

    default:
        console.log("Algo salio mal");
    break;
}