const boton = document.getElementById("Resultado")
boton.addEventListener("click", Calcular);

function Calcular() {
    count = 0
    const Distancia_i = parseFloat(document.getElementById("Distancia_i").value);
    const Distancia_f = parseFloat(document.getElementById("Distancia_f").value);
    const T_i = parseFloat(document.getElementById("T_i").value);
    const T_f = parseFloat(document.getElementById("T_f").value);

    resultado = ((Distancia_f - Distancia_i) / (T_f - T_i));
    document.getElementById("Respuesta-valor").innerHTML = resultado.toFixed(2) + "m/s"
}