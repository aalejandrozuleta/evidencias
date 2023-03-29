function repetir(){
    const mes = [
        {id: 1, mes: "enero"},
        {id:2, mes: "febrero"},
        {id:3,mes: "marzo"},
        {id:4,mes: "abril"},
        {id:5,mes: "mayo"},
        {id:6,mes: "junio"},
        {id:7,mes: "julio"},
        {id:8,mes: "agosto"},
        {id:9,mes: "septiembre"},
        {id:10,mes: "octubre"},
        {id:11,mes: "Noviembre"},
        {id:12,mes: "Diciembre"}
];

    const ingresarMes = parseInt(prompt("Ingrese un mes en numeros"));

    switch (true) {
        case ingresarMes<1 || ingresarMes>12:
            console.log("Error, el mes elegido no es valido");
            repetir();
        break;

        case ingresarMes >= 1 && ingresarMes<=12:
            const mesElegido = mes.find(mes => mes.id == ingresarMes);
            console.log("el mes seleccionado es ",mesElegido.mes);
        break;
        default: 
        console.log("Algo salio mal");
            break;
    }

}
repetir();