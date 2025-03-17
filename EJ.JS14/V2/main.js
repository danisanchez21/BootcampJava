let array = []; 
const emojis = [
    "😀", "😂", "🥳", "😎", "😜", "🤔", "😴", "🤖", "👽", "👻", 
    "🤡", "👾", "💀", "🎃", "😈", "👹", "👺", "💩", "😺", "😸",
    "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐶", "🐱", "🐭",
    "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷",
    "🐵", "🐸", "🐙", "🦄", "🐉", "🐲", "🐊", "🦕", "🦖", "🐍"
];


function updateOutput() {
    document.getElementById("output").innerText = JSON.stringify(array);
}


function pushItem() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    array.push(randomEmoji);
    updateOutput();
}

// Función para agregar un emoji aleatorio al inicio (unshift)
function unshiftItem() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    array.unshift(randomEmoji);
    updateOutput();
}


function insertAt() {
    let index = parseInt(document.getElementById("insertIndex").value, 10);
    if (!isNaN(index) && index >= 0 && index <= array.length) { 
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        array.splice(index, 0, randomEmoji); 
        updateOutput(index);
    } else {
        alert("Índice fuera de rango");
    }
}


function removeAt() {
    let index = parseInt(document.getElementById("removeIndex").value, 10);
    if (!isNaN(index) && index >= 0 && index < array.length) {
        array.splice(index, 1); 
        updateOutput();
    } else {
        alert("Índice fuera de rango");
    }
}


function popItem() {
    if (array.length > 0) {
        array.pop();
        updateOutput();
    }
}


function shiftItem() {
    if (array.length > 0) {
        array.shift();
        updateOutput();
    }
}


updateOutput();
