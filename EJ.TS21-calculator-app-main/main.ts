let valor1: number = 0;
let valor2: number = 0;
let operador: string | null = null;

document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla") as HTMLDivElement;
  const botones = document.querySelectorAll(".numerico");
  const operadores = document.querySelectorAll(".operador");
  const igual = document.querySelector(".igual") as HTMLButtonElement | null;

  // Botones numéricos
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const num = boton.getAttribute("datosNum");
      if (num !== null) {
        if (pantalla.textContent === "0") {
          pantalla.textContent = num;
        } else {
          pantalla.textContent += num;
        }
      }
    });
  });

  // Botones de operador
  operadores.forEach((boton) => {
    boton.addEventListener("click", () => {
      const op = boton.getAttribute("datosOp");
      if (op === "+" || op === "-" || op === "*" || op === "/") {
        valor1 = parseFloat(pantalla.textContent!);
        operador = op;
        pantalla.textContent = "0";
      }
    });
  });

  // Botón igual
  igual?.addEventListener("click", () => {
    valor2 = parseFloat(pantalla.textContent!);
    let resultado: number = 0;

    if (operador === "+") {
      resultado = valor1 + valor2;
    } else if (operador === "-") {
      resultado = valor1 - valor2;
    } else if (operador === "*") {
      resultado = valor1 * valor2;
    } else if (operador === "/") {
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
