function analizarClima() {
    const tempInput = document.getElementById('temperatura').value;
    const resultadoDiv = document.getElementById('resultado');
    const card = document.getElementById('card');
    const icon = document.getElementById('icon');

    const temp = parseFloat(tempInput);

    if (isNaN(temp)) {
        resultadoDiv.innerText = "Ingresa un valor válido";
        return;
    }

    let mensaje = "";
    let claseEstilo = "";
    let icono = "";

    if (temp < 0) {
        mensaje = "Clima helado";
        claseEstilo = "freezing";
        icono = "🥶";
    } else if (temp >= 0 && temp < 10) {
        mensaje = "Clima muy frío";
        claseEstilo = "freezing";
        icono = "🧣";
    } else if (temp >= 10 && temp < 20) {
        mensaje = "Clima frío";
        claseEstilo = "cold";
        icono = "🧥";
    } else if (temp >= 20 && temp < 30) {
        mensaje = "Clima Normal";
        claseEstilo = "normal";
        icono = "🌤️";
    } else if (temp >= 30 && temp < 40) {
        mensaje = "Hace calor";
        claseEstilo = "warm";
        icono = "😎";
    } else {
        mensaje = "Hace mucho calor";
        claseEstilo = "hot";
        icono = "🔥";
    }

    card.className = `weather-card ${claseEstilo}`;
    icon.innerText = icono;
    resultadoDiv.innerText = mensaje;
}