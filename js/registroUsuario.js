let registrarse = document.getElementById("btn-registrarse");
    registrarse.addEventListener("click", registrarAlert);
        function registrarAlert(){
            var nombre = document.getElementById("nombreRegistro").value;
            var email = document.getElementById("emailRegistro").value;
            localStorage.setItem("nombre",nombre);
            localStorage.setItem("email", email);
            
            alert("Bienvenido, usted se ha registrado");
        }