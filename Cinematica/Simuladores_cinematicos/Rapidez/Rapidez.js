const boton = document.getElementById("Resultado")
boton.addEventListener("click", Calcular);

function Calcular() {
    count = 0
    const Distancia = parseFloat(document.getElementById("Distancia").value);
    const T_i = parseFloat(document.getElementById("T_i").value);
    const T_f = parseFloat(document.getElementById("T_f").value);

    resultado = (Distancia / (T_f - T_i)) * (3600 / 1);
    document.getElementById("Respuesta-valor").innerHTML = resultado.toFixed(2) + "Km/h"
}