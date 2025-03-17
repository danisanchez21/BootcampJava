let resultadoJugador = 0;
let resultadoPC = 0;
let round = 0;

const opciones = {
    piedra: '🥊 Piedra',
    papel: '🖐 Papel',
    tijera: '✂️ Tijera'
};

function play(opcionJugador) {
    const opcionesInternas = ['piedra', 'papel', 'tijera'];
    const opcionPC = opcionesInternas[Math.floor(Math.random() * opcionesInternas.length)];

    let result = '';
    round++;

    if (opcionJugador === opcionPC) {
        result = `Empate! Ambos eligieron ${opciones[opcionJugador]}`;
    } else if (
        (opcionJugador === 'piedra' && opcionPC === 'tijera') ||
        (opcionJugador === 'papel' && opcionPC === 'piedra') ||
        (opcionJugador === 'tijera' && opcionPC === 'papel')
    ) {
        result = `¡Ganaste! ${opciones[opcionJugador]} vence a ${opciones[opcionPC]}`;
        resultadoJugador++;
    } else {
        result = `Perdiste. ${opciones[opcionPC]} vence a ${opciones[opcionJugador]}`;
        resultadoPC++;
    }

    // Agregar la línea separadora y mostrar los resultados de la ronda
    document.getElementById('resultadoTirada').innerHTML += `
        <hr style="border: 1px solid blue; margin: 10px 0;">
        <div class="roundResult">
            <p><span class="opcionJugador"><span class="player-text">Jugador</span>: ${opciones[opcionJugador]} 🆚 
            <span class="opcionPC"><span class="player-text2">Ordenador</span>: ${opciones[opcionPC]}</p>
            <p>${result}</p>
        </div>`;

    // Actualizar la puntuación
    document.getElementById('puntuacion').innerHTML = 
        `Puntuación: <br><span class="player-text">Jugador</span>: ${resultadoJugador} | 
        <span class="player-text2">Ordenador</span>: ${resultadoPC}`;

    // Terminar el juego después de 3 rondas
    if (round === 3) {
        let finalMessage = resultadoJugador > resultadoPC 
            ? "¡Felicidades! Has ganado el juego." 
            : (resultadoJugador < resultadoPC ? "El ordenador ha ganado el juego." : "¡Empate final!");
        document.getElementById('resultadoFinal').innerHTML = finalMessage;
    }

    // Verificar si los botones deben moverse
    checkStickyButtons();

    // Si los botones ya están sticky, desplazar la vista a la última tirada con extra scroll
    if (document.querySelector('.botonesContenedor.sticky')) {
        scrollToLastTirada();
    }

    // Resaltar solo la última tirada
    highlightLastTirada();
}

// ✅ Ahora el evento `scroll` se ejecuta solo una vez, fuera de `play`
window.addEventListener('scroll', checkStickyButtons);

function checkStickyButtons() {
    const buttons = document.querySelector('.botonesContenedor');
    const resultList = document.getElementById('resultadoTirada');

    // Verifica si la lista de tiradas es lo suficientemente grande para hacer scroll
    if (resultList.scrollHeight > window.innerHeight) {
        buttons.classList.add('sticky');
    } else {
        buttons.classList.remove('sticky');
    }
}

// ✅ Función para hacer scroll a la última tirada solo si los botones están `sticky`
function scrollToLastTirada() {
    setTimeout(() => {
        const lastTirada = document.querySelector(".roundResult:last-child");
        if (lastTirada) {
            lastTirada.scrollIntoView({ behavior: "smooth", block: "end" });

            // 🔥 Baja un poco más para asegurar que el último resultado se vea bien
            setTimeout(() => {
                window.scrollBy({ top: 50, left: 0, behavior: "smooth" });
            }, 300);
        }
    }, 100);
}



// ✅ Función para resaltar solo la última tirada
function highlightLastTirada() {
    setTimeout(() => {
        const allTiradas = document.querySelectorAll(".roundResult");
        allTiradas.forEach(tirada => tirada.classList.remove("highlight")); // Elimina la clase de todas

        const lastTirada = document.querySelector(".roundResult:last-child");
        if (lastTirada) {
            lastTirada.classList.add("highlight"); // Agrega la clase solo al último
        }
    }, 100);
}
