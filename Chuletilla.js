/* Instrucción = orden que le damos al lenguaje de programación
Sumiso = acata "instrucciones" (ordenes que nosotros le indicamos al ordenador)

Imperativa = Paradigma de programación en el cual "hacemos una receta"

Podemos declarar una variable con 3 keywords
- let
- var
- const
Impresión / concatenación de variables:
- Concatenación (+)  -> console.log(variable1 + " " + variable2);
- Template literals -> console.log(`${variable1} texto ${variable2}`);
*/
let nombre = "Bob";
var apellido = "🧽Esponja🧽";
const edad = 33; //number
let interruptor = false;

let calle = "Sin cartel", numero = 33; // Declaración de varias variables en una sola línea

// Concatenación
console.log("Soy " + nombre + " " + apellido + " y tengo " + edad);
// Template literals
console.log(`Soy ${nombre} ${apellido} y tengo ${edad}`);

// Typeof indica el tipo de dato con el que trabajamos
console.log(typeof nombre); //string
console.log(typeof edad); //number
console.log(typeof interruptor); //boolean
console.log(interruptor + 1); //¿boolean1? ¿2? ¿NaN Not a Number?

let sony;
console.log(typeof sony); //Undefined no tiene nada definido

let pizarra = null; //Si yo no declaro la variable como null por defecto será undefined
// por lo que necesitamos la intencionalidad de poner algo en null para que así sea.
console.log(typeof pizarra); //{} = objeto nulo

const symbol1 = Symbol("Symbol");
const symbol2 = Symbol("Symbol");
console.log(symbol1 === symbol2); //¿Son iguales?
//Aquí compara los valores en cambio arriba compara las instancias de los objetos
console.log(symbol1.description == symbol2.description);

// Objeto diccionario: RAE {key: value, key: value, key: value}
const joaquin = {
    nombre: "Joaquín",
    apellido: "Sanché pa servirle a usted mi arma!",
    equipo: "Mi cabra dice BEEEÉEE  y yo digo TIÍIIII, viva er BEEEEE TIIIII!"
}
console.table(joaquin); //Formato tabla

console.log(Object.keys(joaquin).length);

let dove = 1; // Aquí eres un número
dove = true; // Aquí transformas esto en un boolean

//           0    1     2         3                4
const arr = [1, true, "Hola", [1, 2, 3], {nombre: "asdf", edad: 23}];
console.log(arr[55]);

// Funciones
function conjuro(msg){
    console.log("Wiswarlium leviosa🪄");
    console.log(msg);
}

conjuro("Que pasa Harry Potter!");
// pythontutor.com