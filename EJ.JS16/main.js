
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    const choices = {
        piedra: '🥊 Piedra',
        papel: '🖐 Papel',
        tijera: '✂️ Tijera'
    };

    function play(playerChoice) {
        // Asignamos un valor lógico para cada elección interna
        const internalChoices = ['piedra', 'papel', 'tijera'];
        const computerChoice = internalChoices[Math.floor(Math.random() * internalChoices.length)];

        let result = '';
        round++;

        // Determinar el resultado de la ronda
        if (playerChoice === computerChoice) {
            result = `Empate! Ambos eligieron ${choices[playerChoice]}`;
        } else if (
            (playerChoice === 'piedra' && computerChoice === 'tijera') ||
            (playerChoice === 'papel' && computerChoice === 'piedra') ||
            (playerChoice === 'tijera' && computerChoice === 'papel')
        ) {
            result = `¡Ganaste! ${choices[playerChoice]} vence a ${choices[computerChoice]}`;
            playerScore++;
        } else {
            result = `Perdiste. ${choices[computerChoice]} vence a ${choices[playerChoice]}`;
            computerScore++;
        }

        // Mostrar los resultados de cada ronda y puntajes de manera dinámica
        document.getElementById('gameResult').innerHTML +=
            `<div class="roundResult">
                <p><span class="playerChoice">Jugador 1:</span> ${choices[playerChoice]} 🆚 <span class="computerChoice">Computadora:</span> ${choices[computerChoice]}</p>
                <p>${result}</p>
            </div>`;
        
        document.getElementById('score').innerHTML = 
            `Puntuación: <br>Jugador: ${playerScore} | Computadora: ${computerScore}`;

        // Terminar el juego después de 3 rondas
        if (round === 3) {
            let finalMessage = playerScore > computerScore 
                ? "¡Felicidades! Has ganado el juego." 
                : (playerScore < computerScore ? "La computadora ha ganado el juego." : "¡Empate final!");
            document.getElementById('finalResult').innerHTML = finalMessage;
        }
    }