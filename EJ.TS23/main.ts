
const buttons = document.querySelectorAll<HTMLButtonElement>('.card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const soundKey = button.dataset.sound;
    
    if (soundKey) {
      const audio = new Audio(`./sounds/${soundKey}.mp3`);
      audio.play();
    }
  });
});
