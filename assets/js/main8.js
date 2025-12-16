function encontrarMayor() {
    const n1Input = document.getElementById('num1').value;
    const n2Input = document.getElementById('num2').value;
    const n3Input = document.getElementById('num3').value;
    const resultadoDiv = document.getElementById('resultado');

    const n1 = parseFloat(n1Input);
    const n2 = parseFloat(n2Input);
    const n3 = parseFloat(n3Input);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoDiv.className = "result-area error";
        resultadoDiv.innerHTML = "Por favor completa los 3 campos con números.";
        return;
    }

    let mayor;

    if (n1 > n2 && n1 > n3) {
        mayor = n1;
    } else if (n2 > n3) {
        mayor = n2;
    } else {
        mayor = n3;
    }
    
    resultadoDiv.className = "result-area winner";
    resultadoDiv.innerHTML = `✨ El número mayor es: ${mayor}`;
}