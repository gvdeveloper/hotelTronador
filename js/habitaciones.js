/* const habitaciones = [
    {tipo: "Individuales", capacidad: "1 Persona", precio: "$2400"},
    {tipo: "Standard", capacidad: "2 Personas", precio: "$3000"},
    {tipo: "Familiar", capacidad: "4 Personas", precio: "$4000"},
    {tipo: "Suite", capacidad: "2 Personas", precio: "$4600"}
]

var habitacionesMap = habitaciones.map(function(habitacion){

}) */

//MOSTRAR HABITACION INDIVIDUALES
$("#mostrar-individual").click(function() {
    $("#hab-individual").append(`
        <div class="card-individual">
            <div class="img-card">
                <img src="./img/habitaciones/individual/individual.jpg" alt="">
            </div>
            <div class="info">
                <h2>Individual</h2>
                <h3>Desde <span>$2400</span></h3>
                <div class="caracteristicas">
                <p><span class="material-icons-round">person</span><span class="span-bold">Capacidad:</span> 1 persona</p>
                <p><span class="material-icons-round">tv</span>TV</p>
                <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                </div>
                
                
                <div class="equipamiento-habitacion">
                    <h5><span>Equipada con:</span></h5>
                <div class="info-equipamiento">
                <div class="info-equipamientoUno">
                    <p><span class="material-icons-round">wifi</span>Wifi Libre</p>
                    <p><span class="material-icons-round">tv</span>TV</p>
                    <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                </div>
                <div class="info-equipamientoDos">
                    <p><span class="material-icons-round">bathtub</span>Bañera</p>
                    <p><span class="material-icons-round">lock</span>Caja Fuerte</p>
                </div>
                </div>
                </div>
            </div>
        </div>
                    `);
   
    });
//FIN MOSTRAR HABITACION INDIVIDUALES

//MOSTRAR HABITACION STANDARD
$("#mostrar-standard").click(function() {
    $("#hab-standard").append(`
        <div class="card-individual">
            <div class="img-card">
            <img src="./img/habitaciones/standard/standard_individuales.jpg" alt="">
            </div>
            <div class="info">
                <h2>Standard</h2>
                <h3>Desde <span>$3000</span></h3>
                <div class="caracteristicas">
                <p><span class="material-icons-round">person</span><span class="span-bold">Capacidad:</span> 2 personas</p>
                <p><span class="material-icons-round">tv</span>TV</p>
                <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                </div>
                
                <div class="equipamiento-habitacion">
                    <h5><span>Equipada con:</span></h5>
                <div class="info-equipamiento">
                    <div class="info-equipamientoUno">
                    <p><span class="material-icons-round">wifi</span>Wifi Libre</p>
                    <p><span class="material-icons-round">tv</span>TV</p>
                    <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                    </div>
                    <div class="info-equipamientoDos">
                    <p><span class="material-icons-round">bathtub</span>Bañera</p>
                    <p><span class="material-icons-round">lock</span>Caja Fuerte</p>
                    </div>
                </div>
            </div>
        </div>
    `);
    });
//FIN MOSTRAR HABITACION STANDARD



//MOSTRAR HABITACION FAMILIAR
$("#mostrar-familiar").click(function() {
    $("#hab-familiar").append(`
        <div class="card-individual">
            <div class="img-card">
                <img src="./img/habitaciones/familiares/familiares.jpg" alt="">
            </div>
            <div class="info">
                <h2>Familiar</h2>
                <h3>Desde <span>$4000</span></h3>
                <div class="caracteristicas">
                    <p><span class="material-icons-round">person</span><span class="span-bold">Capacidad:</span> 4 personas</p>
                    <p><span class="material-icons-round">tv</span>TV</p>
                    <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                </div>
                
                <div class="equipamiento-habitacion">
                    <h5><span>Equipada con:</span></h5>
                    <div class="info-equipamiento">
                        <div class="info-equipamientoUno">
                            <p><span class="material-icons-round">wifi</span>Wifi Libre</p>
                            <p><span class="material-icons-round">tv</span>TV</p>
                            <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                        </div>
                        <div class="info-equipamientoDos">
                            <p><span class="material-icons-round">bathtub</span>Bañera</p>
                            <p><span class="material-icons-round">lock</span>Caja Fuerte</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    `);
    });
//FIN MOSTRAR HABITACION FAMILIAR





//MOSTRAR HABITACION SUITE
$("#mostrar-suite").click(function() {
    $("#hab-suite").append(`
        <div class="card-individual">
                <div class="img-card">
                    <img src="./img/habitaciones/suite/suite.jpg" alt="">
                </div>
                <div class="info">
                    <h2>Suite</h2>
                    <h3>Desde <span>$4600</span></h3>
                    <div class="caracteristicas">
                      <p><span class="material-icons-round">person</span><span class="span-bold">Capacidad:</span> 2 personas</p>
                      <p><span class="material-icons-round">tv</span>TV</p>
                      <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                    </div>
                    
                    
                    <div class="equipamiento-habitacion">
                      <h5><span>Equipada con:</span></h5>
                    <div class="info-equipamiento">
                      <div class="info-equipamientoUno">
                        <p><span class="material-icons-round">wifi</span>Wifi Libre</p>
                        <p><span class="material-icons-round">tv</span>TV</p>
                        <p><span class="material-icons-round">kitchen</span>Frigobar</p>
                      </div>
                      <div class="info-equipamientoDos">
                        <p><span class="material-icons-round">bathtub</span>Bañera</p>
                        <p><span class="material-icons-round">lock</span>Caja Fuerte</p>
                        <p><span class="material-icons-round">hot_tub</span>Jazuzzi</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
                    `);
    });
//FIN MOSTRAR HABITACION SUITE













