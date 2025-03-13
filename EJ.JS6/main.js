function sumanumeros (num1, num2, num3){

return "Suma: " +(num1+num2+num3);

}

console.log(sumanumeros(1,2,3));

// -----------------------------------------------//

function nombreCompleto (nombre, apellido1, apellido2){

    console.log(nombre +" "+ apellido1 +" "+ apellido2);

}

nombreCompleto("Daniel","Sanchez","Aranega");

// -----------------------------------------------//

function dosNumeros (num1, num2){

    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(dosNumeros(5,4));
console.log(dosNumeros(5,8));
console.log(dosNumeros(5,6));



