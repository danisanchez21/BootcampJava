"use strict";
let valor1 = 0;
let valor2 = 0;
let operador = null;
document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById("pantalla");
    const botones = document.querySelectorAll(".numerico");
    const operadores = document.querySelectorAll(".operador");
    const igual = document.querySelector(".igual");
    const reset = document.querySelector(".reset");
    const del = document.querySelector(".del");
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const num = boton.getAttribute("datosNum");
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
    operadores.forEach((boton) => {
        boton.addEventListener("click", () => {
            const op = boton.getAttribute("datosOp");
            if (op === "+" || op === "-" || op === "*" || op === "/") {
                valor1 = parseFloat(pantalla.textContent);
                operador = op;
                pantalla.textContent = "0";
            }
        });
    });
    reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", () => {
        pantalla.textContent = "0";
    });
    del === null || del === void 0 ? void 0 : del.addEventListener("click", () => {
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            return;
        }
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        if (pantalla.textContent === "") {
            pantalla.textContent = "0";
        }
    });
    igual === null || igual === void 0 ? void 0 : igual.addEventListener("click", () => {
        valor2 = parseFloat(pantalla.textContent);
        let resultado = 0;
        if (operador === "+") {
            resultado = valor1 + valor2;
        }
        else if (operador === "-") {
            resultado = valor1 - valor2;
        }
        else if (operador === "*") {
            resultado = valor1 * valor2;
        }
        else if (operador === "/") {
            if (valor2 === 0) {
                pantalla.textContent = "ERROR";
                return;
            }
            resultado = valor1 / valor2;
        }
        pantalla.textContent = resultado.toString();
        operador = null;
    });
});
