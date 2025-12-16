function calcularIMC() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor ingrese valores válidos (mayores a 0).");
        return;
    }

    const imc = peso / (altura * altura);

    let diagnostico = "";
    let colorFondo = "";

    if (imc < 16) {
        diagnostico = "Criterio de ingreso en hospital";
        colorFondo = "#dc3545";
    } else if (imc >= 16 && imc < 17) {
        diagnostico = "Infrapeso";
        colorFondo = "#fd7e14";
    } else if (imc >= 17 && imc < 18) {
        diagnostico = "Bajo peso";
        colorFondo = "#ffc107";
    } else if (imc >= 18 && imc < 25) {
        diagnostico = "Peso normal";
        colorFondo = "#28a745";
    } else if (imc >= 25 && imc < 30) {
        diagnostico = "Sobrepeso (Obesidad de grado I)";
        colorFondo = "#ffc107";
    } else if (imc >= 30 && imc < 35) {
        diagnostico = "Sobrepeso crónico (Obesidad de grado II)";
        colorFondo = "#fd7e14";
    } else if (imc >= 35 && imc <= 40) {
        diagnostico = "Sobrepeso crónico (Obesidad de grado II)";
        colorFondo = "#dc3545";
    } else {
        diagnostico = "Obesidad mórbida (Obesidad de grado IV)";
        colorFondo = "#721c24";
    }

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <div class="imc-label">Tu índice de masa corporal es:</div>
        <div class="imc-value">${imc.toFixed(2)}</div>
        <div class="diagnosis" style="background-color: ${colorFondo}; margin-top: 15px;">
            ${diagnostico}
        </div>
    `;
}