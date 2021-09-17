$(document).ready(()=> {
    $("#hab-individual").hide();
    $("#hab-standard").hide();
    $("#hab-familiar").hide();
    $("#hab-suite").hide();

    //MOSTRAR HABITACION INDIVIDUAL
    
    $("#mostrar-individual").click(function() {
    $("#hab-individual").fadeIn(800);
    $("#hab-standard").hide();
    $("#hab-familiar").hide();
    $("#hab-suite").hide();
    });
    //FIN MOSTRAR HABITACION INDIVIDUAL

    //MOSTRAR HABITACION STANDARD
    $("#mostrar-standard").click(function() {
        $("#hab-individual").hide();
        $("#hab-standard").fadeIn(800);
        $("#hab-familiar").hide();
        $("#hab-suite").hide();
        });
    //FIN MOSTRAR HABITACION STANDARD

    //MOSTRAR HABITACION FAMILIAR
    $("#mostrar-familiar").click(function() {
        $("#hab-individual").hide();
        $("#hab-standard").hide();
        $("#hab-familiar").fadeIn(800);
        $("#hab-suite").hide();
        });
    //FIN MOSTRAR HABITACION FAMILIAR


    //MOSTRAR HABITACION SUITE
    $("#mostrar-suite").click(function() {
        $("#hab-individual").hide();
        $("#hab-standard").hide();
        $("#hab-familiar").hide();
        $("#hab-suite").fadeIn(800);
        });
    //FIN MOSTRAR HABITACION SUITE
});