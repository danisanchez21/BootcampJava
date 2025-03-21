"use strict";
// let suma:number, restar:number, multiplicar:number, dividir :number;
let valor1;
let valor2;
document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById("pantalla");
    const botones = document.querySelectorAll(".numerico");
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const num = boton.getAttribute("data-num");
            if (num !== null) {
                if (pantalla.textContent === "0") {
                    pantalla.textContent = num;
                }
                else {
                    pantalla.textContent += num;
                }
            }
        });
    });
});
function sumar(valor1, valor2) {
    return (valor1 + valor2);
}
function restar(valor1, valor2) {
    return (valor1 - valor2);
}
function multiplicar(valor1, valor2) {
    return (valor1 * valor2);
}
function dividir(valor1, valor2) {
    if (valor2 === 0) {
        throw new Error("No es posible dividir entre 0");
    }
    return (valor1 / valor2);
}
const prueba = sumar(2, 3);
console.log(prueba);
