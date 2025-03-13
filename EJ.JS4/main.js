const nombrecompleto = (nombre, apellidos) => {

    console.log(nombre +" "+apellidos);

}
nombrecompleto('Daniel','Sanchez Aranega');

// -----------------------------------------------//

function minombre(nombre){

console.log(nombre);
}

minombre(true);

// -----------------------------------------------//

function numerosinfinitos (...numeros) {

    numeros.forEach( numero => {

        console.log(numero);

    });

}

//EJEMPLO EXPLICADO:
// numerosinfinitos(1,2,3,4,5);

// function numerosinfinitos (...numeros) { // 'numeros' es un array que contiene [1, 2, 3, 4, 5]
//     numeros.forEach(numero => {          // Cada elemento de 'numeros' se pasa como argumento a 'numero'
//         console.log(numero);              // Muestra cada elemento individual
//     });
// }

// numerosinfinitos(1, 2, 3, 4, 5);
