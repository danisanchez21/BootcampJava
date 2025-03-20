document.addEventListener("DOMContentLoaded", () => {
    const interruptor = document.getElementById("interruptor") as HTMLImageElement;
    const bombilla = document.getElementById("bombilla") as HTMLImageElement;
    const brilloBombilla = document.getElementById("brillo") as HTMLInputElement;

    if (!interruptor || !bombilla || !brilloBombilla) {
        console.error("Uno o más elementos no fueron encontrados en el DOM");
        return;
    }

    const apagadoBtn = "./images/boff.jpg";
    const encendidoBtn = "./images/bon.jpg";
    const apagadaBomb = "./images/off.jpg";
    const encendidaBomb = "./images/on.jpg";

    let estadoEncendido: boolean = false;
    let brilloActual: number = 1; 


    brilloBombilla.addEventListener("input", () => {
        if (!estadoEncendido) return; 

        brilloActual = parseFloat(brilloBombilla.value);
        console.log("Brillo ajustado a:", brilloActual);

        actualizarBrillo();
    });

    interruptor.addEventListener("click", () => {
        estadoEncendido = !estadoEncendido;

        if (estadoEncendido) {
            interruptor.src = encendidoBtn;
            bombilla.src = encendidaBomb;
            actualizarBrillo(); 
        } else {
            interruptor.src = apagadoBtn;
            bombilla.src = apagadaBomb;
            bombilla.style.filter = "brightness(0.3)";
            bombilla.style.opacity = "0.3";
            bombilla.style.boxShadow = "none";
            brilloBombilla.value = "1"; // Reset slider
        }
    });

    // 🔥 Función que actualiza la iluminación de la bombilla
    function actualizarBrillo() {
        if (!estadoEncendido) return;

        bombilla.style.filter = `brightness(${brilloActual})`;
        bombilla.style.opacity = `${brilloActual / 2 + 0.5}`;
        bombilla.style.boxShadow = `0 0 ${brilloActual * 40}px rgba(255, 165, 0, ${brilloActual / 2})`;
    }
});
