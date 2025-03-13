function moneda() {
    const resultado = Math.round(Math.random()); 

    if (resultado === 1) {
        return "Cara";
    } else {
        return "Cruz";
    }
}

console.log(moneda()); 


