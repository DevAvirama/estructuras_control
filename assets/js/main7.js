function calcularSalario() {
    const horasInput = document.getElementById('horas').value;
    const tarifaInput = document.getElementById('tarifa').value;
    const resultadoDiv = document.getElementById('resultado');

    const horasTrabajadas = parseFloat(horasInput);
    const tarifaHora = parseFloat(tarifaInput);

    if (isNaN(horasTrabajadas) || horasTrabajadas < 0 || isNaN(tarifaHora) || tarifaHora < 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = "<span class='error'>¡Por favor ingrese valores válidos!</span>";
        return;
    }

    let salarioTotal = 0;
    let horasExtras = 0;
    let pagoBase = 0;
    let pagoExtras = 0;

    if (horasTrabajadas > 40) {
        horasExtras = horasTrabajadas - 40;
        pagoBase = 40 * tarifaHora;
        pagoExtras = horasExtras * (tarifaHora * 1.5);
        salarioTotal = pagoBase + pagoExtras;
    } else {
        pagoBase = horasTrabajadas * tarifaHora;
        salarioTotal = pagoBase;
    }

    const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

    let detalleHTML = `
        <div class="row">
            <span>Salario Base (Normal):</span>
            <span>${fmt.format(pagoBase)}</span>
        </div>
    `;

    if (horasExtras > 0) {
        detalleHTML += `
        <div class="row extra-highlight">
            <span>Horas Extras (${horasExtras}):</span>
            <span>+ ${fmt.format(pagoExtras)}</span>
        </div>
        `;
    }

    detalleHTML += `
        <div class="row total-row">
            <span>TOTAL A PAGAR:</span>
            <span>${fmt.format(salarioTotal)}</span>
        </div>
    `;

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = detalleHTML;
}