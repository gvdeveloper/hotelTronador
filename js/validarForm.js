$(document).ready(() =>{
$("#nombreForm").focus();
$("#errorNombre").hide();
$("#errorApellido").hide();
$("#errorCorreo").hide();
$("#errorAsunto").hide();


//expresiones regulares

const expReg = /\w+@\w+\.+[a-z]/;

// VALIDAR FORMULARIO
$("#enviarForm").click(function(){
    var nombre = $("#nombreForm").val();
    sessionStorage.setItem("nombreUsuario", JSON.stringify(nombre));

    var apellido = $("#apellidoForm").val();
    var correo = $("#correoForm").val();
    var asunto = $("#asuntoForm").val();

        if(nombre == ""){
            $("#errorNombre").fadeIn();
            //se coloca el "return false" para que el formulario no se envíe cuando hay un error
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

            if(correo == "" || !expReg.test(correo)){
                $("#errorCorreo").fadeIn();
                return false;
            } 
                else{
                    $("#errorCorreo").fadeOut();

                    if(asunto == ""){
                        $("#errorAsunto").fadeIn();
                        return false;
                    }
                    else{
                        $("#mensajeAlert").append(`
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </symbol>   
                        </svg>
                        <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div>
                        "¡Gracias ${nombre} ${apellido}. Tu mensaje fue enviado Exitosamente!"
                        </div>
                        </div>`);
                        $("#mensajeAlert").fadeOut(7000);
                        return false;
                    }
                }
            }
        }
        
    })
})