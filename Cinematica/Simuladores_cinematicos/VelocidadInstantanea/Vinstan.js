function draw() {
    try {
        const expression = document.getElementById('eq').value
        const final = document.getElementById('tfinal').value
        const expr = math.compile(expression)

        const xValues = math.range(-final, final, 0.1).toArray()
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
            plot_bgcolor: "white",
            paper_bgcolor: "transparent",
            showlegend: false,
            margin: {
                l: 50,
                r: 50,
            },
        }

        const data = [trace1, p_0]
        Plotly.newPlot('plotVI', data, layout)
    }
    catch (err) {
        console.error(err)
        alert(err)
    }
}
function velocidad_instantanea() {
    let i = 0;
    const expression = document.getElementById('eq').value
    const tiempo = Math.ceil(parseFloat(document.getElementById('testudio').value));
    const tiempofinal = Math.ceil(parseFloat(document.getElementById('tfinal').value))
    let respuesta = document.getElementById('Respuesta-valor');
    let velocidades = [];
    if (TieneLetras(expression) == true) {
        let Resultado;
        while (i <= tiempofinal) {
            Resultado = math.derivative(expression, 't').evaluate({ t: i })
            velocidades.push(Resultado)
            if (i == tiempo) {
                respuesta.innerHTML = "La velocidad Instantanea en el segundo: " + i + " Es de: " + Resultado.toFixed(2) + " m/s"
            }
            i++
        }
    } else {
        respuesta.innerHTML = "La velocidad del objeto es constante ya que no depende del tiempo"
    }
    return velocidades;
}

function recorrido() {
    (function () {
        ;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

        let simu = document.getElementById("SimulacionVI");
        if (simu == null) {
            $('.SimulacionVI').attr('id', 'SimulacionVI');
            const myNode = document.getElementById('SimulacionVI');
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
        }

        (function () {
            function strings() {
                var string_funcs, exclude, name;
                string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
                if (!arguments.length) {
                    exclude = (function () {
                        var s = ρσ_set();
                        s.jsset.add("split");
                        s.jsset.add("replace");
                        return s;
                    })();
                } else if (arguments[0]) {
                    exclude = Array.prototype.slice.call(arguments);
                } else {
                    exclude = null;
                }
                if (exclude) {
                    string_funcs = string_funcs.difference(set(exclude));
                }
                var ρσ_Iter0 = string_funcs;
                ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
                for (var ρσ_Index0 of ρσ_Iter0) {
                    name = ρσ_Index0;
                    (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
                }
            };
            if (!strings.__module__) Object.defineProperties(strings, {
                __module__: { value: "pythonize" }
            });

            ρσ_modules.pythonize.strings = strings;
        })();
        async function __main__() {
            "use strict";
            var display = canvas;
            var scene = canvas();

            var version, print, arange, __name__, type, ρσ_ls, canva1, p_i, final, speed, r, radi, g, plot1, pelota2,pelota;
            version = ρσ_list_decorate(["3.2", "glowscript"]);
            Array.prototype['+'] = function (r) { return this.concat(r) }
            Array.prototype['*'] = function (r) { return __array_times_number(this, r) }
            window.__GSlang = "vpython";
            print = GSprint;
            arange = range;
            __name__ = "__main__";
            type = pytype;
            var strings = ρσ_modules.pythonize.strings;

            strings();
            canva1 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 800, height: 155, background: vector(250, 250, 250) })]);
            p_i = vector(0, 0, 0);
            final = parseFloat(document.getElementById('tfinal').value);
            speed = velocidad_instantanea();
            r = p_i;
            radi = final["/"](40);
            g = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({ width: 800, height: 205, title: "Velocidad Instantanea", xtitle: "<i>Distancia (m)<\/i>", ytitle: "<i>Velocidad (m/s) </i>", scroll: true, xmin: 0, xmax: final, fast: false })]);
            plot1 = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({ graph: g, color: color.blue, label: "Velocidad", dot: true, dot_color: color.red })]);
            pelota2 = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({ pos: p_i, color: color.blue, radius: radi, make_trail: true, canvas: canva1 })]);
            // pelota = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(final, 0, 0), color: color.red, radius: 0.1, canvas: canva1})]);
            while (r.x["<="](final)) {
                (await rate(ρσ_getitem(speed, r.x)));
                pelota2.pos = r;
                print("movil en posicion "["+"](r.x)["+"](" tiene una velocidad de ")["+"](ρσ_getitem(speed, r.x)));
                plot1.plot(r.x, ρσ_getitem(speed, r.x));
                r.x = r.x["+"](1);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__: { value: null }
        });

        ; $(function () { window.__context = { glowscript_container: $("#SimulacionVI").removeAttr("id") }; __main__() })
    })()
}


function TieneLetras(Funcion) {
    return /[a-zA-Z]/.test(Funcion);
}

function ejecturar() {
    recorrido()
    velocidad_instantanea()
    draw()
}

const boton = document.getElementById("aggv1")
boton.addEventListener("click", draw)
const boton1 = document.getElementById('ResultadoV')
boton1.addEventListener("click", ejecturar)