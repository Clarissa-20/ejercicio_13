let promedio = parseFloat(prompt("Ingrese su promedio: "));
let resultadoElement = document.getElementById("resultado");

if (promedio <= 75) {
    resultadoElement.innerHTML = "Necesita Mejorar";
} else if (promedio <= 79) {
    resultadoElement.innerHTML = "Bueno";
} else if (promedio <= 90) {
    resultadoElement.innerHTML = "Muy Bueno";
} else if (promedio <= 100) {
    resultadoElement.innerHTML = "Excelencia Académica";
}