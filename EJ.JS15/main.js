  // ✅ Botón con jQuery para alternar el color rojo
$(document).ready(function() {
    $("#btnJQuery").click(function() {
        $("#parrafo").toggleClass("rojo");
    });
});

// ✅ Botón con JavaScript puro para alternar el color azul
document.getElementById("btnJS").addEventListener("click", function() {
    document.getElementById("parrafo").classList.toggle("azul");
});