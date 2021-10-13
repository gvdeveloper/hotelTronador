document.querySelector('#mostrar').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'habitaciones.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#respuesta');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                <tr>
                  <td>${item.tipo}</td>
                  <td>${item.capacidad}</td>
                  <td>${item.precio}</td>
                </tr>
              `
            }
        }
    }
}