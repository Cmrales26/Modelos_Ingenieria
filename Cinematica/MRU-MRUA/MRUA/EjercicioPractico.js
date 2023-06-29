let Tiempos = [0, 1.16, 1.58, 1.93, 2.29, 2.58, 2.82]
let TiemposSinCero = [1.16, 1.58, 1.93, 2.29, 2.58, 2.82]
let Distancia = [0, 20, 40, 60, 80, 100, 120]

const RepuestaEjercicioPractico = (Tiempos, Distancia) => {
    // Definir los datos de los puntos
    const data = [
        {
            x: Tiempos,
            y: Distancia,
            mode: "Lines",
            name: "Puntos",
            line: { shape: 'spline', smoothing: 1000 }
        },
    ];

    // Definir los trazos (líneas) que unen los puntos
    const layout = {
        title: "Tiempo vs Distancia",
        xaxis: { title: "Tiempo" },
        yaxis: { title: "Distancia" },
    };

    // Generar la gráfica
    Plotly.newPlot("DistanciaVsTiempoDesalineadoEjercicioP", data, layout);
};

const linealizar = (Tiempos, Distancia) => {
    const resultados = [];

    for (let i = 1; i < Tiempos.length; i++) {
        const resultado = Distancia[i] / Tiempos[i];
        resultados.push(resultado.toFixed(3));
    }

    return resultados;
}

let DistanciaLinealizada = linealizar(Tiempos, Distancia)

const RepuestaEjercicioPracticoLinealizado = (Tiempos, DistanciaLinealizada) => {
    // Calcular la pendiente (m) e intercepto (b) usando el método de mínimos cuadrados
    const n = Tiempos.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;

    for (let i = 0; i < n; i++) {
        sumX += Tiempos[i];
        sumY +=  parseFloat(DistanciaLinealizada[i]);
        sumXY += Tiempos[i] * DistanciaLinealizada[i];
        sumX2 += Tiempos[i] * Tiempos[i];
    }

    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / n;

    // Definir los datos de los puntos
    const data = [
        {
            x: Tiempos,
            y: DistanciaLinealizada,
            mode: "Lines",
            name: "Distancia VS Tiempo",
            line: { shape: 'spline', smoothing: 1000 }
        },
        {
            x: Tiempos,
            y: Tiempos.map(t => m * t + b),
            mode: "lines",
            name: `Ajuste (Pendiente: ${m.toFixed(2)}, Intercepto: ${b.toFixed(2)})`
        }
    ];

    // Definir los trazos (líneas) que unen los puntos
    const layout = {
        title: "Tiempo vs Distancia",
        xaxis: { title: "Tiempo" },
        yaxis: { title: "Distancia" },
    };

    // Generar la gráfica
    Plotly.newPlot("DistanciaVsTiempoLineadoEjercicioP", data, layout);
};







RepuestaEjercicioPractico(Tiempos, Distancia);
RepuestaEjercicioPracticoLinealizado(TiemposSinCero, DistanciaLinealizada)
