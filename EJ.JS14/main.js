const input = document.getElementById("numeroInput");

input.addEventListener("wheel", (event) => {
    event.preventDefault(); // Evita el scroll de la página
    let valor = parseInt(input.value) || 0; // Obtiene el número actual

    if (event.deltaY < 0) {
        valor++; // Aumenta si el scroll es hacia arriba
    } else {
        valor--; // Disminuye si el scroll es hacia abajo
    }

    input.value = valor; // Actualiza el valor en el input
});

