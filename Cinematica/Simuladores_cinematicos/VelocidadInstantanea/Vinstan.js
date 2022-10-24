function draw() {
    try {
        const expression = document.getElementById('eq').value
        const expr = math.compile(expression)

        const xValues = math.range(-5, 5, 0.1).toArray()
        const yValues = xValues.map(function (t) {
            return expr.evaluate({ t: t })
        })
        const trace1 = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            name: 'funcion'
        }
        const p_0 = {
            x: [0, 0],
            y: [0, 0],
            // name: '0,0'
        }
        const layout = {
            width: 440,
            height: 500,
            title: expression,
            plot_bgcolor: "#fafafa",
            paper_bgcolor: "transparent",
            showlegend: false,
            margin: {
                l: 50,
                r: 50,
            },
        }

        const data = [trace1, p_0]
        Plotly.newPlot('plotVI', data, layout, {staticPlot: true })
    }
    catch(err) {
        console.error(err)
        alert(err)
    }
}
function velocidad_instantanea() {
    draw()
    const expression = document.getElementById('eq').value
    const tiempo = parseFloat(document.getElementById('testudio').value)
    let respuesta = document.getElementById('Respuesta-valor');
    if (TieneLetras(expression) == true) {
        const Resultado = math.derivative(expression, 't').evaluate({ t: tiempo })
        respuesta.innerHTML = "La velocidad Instantanea en el segundo: " + tiempo + " Es de: " + Resultado.toFixed(2) + " m/s"
    }else{
        respuesta.innerHTML = "La velocidad del objeto es constante ya que no depende del tiempo"
    }
}

function TieneLetras(Funcion) {
    return /[a-zA-Z]/.test(Funcion);
}

const boton = document.getElementById("aggv1")
boton.addEventListener("click", draw)
const boton1 = document.getElementById('ResultadoV')
boton1.addEventListener("click", velocidad_instantanea)