function calcularPresupuesto() {
    let numeroPersonas = parseInt(document.getElementById('personas').value);
    let resultadoDiv = document.getElementById('resultado');
    
    let costoPlatillo = 0;
    let presupuestoTotal = 0;

    if (isNaN(numeroPersonas) || numeroPersonas <= 0) {
        resultadoDiv.innerHTML = "<span class='error'>¡Ingrese un número válido!</span>";
        return; 
    }

    if (numeroPersonas <= 200) {
        costoPlatillo = 25000;
    } else if (numeroPersonas > 200 && numeroPersonas <= 300) {
        costoPlatillo = 18500;
    } else {
        costoPlatillo = 16000;
    }

    presupuestoTotal = numeroPersonas * costoPlatillo;

    let totalFormateado = presupuestoTotal.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
    let unitarioFormateado = costoPlatillo.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});

    resultadoDiv.innerHTML = `
        Costo por platillo: ${unitarioFormateado} <br>
        <strong>Presupuesto Total: ${totalFormateado}</strong>
    `;
}