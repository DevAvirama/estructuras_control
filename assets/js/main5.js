function calcularGanancia() {
    const precioBaseInput = document.getElementById('precioBase').value;
    const kilosInput = document.getElementById('kilos').value;
    const tipo = document.getElementById('tipo').value;
    const tamano = document.getElementById('tamano').value;
    const resultadoDiv = document.getElementById('resultado');

    const precioBase = parseFloat(precioBaseInput);
    const kilos = parseFloat(kilosInput);

    if (isNaN(precioBase) || precioBase <= 0 || isNaN(kilos) || kilos <= 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = "<p class='error'>¡Por favor ingrese valores válidos!</p>";
        return;
    }

    let ajuste = 0;

    if (tipo === 'P1') {
        if (tamano === '1') {
            ajuste = 1200;
        } else {
            ajuste = 830;
        }
    } else {
        if (tamano === '1') {
            ajuste = -540;
        } else {
            ajuste = -350;
        }
    }

    const precioFinalKilo = precioBase + ajuste;
    const gananciaTotal = precioFinalKilo * kilos;

    const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <div class="info-row">
            <span>Precio Base:</span>
            <span>${fmt.format(precioBase)}</span>
        </div>
        <div class="info-row">
            <span>Ajuste (${tipo}-${tamano}):</span>
            <span>${ajuste > 0 ? '+' : ''}${fmt.format(ajuste)}</span>
        </div>
        <div class="info-row">
            <span>Precio Ajustado:</span>
            <span>${fmt.format(precioFinalKilo)}</span>
        </div>
        <div class="info-row">
            <span>Kilos:</span>
            <span>${kilos}</span>
        </div>
        <div class="total">
            Total a Pagar: ${fmt.format(gananciaTotal)}
        </div>
    `;
}