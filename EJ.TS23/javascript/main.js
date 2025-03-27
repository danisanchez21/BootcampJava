"use strict";
const buttons = document.querySelectorAll('.card');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const soundKey = button.dataset.sound;
        if (soundKey) {
            const audio = new Audio(`./sounds/${soundKey}.mp3`);
            audio.play();
        }
    });
});
