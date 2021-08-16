var destino = prompt("Seleccione un destino: \n 1- Bariloche \n 2- Córdoba \n 3- Mendoza \n 4- No elegír destino y continuar");
var dias = prompt("Ingrese la cantidad de días \n 3 \n 7");
var resultado = destino + dias;

while (resultado != ""){
    switch(resultado){
        case "13":
            alert("El precio para Bariloche por 3 días es de $4000");
            break;
        case "17":
            alert("El precio para Bariloche por 7 días es de $5600");
            break;
        
        case "23":
            alert("El precio para Córdoba por 3 días es de $5000");
            break;
        case "27":
            alert("El precio para Córdoba por 7 días es de $6500");
            break;
    
        case "33":
            alert("El precio para San Luís por 3 días es de $5200");
            break;
        case "37":
            alert("El precio para San Luís por 7 días es de $7500");
            break;
        
        default:
            alert("Faltaron ingresar datos");
    }

    resultado = "";
}