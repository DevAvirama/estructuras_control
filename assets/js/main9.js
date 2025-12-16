function verificarLlanta() {
    const diametroInput = document.getElementById('diametro').value;
    const grosorInput = document.getElementById('grosor').value;
    const resultadoDiv = document.getElementById('resultado');

    const diametro = parseFloat(diametroInput);
    const grosor = parseFloat(grosorInput);

    if (isNaN(diametro) || isNaN(grosor) || diametro <= 0 || grosor <= 0) {
        alert("Por favor ingrese valores numéricos válidos.");
        return;
    }

    let mensajeVehiculo = "";
    let mensajeAdvertencia = "";

    if (diametro > 1.4) {
        mensajeVehiculo = "La rueda es para un vehículo <strong>GRANDE</strong>.";
        
        if (grosor < 0.4) {
            mensajeAdvertencia = "⚠️ El grosor para esta rueda es inferior al recomendado.";
        }

    } else if (diametro <= 1.4 && diametro > 0.8) {
        mensajeVehiculo = "La rueda es para un vehículo <strong>MEDIANO</strong>.";

        if (grosor < 0.25) {
            mensajeAdvertencia = "⚠️ El grosor para esta rueda es inferior al recomendado.";
        }
    } else {
        mensajeVehiculo = "La rueda es para un vehículo <strong>PEQUEÑO</strong>.";
    }

    resultadoDiv.style.display = 'block';
    
    let htmlFinal = `<div class="message info">${mensajeVehiculo}</div>`;
    
    if (mensajeAdvertencia !== "") {
        htmlFinal += `<div class="message warning">${mensajeAdvertencia}</div>`;
    }

    resultadoDiv.innerHTML = htmlFinal;
}