let resultadoJugador = 0;
let resultadoPC = 0;
let round = 0;
let isBestOfThree = true;  // Modo "mejor de 3"

const opciones = {
    piedra: '🥊 Piedra',
    papel: '🖐 Papel',
    tijera: '✂️ Tijera'
};

function play(opcionJugador) {
    if (isGameOver()) return;  // Si la partida ha terminado, no hacer nada más

    const opcionesInternas = ['piedra', 'papel', 'tijera'];
    const opcionPC = opcionesInternas[Math.floor(Math.random() * opcionesInternas.length)];

    let result = '';
    round++;

    if (opcionJugador === opcionPC) {
        result = `¡<span class="player-empate">Empate</span>! Ambos eligieron ${opciones[opcionJugador]}`;
    } else if (
        (opcionJugador === 'piedra' && opcionPC === 'tijera') ||
        (opcionJugador === 'papel' && opcionPC === 'piedra') ||
        (opcionJugador === 'tijera' && opcionPC === 'papel')
    ) {
        result = `¡<span class="player-text">Ganaste</span>! ${opciones[opcionJugador]} vence a ${opciones[opcionPC]}`;
        resultadoJugador++;
    } else {
        result = `¡<span class="player-text2">Perdiste</span>! ${opciones[opcionPC]} vence a ${opciones[opcionJugador]}`;
        resultadoPC++;
    }

    // Agregar la línea separadora y mostrar los resultados de la ronda
    document.getElementById('resultadoTirada').innerHTML += `
        <hr style="border: 1px solid blue; margin: 10px 0;">
        <div class="roundResult">
            <p><span class="player-text">Jugador</span>: ${opciones[opcionJugador]} 🤼‍♂️
            <span class="player-text2">Ordenador</span>: ${opciones[opcionPC]}</p>
            <p>${result}</p>
        </div>`;

    // Actualizar la puntuación
    document.getElementById('puntuacion').innerHTML = 
        `Puntuación: <br><span class="player-text">Jugador</span>: ${resultadoJugador} | 
        <span class="player-text2">Ordenador</span>: ${resultadoPC}`;

    // Verificar si el juego ha llegado al final en el modo mejor de 3
    if (round === 3 && isBestOfThree) {
        finishGame();
    }

    // Verificar si los botones deben moverse
    checkStickyButtons();

    // Hacer scroll a la última tirada
    scrollToLastTirada();

    // Resaltar la última tirada
    highlightLastTirada();
}

// Mover el scroll a la última tirada
function scrollToLastTirada() {
    setTimeout(() => {
        const lastTirada = document.querySelector(".roundResult:last-child");
        if (lastTirada) {
            lastTirada.scrollIntoView({ behavior: "smooth", block: "end" });
        }

        // Desplazamos un poco más hacia abajo para no dejarlo centrado
        setTimeout(() => {
            window.scrollBy({ top: 100, left: 0, behavior: "smooth" }); // Ajustar el valor de 'top' para el desplazamiento adicional
        }, 300); // Espera 300 ms antes de aplicar el desplazamiento adicional
    
    }, 100);  // Aseguramos que el DOM esté completamente actualizado
}

function highlightLastTirada() {
    setTimeout(() => {
        const allTiradas = document.querySelectorAll(".roundResult");
        allTiradas.forEach(tirada => tirada.classList.remove("highlight")); // Elimina la clase de todas

        const lastTirada = document.querySelector(".roundResult:last-child");
        if (lastTirada) {
            lastTirada.classList.add("highlight"); // Agrega la clase solo al último
        }
    }, 100);  // Asegura que la última tirada esté actualizada
}

function toggleMode() {
    isBestOfThree = !isBestOfThree;
    document.getElementById('modoJuego').innerText = isBestOfThree ? "Modo: Mejor de 3" : "Modo: Ilimitado";
}

function endGame() {
    round = 3;  // Finaliza el juego inmediatamente
    finishGame();

    // Enfocar la vista en el resultado final
    const resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.scrollIntoView({ behavior: "smooth", block: "start" });

    // Mostrar el botón de reiniciar
    const reiniciarBtn = document.getElementById('reiniciarBtn');
    reiniciarBtn.classList.remove('oculto'); // Elimina la clase para hacerlo visible

    // ✅ Si está en modo Ilimitado, mover el botón a la izquierda
    if (!isBestOfThree) {
        reiniciarBtn.classList.add('reiniciar-izquierda');
    } else {
        reiniciarBtn.classList.remove('reiniciar-izquierda'); // Asegurar que no se quede en la izquierda
    }
}

function finishGame() {
    let finalMessage = resultadoJugador > resultadoPC 
        ? "¡Felicidades! 🏆Has ganado el juego." 
        : (resultadoJugador < resultadoPC ? "El 💻ordenador ha ganado el juego." : "⚔ ¡Empate final! ⚔");
    document.getElementById('resultadoFinal').innerHTML = finalMessage;

    // Esconder los botones de selección
    document.querySelector('.botonesContenedor').style.display = 'none';

    // ✅ Mostrar el botón de reinicio
    const reiniciarBtn = document.getElementById('reiniciarBtn');
    reiniciarBtn.classList.remove('oculto'); // Elimina la clase para hacerlo visible
}


function reiniciarJuego() {
    // Reiniciar todas las variables
    resultadoJugador = 0;
    resultadoPC = 0;
    round = 0;

    // Limpiar resultados anteriores
    document.getElementById('resultadoTirada').innerHTML = '';
    document.getElementById('puntuacion').innerHTML = '';
    document.getElementById('resultadoFinal').innerHTML = '';

    // Mostrar los botones de selección nuevamente
    document.querySelector('.botonesContenedor').style.display = 'flex';

    // Ocultar el botón de reiniciar
    const reiniciarBtn = document.getElementById('reiniciarBtn');
    reiniciarBtn.classList.add('oculto');  // Volver a ocultar el botón

}

function isGameOver() {
    // La partida solo puede continuar si no se ha terminado en el modo "mejor de 3"
    return (round === 3 && isBestOfThree);  // En modo ilimitado, no se detiene automáticamente
}

// ✅ Evento para hacer scroll cuando los botones están `sticky`
window.addEventListener('scroll', checkStickyButtons);

function checkStickyButtons() {
    const buttons = document.querySelector('.botonesContenedor');
    const resultList = document.getElementById('resultadoTirada');
    const h1Text = document.getElementById('h1Text');

    // Ajuste de tolerancia antes de que los botones se vuelvan "sticky"
    const threshold = window.innerHeight * 0.8;  // Ajusta el valor de tolerancia (80% de la ventana)
    
    // Si la altura del contenido supera el umbral de tolerancia, los botones se vuelven sticky
    if (resultList.scrollHeight > threshold) {
        buttons.classList.add('sticky');
    } else {
        buttons.classList.remove('sticky');
    }

    // Hacer desaparecer el h1 antes de que los botones lleguen a él
    const h1Position = h1Text.getBoundingClientRect().top;  // Obtener la posición de h1 en la pantalla
    if (h1Position < window.innerHeight * 0.5) { // Si la parte superior de h1 está cerca de la mitad de la ventana
        h1Text.classList.add('oculto');
    } else {
        h1Text.classList.remove('oculto');
    }
}
