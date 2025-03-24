"use strict";
function getChuckJoke() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch("https://api.chucknorris.io/jokes/random", requestOptions)
        .then((response) => response.json())
        .then((data) => {
        const jokeBox = document.getElementById("divBroma");
        if (jokeBox) {
            jokeBox.textContent = data.value;
        }
    })
        .catch((error) => {
        console.error("Error al obtener chiste:", error);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("siguienteChiste");
    if (button) {
        button.addEventListener("click", getChuckJoke);
    }
    getChuckJoke();
});
