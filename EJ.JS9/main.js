

function letras (texto) {

    return texto.replace(/a/gi, 'O'); 
    
}
const resultado = letras("Hola, me llamo Dani");
console.log(resultado);


// -----------------------------------------------//


function empiezaPorAca(cadena) {
    return cadena.startsWith("aca");
}


console.log(empiezaPorAca("academia")); // true
console.log(empiezaPorAca("escuela"));  // false

// -----------------------------------------------//

function saludarTresVeces(saludo) {
    console.log(saludo.repeat(3));
}

saludarTresVeces("Hola ");

