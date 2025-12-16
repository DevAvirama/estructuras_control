function calcularTotal() {
    const cantidadInput = document.getElementById('cantidad');
    const resultadoDiv = document.getElementById('resultado');

    const cantidad = parseInt(cantidadInput.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.innerHTML = "<span class='error'>⚠️ Ingrese una cantidad válida</span>";
        return;
    }

    let precioUnitario = 0;

    if (cantidad >= 1000) {
        precioUnitario = 49850;
    } else {
        precioUnitario = 71290;
    }

    const totalPagar = cantidad * precioUnitario;

    const formato = new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP', 
        maximumFractionDigits: 0 
    });

    resultadoDiv.innerHTML = `
        <div class="price-detail">Precio Unitario: ${formato.format(precioUnitario)}</div>
        <div class="total-price">${formato.format(totalPagar)}</div>
    `;
}