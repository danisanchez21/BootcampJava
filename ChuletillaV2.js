'use strict';

/*
Chuletilla del profesor:

Instrucción = orden que le damos al lenguaje de programación
Sumiso = acata "instrucciones" (órdenes que nosotros le indicamos al ordenador)

Imperativa = Paradigma de programación en el cual "hacemos una receta"

Podemos declarar una variable con 3 keywords:
- let
- var
- const

Impresión / concatenación de variables:
- Concatenación (+)  -> console.log(variable1 + " " + variable2);
- Template literals -> console.log(`${variable1} texto ${variable2}`);
*/

// Declaración de variables y ejemplos básicos:
let nombre = "Bob";
var apellido = "🧽Esponja🧽";
const edad = 33; // number
let interruptor = false;
let calle = "Sin cartel", numero = 33; // Declaración de varias variables en una sola línea

// Concatenación:
console.log("Soy " + nombre + " " + apellido + " y tengo " + edad);
// Template literals:
console.log(`Soy ${nombre} ${apellido} y tengo ${edad}`);

// Tipo de datos:
console.log(typeof nombre);       // string
console.log(typeof edad);         // number
console.log(typeof interruptor);  // boolean
console.log(interruptor + 1);       // Suma: false se convierte a 0, resultado 1

let sony;
console.log(typeof sony);         // undefined, no tiene ningún valor asignado

let pizarra = null;              // Asignamos intencionalmente null para indicar "ausencia de valor"
console.log(typeof pizarra);      // "object" (comportamiento histórico en JS)

// Símbolos:
const symbol1 = Symbol("Symbol");
const symbol2 = Symbol("Symbol");
console.log(symbol1 === symbol2);             // false: cada Symbol es único
console.log(symbol1.description == symbol2.description); // true: comparan sus descripciones

// Objeto literal (diccionario):
const joaquin = {
    nombre: "Joaquín",
    apellido: "Sanché pa servirle a usted mi arma!",
    equipo: "Mi cabra dice BEEEÉEE  y yo digo TIÍIIII, viva er BEEEEE TIIIII!"
};
console.table(joaquin);                      // Imprime el objeto en formato tabla
console.log(Object.keys(joaquin).length);    // Cantidad de propiedades

// Asignación dinámica de tipos:
let dove = 1;  // Inicialmente es un número
dove = true;   // Ahora es un boolean

// Array de ejemplos:
//           0    1     2         3                4
const arr = [1, true, "Hola", [1, 2, 3], {nombre: "asdf", edad: 23}];
console.log(arr[55]); // undefined, ya que el índice 55 no existe

// Función tradicional:
function conjuro(msg){
    console.log("Wiswarlium leviosa🪄");
    console.log(msg);
}
conjuro("Que pasa Harry Potter!");

// ---------------------------------------------------------------------
// MEJORAS Y CONCEPTOS ADICIONALES

// 1. Uso de 'use strict' para detectar errores comunes (ya agregado al inicio).

// 2. Diferencias entre let, var y const:
//    - var: ámbito de función y se hoistea.
//    - let y const: ámbito de bloque. Se recomienda usar const por defecto y let cuando se prevea reasignación.

// 3. Funciones Flecha (Arrow Functions):
const saludar = (nombre) => {
    console.log(`Hola, ${nombre}`);
};
saludar("Alice");

// 4. Desestructuración de objetos y arrays:
// Desestructuración de un objeto:
const { nombre: nombreJoaquin, apellido: apellidoJoaquin } = joaquin;
console.log(`Desestructuración objeto: ${nombreJoaquin} ${apellidoJoaquin}`);

// Desestructuración de un array:
const [primero, , tercero] = arr; // Extrae el primer y tercer elemento
console.log(`Desestructuración array: ${primero}, ${tercero}`);

// 5. Métodos de Arrays:
// push: Agregar elemento al final
// pop: Remover el último elemento
// map: Transformar cada elemento
// filter: Filtrar elementos según una condición
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log("Array después de push:", numeros);

numeros.pop();
console.log("Array después de pop:", numeros);

const dobles = numeros.map(num => num * 2);
console.log("Array con números dobles:", dobles);

const pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// 6. Estructuras de control: Condicionales y bucles.
// Condicional if/else:
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Bucle for:
for (let i = 0; i < arr.length; i++) {
    console.log(`Elemento ${i} de arr:`, arr[i]);
}

// 7. Comentario sobre null vs undefined:
//    - undefined: Variable declarada sin asignación.
//    - null: Valor asignado intencionalmente para indicar ausencia de valor.
