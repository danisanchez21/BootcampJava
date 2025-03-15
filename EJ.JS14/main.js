let array = []; // Definir el array vacío

// Función para actualizar la pantalla
function updateOutput() {
    document.getElementById("output").innerText = JSON.stringify(array);
}

// Función para agregar con push() (toma el valor desde el input)
function pushItem() {
    let inputValue = document.getElementById("insertIndex").value; 
    if (inputValue.trim() !== "") {
        array.push(inputValue); // Agregar al final del array
        updateOutput();
    }
}

// Función para agregar con unshift() (toma el valor desde el input)
function unshiftItem() {
    let inputValue = document.getElementById("insertIndex").value;
    if (inputValue.trim() !== "") {
        array.unshift(inputValue); // Agregar al inicio del array
        updateOutput();
    }
}

// Función para insertar en un índice específico (toma el valor del input, pero la posición desde prompt)
function insertAt() {
    let newItem = document.getElementById("insertIndex").value; // Tomar el valor desde el input
    let index = parseInt(prompt("¿En que posición quieres que se inserte?"), 10); // Pedir la posición con prompt()

    if (!isNaN(index) && index >= 0 && index <= array.length && newItem.trim() !== "") {
        array.splice(index, 0, newItem); // Insertar en la posición especificada
        updateOutput();
    } else {
        alert("Posición incorrecta. Tienes que poner una posición real, entre 0 y " + (array.length -1));
    
    }
}

// Función para eliminar el último elemento (pop)
function popItem() {
    if (array.length > 0) {
        array.pop();
        updateOutput();
    }
}

// Función para eliminar el primer elemento (shift)
function shiftItem() {
    if (array.length > 0) {
        array.shift();
        updateOutput();
    }
}

// Función para eliminar en un índice específico (toma la posición desde el input)
function removeAt() {
    let index = parseInt(document.getElementById("removeIndex").value, 10);
    if (!isNaN(index) && index >= 0 && index < array.length) {
        array.splice(index, 1);
        updateOutput();
    }
}

// Inicializar la pantalla con el array vacío
updateOutput();
