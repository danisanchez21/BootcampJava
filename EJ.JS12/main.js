let numero = 1;
let i = 0;

do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);

//Tiene 6 iteraciones, porque la condición parte desde 0
//Entrará en el if cuando la la variable i sea 0
//Entrará en el else cuando la i sea algo que no sea igual a 0