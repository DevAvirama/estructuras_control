function calcularPedido() {
    const cantidadInput = document.getElementById('cantidad');
    const tipoSelect = document.getElementById('tipo');
    const pagoSelect = document.getElementById('pago');
    const resultadoDiv = document.getElementById('resultado');

    const cantidad = parseInt(cantidadInput.value);
    const tipo = tipoSelect.value;
    const metodoPago = pagoSelect.value;

    if (isNaN(cantidad) || cantidad < 1) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = "<p class='error'>¡Por favor ingrese una cantidad válida!</p>";
        return;
    }

    let precioUnitario = 0;
    
    switch (tipo) {
        case 'sencilla':
            precioUnitario = 20000;
            break;
        case 'doble':
            precioUnitario = 25000;
            break;
        case 'triple':
            precioUnitario = 28000;
            break;
    }

    const subtotal = precioUnitario * cantidad;
    let cargo = 0;

    if (metodoPago === 'tarjeta') {
        cargo = subtotal * 0.07;
    }

    const totalPagar = subtotal + cargo;

    const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <div class="line-item">
            <span>Precio Unit. (${tipo}):</span>
            <span>${fmt.format(precioUnitario)}</span>
        </div>
        <div class="line-item">
            <span>Cantidad:</span>
            <span>${cantidad}</span>
        </div>
        <div class="line-item">
            <span>Subtotal:</span>
            <span>${fmt.format(subtotal)}</span>
        </div>
        <div class="line-item">
            <span>Cargo (7%):</span>
            <span>${cargo > 0 ? fmt.format(cargo) : '$ 0'}</span>
        </div>
        <div class="line-item total-line">
            <span>TOTAL A PAGAR:</span>
            <span>${fmt.format(totalPagar)}</span>
        </div>
    `;
}