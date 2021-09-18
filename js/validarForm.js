$(document).ready(() =>{
$("#nombreForm").focus();
$("#errorNombre").hide();
$("#errorApellido").hide();
$("#errorAsunto").hide();

$("#enviarForm").click(function(){
    var nombre = $("#nombreForm").val();
    var apellido = $("#apellidoForm").val();
    var asunto = $("#asuntoForm").val();

        if(nombre == ""){
            $("#errorNombre").fadeIn();
            return false;
        }
        else{
            $("#errorNombre").fadeOut();

            if(apellido == ""){
                $("#errorApellido").fadeIn();
                return false;
            }
            else{
                $("#errorApellido").fadeOut();

                if(asunto == ""){
                    $("#errorAsunto").fadeIn();
                    return false;
                }
            }
        }
        
    })
})
