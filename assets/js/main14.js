function identificarRiesgo() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const display = document.getElementById('resultado');

    let titulo = "";
    let icono = "";
    let clase = "";
    let descripcion = "";

    switch (nivel) {
        case 1:
            titulo = "Riesgo Biológico";
            icono = "☣️";
            clase = "level-bio";
            descripcion = "Virus, bacterias, hongos, parásitos.";
            break;
        case 2:
            titulo = "Riesgo Químico";
            icono = "🧪";
            clase = "level-quim";
            descripcion = "Polvos, vapores, líquidos, disolventes.";
            break;
        case 3:
            titulo = "Riesgo Físico";
            icono = "☢️";
            clase = "level-fis";
            descripcion = "Ruido, iluminación, radiación, temperatura.";
            break;
        case 4:
            titulo = "Riesgo Ergonómico";
            icono = "🪑";
            clase = "level-ergo";
            descripcion = "Posturas, movimientos repetitivos, carga.";
            break;
        case 5:
            titulo = "Riesgo Psicosocial";
            icono = "🧠";
            clase = "level-psico";
            descripcion = "Estrés, monotonía, fatiga laboral.";
            break;
        default:
            titulo = "NIVEL NO VÁLIDO";
            icono = "🚫";
            clase = "level-error";
            descripcion = "Por favor ingrese un valor entre 1 y 5.";
    }

    display.className = `risk-display ${clase}`;
    display.innerHTML = `
        <div class="risk-icon">${icono}</div>
        <div class="risk-title">${titulo}</div>
        <div class="risk-desc">${descripcion}</div>
    `;
}