"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById("carta");
    if (!carta)
        return;
    const reverso = "./images/card-back.png";
    const frontal = "./images/card-front.png";
    carta.addEventListener("mouseenter", () => {
        carta.src = frontal;
    });
    carta.addEventListener("mouseleave", () => {
        carta.src = reverso;
    });
});
