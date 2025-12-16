function verificarNumero() {
    const input = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    const numero = parseFloat(input);

    resultadoDiv.className = 'result-box';
    resultadoDiv.style.display = 'block';

    if (isNaN(numero) || !Number.isInteger(numero)) {
        resultadoDiv.innerHTML = "¡Ingrese un número entero válido!";
        resultadoDiv.classList.add('error');
        return;
    }

    if (numero % 2 === 0) {
        resultadoDiv.innerHTML = `${numero} es un número PAR`;
        resultadoDiv.classList.add('par');
    } else {
        resultadoDiv.innerHTML = `${numero} es un número IMPAR`;
        resultadoDiv.classList.add('impar');
    }
}