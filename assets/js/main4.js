function calcularEnvio() {
    const pesoInput = document.getElementById('peso');
    const zonaSelect = document.getElementById('zona');
    const resultadoDiv = document.getElementById('resultado');

    const peso = parseFloat(pesoInput.value);
    const zona = zonaSelect.value;

    resultadoDiv.innerHTML = "";
    resultadoDiv.className = "result-box";

    if (isNaN(peso) || peso <= 0) {
        mostrarMensaje("Por favor ingrese un peso válido.", "error");
        return;
    }

    if (zona === "") {
        mostrarMensaje("Por favor seleccione una zona.", "error");
        return;
    }

    if (peso > 85) {
        mostrarMensaje(`⚠️ El paquete de ${peso} kg excede el peso permitido (Máx: 85 kg).`, "error");
        return;
    }

    const tarifas = {
        "1": 210,
        "2": 180,
        "3": 220,
        "4": 340,
        "5": 370
    };

    const precioPorUnidad = tarifas[zona];
    const costoTotal = peso * precioPorUnidad;

    const formatoMoneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

    const mensajeExito = `
        <div>Zona: ${zonaSelect.options[zonaSelect.selectedIndex].text.split('-')[1]}</div>
        <div style="font-size: 1.5rem; margin-top: 10px; color: #0033a0;">
            Valor: ${formatoMoneda.format(costoTotal)}
        </div>
    `;
    
    mostrarMensaje(mensajeExito, "success");
}

function mostrarMensaje(contenido, tipo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = contenido;
    resultadoDiv.className = `result-box ${tipo}`;
}