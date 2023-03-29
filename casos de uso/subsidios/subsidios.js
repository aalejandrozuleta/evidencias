function repetir(params) {

    const nombre = prompt("Digite su nombre completo");
    const estadoSocioEconomico = parseInt(prompt("Digite su estado economico de 1 a 6"));
    const antiguedad = parseInt(prompt("Digite su antiguedad en años en la empresa"));
    const mesIngreso = parseInt(prompt("Digite el mes en que ingreso a la empresa"));
    const verificacionEstadoSocioEconomico = estadoSocioEconomico>=1 && estadoSocioEconomico<=4;
    const verificacionAntiguedad = antiguedad >= 8;

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

    switch (true){
        case estadoSocioEconomico<0 || estadoSocioEconomico>6:
            console.log("Los datos del estado socio economico no son validos");
            repetir();
        break;
    
        case isNaN(antiguedad):
            console.log("La antiguedad ingresada no es valida");
            repetir();
        break;
    
        case mesIngreso<1 || mesIngreso>12:
            console.log("Error, el mes elegido no es valido");
            repetir();
        break;

        case mesIngreso >= 1 && mesIngreso<=12:
            const mesElegido = mes.find(mes => mes.id == mesIngreso);
            console.log("Sr/sra", nombre, "usted escogio el mes de ",mesElegido.mes, " y su antiguedad en la empresa es",antiguedad,"año/años");
            if (verificacionEstadoSocioEconomico == true && verificacionAntiguedad == true) {
                console.log("Usted es apoto para el subsidio de vivienda");
            }else if (verificacionEstadoSocioEconomico == false || verificacionAntiguedad==false){
                console.log("Lo sentimos usted aun no es apto para el subsidio de vivienda");
            }
        break

        default:
            console.log("Algo fallo");
            repetir();
        break;
    }
}
repetir();