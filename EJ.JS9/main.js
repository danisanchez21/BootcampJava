

function letras (texto) {

    return texto.replace(/a/gi, 'O'); 
    
}
const resultado = letras("Hola, me llamo Dani");
console.log(resultado);