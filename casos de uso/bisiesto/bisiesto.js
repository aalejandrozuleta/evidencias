let ano = 2024;
let verificacion = ano % 4 == 0 && ano%100 !=0;

switch(verificacion){
    case true:
        console.log(`el año ${ano} es bisiesto`);
    break;

    default:
        console.log(`el año ${ano} no es bisiesto`);
    break;
}