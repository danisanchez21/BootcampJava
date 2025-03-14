// EJERCICIO
// A partir de la pizza, sustituye todos los elementos del array por cervezas:
// 🍔 🍟 🍔 🍕 🍵 🍕 🍪 🍵 🍲

let comidas = ['🍔', '🍟', '🍔', '🍕', '🍵', '🍕', '🍪', '🍵', '🍲'];

// Encontrar el índice de la primera 🍕
let index = comidas.findIndex(item => item === '🍕');

// Mapear el array, pero solo reemplazar los elementos desde la primera 🍕 en adelante
let nuevasComidas = comidas.map((item, i) => i >= index ? '🍺' : item);

console.log(nuevasComidas);




// Encontrar si existe un elemento en el array que sea una piña.
// 🍕 🍕 🍍 🍕 🍕 🍕

let comidas2 = ['🍕', '🍕', '🍍', '🍕', '🍕', '🍕'];
let index2 = comidas2.findIndex(item => item === '🍍');
if (index2 !== -1) {
    console.log("Hay una piña 🍍");
} else {
    console.log("No hay una piña ✝️");
}

// Quita la piña del siguiente array:
// 🍕 🍕 🍍 🍕 🍕

// let comidas3 = ['🍕', '🍕', '🍍', '🍕', '🍕', ];

// if (comidas3.includes('🍍')) {
//     let comidas3 = ['🍕', '🍕', '🍕', '🍕', ];
//     console.log(comidas3);
// }

let comidas3 = ['🍕', '🍕', '🍍', '🍕', '🍕', '🍕'];

// Filtrar todo excepto las 🍍
let nuevasComidas3 = comidas3.filter(item => item !== '🍍');

console.log(nuevasComidas3);



// A partir del siguiente array 🍓 🍑 🍓 🍑, convierte todas las fresas en 🍄.

let comidas4 = ['🍕', '🍕', '🍍', '🍕', '🍍', '🍕'];

// Reemplazar todas las piñas 🍍 por manzanas 🍎
let nuevasComidas4 = comidas4.map(item => item === '🍍' ? '🍎' : item);

console.log(nuevasComidas4);


// Añade el siguiente icono 😶‍🌫️ inmediatamente después de cada 🌶 en el siguiente array:
// 🌶 🥤 🌶 🥤 🌶 🥤

let comidas5 = ['🌶','🥤','🌶','🥤','🌶','🥤'];

let nuevasComidas5 = comidas5.findIndex().slice()


// Añade una 🃏 (carta comodín) entre medio de dos cartas. Por ejemplo:
// 🃏 🂡 🃏 🂡 🃏
// En el siguiente array: 🂡 🂡 🂡 🂡