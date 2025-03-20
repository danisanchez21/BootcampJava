"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const interruptor = document.getElementById("interruptor");
    const bombilla = document.getElementById("bombilla");
    if (!interruptor || !bombilla)
        return;
    const apagadoBtn = "./images/boff.jpg";
    const encendidoBtn = "./images/bon.jpg";
    const apagadaBomb = "./images/off.jpg";
    const encendidaBomb = "./images/on.jpg";
    let estadoEncendido = false;
    interruptor.addEventListener("click", () => {
        estadoEncendido = !estadoEncendido;
        //MANERA ALTERNATIVA:
        // interruptor.src = estadoEncendido ? encendidoBtn : apagadoBtn;
        // bombilla.src = estadoEncendido ? encendidaBomb : apagadaBomb;
        if (estadoEncendido) {
            interruptor.src = encendidoBtn;
            bombilla.src = encendidaBomb;
        }
        else {
            interruptor.src = apagadoBtn;
            bombilla.src = apagadaBomb;
        }
    });
});
