function clasificarTriangulo() {
    const input1 = document.getElementById('lado1').value;
    const input2 = document.getElementById('lado2').value;
    const input3 = document.getElementById('lado3').value;
    const resultadoDiv = document.getElementById('resultado');

    const l1 = parseFloat(input1);
    const l2 = parseFloat(input2);
    const l3 = parseFloat(input3);

    if (isNaN(l1) || isNaN(l2) || isNaN(l3) || l1 <= 0 || l2 <= 0 || l3 <= 0) {
        resultadoDiv.className = "result-box error";
        resultadoDiv.innerHTML = "Por favor ingresa medidas válidas.";
        return;
    }

    let tipo = "";
    let claseCSS = "";

    if (l1 === l2 && l2 === l3) {
        tipo = "Triángulo Equilátero";
        claseCSS = "equilatero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        tipo = "Triángulo Isósceles";
        claseCSS = "isosceles";
    } else {
        tipo = "Triángulo Escaleno";
        claseCSS = "escaleno";
    }

    resultadoDiv.className = `result-box ${claseCSS}`;
    resultadoDiv.innerHTML = tipo;
}