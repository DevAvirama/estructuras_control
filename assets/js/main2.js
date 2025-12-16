function calcularDescuento() {
    const precioInput = document.getElementById('precio').value;
    const resultadoDiv = document.getElementById('resultado');
    const precio = parseFloat(precioInput);

    if (isNaN(precio) || precio <= 0) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.className = 'result-box error';
        resultadoDiv.innerHTML = "¡Ingrese un precio válido!";
        return;
    }

    let porcentaje = 0;
    
    if (precio > 125000) {
        porcentaje = 0.35;
    } else {
        porcentaje = 0.10;
    }

    const descuento = precio * porcentaje;
    const totalPagar = precio - descuento;

    const formatoPeso = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' });
    const porcentajeTexto = (porcentaje * 100) + "%";

    resultadoDiv.style.display = 'block';
    resultadoDiv.className = 'result-box';
    
    resultadoDiv.innerHTML = `
        <strong>Precio Original:</strong> ${formatoPeso.format(precio)} <br>
        <strong>Porcentaje aplicado:</strong> ${porcentajeTexto} <br>
        <strong>Descuento:</strong> -${formatoPeso.format(descuento)} <br>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
        <strong style="font-size: 1.1rem; color: #27ae60;">Total a Pagar: ${formatoPeso.format(totalPagar)}</strong>
    `;
}