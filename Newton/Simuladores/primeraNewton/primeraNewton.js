// PRIMERA SIMULACION
let fuerza_externa1 = document.getElementById("fuerza-p-l-i");
let tiempo_externa1 = document.getElementById("tiempo-p-l-i");
let masa_externa1 = document.getElementById("masa-p-l-i");


const distanciarecorrida = () => {
  if (fuerza_externa1.value != "" && tiempo_externa1.value != "" && masa_externa1.value != "") {
    let aceleracion = parseFloat(fuerza_externa1.value) / parseFloat(masa_externa1.value);
    let posicion_final = ((0.5 * aceleracion) * (Math.pow(parseFloat(tiempo_externa1.value), 2)));
    const distanciaFinal = document.getElementById("distanciaRecorrida");
    return distanciaFinal.innerHTML = posicion_final.toFixed(3);
  } else {
    return
  }
}

function primera_simulacion() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-p-l-i");
    if (simu == null) {
      $(".simulacion-p-l-i").attr("id", "simulacion-p-l-i");
      const myNode = document.getElementById("simulacion-p-l-i");
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

      var version, print, arange, __name__, type, ρσ_ls, scene, masa, fuerza, tiempo, dt, objeto, rastro, pp, vector_arriba, vector_abajo, vector_fuerza, label_posicion, aceleracion, velocidad_inicial, posicion_inicial, posicion_final, pf, Linea, tiempo_actual;
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
      scene = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 600, height: 225, background: color.white })]);
      masa = parseFloat(masa_externa1.value);
      fuerza = vector(parseFloat(fuerza_externa1.value), 0, 0);
      tiempo = parseFloat(tiempo_externa1.value);
      dt = .1;
      objeto = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ pos: vector(0, 0, 0), size: vector(1, 1, .1), color: color.blue })]);
      rastro = ρσ_interpolate_kwargs.call(this, curve, [ρσ_desugar_kwargs({ color: color.red })]);
      rastro.dot = true;
      rastro.radius = .05;
      vector_arriba = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({ pos: objeto.pos, axis: vector(0, 2, 0), shaftwidth: .2, color: color.green })]);
      vector_abajo = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({ pos: objeto.pos, axis: vector(0, 2["-u"]()["*"](1), 0), shaftwidth: .2, color: color.red })]);
      vector_fuerza = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({ pos: objeto.pos, axis: fuerza, shaftwidth: .3, color: color.blue })]);
      label_posicion = ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({ pos: objeto.pos["+"](vector(0, .6, 0)), text: "Posición: ", box: false })]);
      aceleracion = fuerza["/"](masa);
      velocidad_inicial = vector(0, 0, 0);
      posicion_inicial = vector(0, 0, 0);
      posicion_final = posicion_inicial["+"](velocidad_inicial["*"](tiempo))["+"](.5["*"](aceleracion)["*"](Math.pow(tiempo, 2)));
      pf = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({ pos: vector(posicion_final.x, 1["-u"]()["*"](.5), 0), size: vector(.5, .5, 1), color: color.green })]);
      Linea = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ pos: vector(0["*"](4), 1["-u"]()["*"](.5), 0), size: vector(posicion_final.x["*"](2), .1, .1), color: color.black })]);
      scene.camera.pos = vector(0, 0, 10);
      scene.camera.axis = 1["-u"]()["*"](vector(0, 0, 10));
      tiempo_actual = 0;
      while (tiempo_actual["<"](tiempo)) {

        (await rate(10));

        objeto.pos = posicion_inicial["+"](velocidad_inicial["*"](tiempo_actual))["+"](.5["*"](aceleracion)["*"](Math.pow(tiempo_actual, 2)));

        objeto.velocity = velocidad_inicial["+"](aceleracion["*"](tiempo_actual));

        vector_arriba.pos = objeto.pos;

        vector_arriba.axis = vector(0, 2, 0);

        vector_abajo.pos = objeto.pos;

        vector_abajo.axis = vector(0, 1["-u"]()["*"](2), 0);
        vector_fuerza.pos = objeto.pos;

        ρσ_interpolate_kwargs.call(rastro, rastro.append, [ρσ_desugar_kwargs({ pos: objeto.pos })]);

        label_posicion.pos = objeto.pos["+"](vector(0, .6, 0));

        label_posicion.text = "Posición: {:.0f} metros".format(objeto.pos.x);

        scene.camera.follow(objeto);

        tiempo_actual = tiempo_actual["+"](dt);
      }
    };
    if (!__main__.__module__) Object.defineProperties(__main__, {
      __module__: { value: null }
    });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-p-l-i").removeAttr("id"),
      };
      __main__();
    });
  })();
}
primera_simulacion();

fuerza_externa1.addEventListener("change", (event) => {
  if (parseFloat(fuerza_externa1.value) > 50 || parseFloat(fuerza_externa1.value) < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE VALORES ENTRE 0 Y 50',
      confirmButtonColor: "#020887"
    })
    return
  } else {
    primera_simulacion();
    distanciarecorrida();
  }
});

tiempo_externa1.addEventListener("change", (event) => {
  if (parseFloat(tiempo_externa1.value) > 60 || parseFloat(tiempo_externa1.value) < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE VALORES ENTRE 0 Y 60',
      confirmButtonColor: "#020887"
    })
    return
  } else {
    primera_simulacion();
    distanciarecorrida();
  }
});


masa_externa1.addEventListener("change", (event) => {
  if (parseFloat(masa_externa1.value) < 50 || parseFloat(tiempo_externa1.value) > 300) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE VALORES ENTRE 50 Y 300',
      confirmButtonColor: "#020887"
    })
    return
  } else {
    primera_simulacion();
    distanciarecorrida();
  }
});

const boton1 = document.getElementById("Reiniciar-Simulacion1")
boton1.addEventListener('click', (event) => {
  if (fuerza_externa1.value != "") {
    if (parseFloat(fuerza_externa1.value) > 50 || parseFloat(fuerza_externa1.value) < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'INGRESE VALORES ENTRE 0 Y 50',
        confirmButtonColor: "#020887"
      })
    } else {
      primera_simulacion();
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE LOS DATOS PARA LA SIMULACIÓN',
      confirmButtonColor: "#020887"
    })
  }
})

// SEGUNDA SIMULACION
let velocidad_2 = document.getElementById("Velocidad-s-2");
let Ttotal = document.getElementById("tTotal");
let fuerzas_2 = document.getElementById("fuerza-s-2");
let tEstudio = document.getElementById("tEstudio");

function segunda_simulacion() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-p-l-mru");
    if (simu == null) {
      $(".simulacion-p-l-mru").attr("id", "simulacion-p-l-mru");
      const myNode = document.getElementById("simulacion-p-l-mru");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
    }

    (function () {
      function strings() {
        var string_funcs, exclude, name;
        string_funcs = set(
          "capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(
            " "
          )
        );
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
        ρσ_Iter0 =
          typeof ρσ_Iter0[Symbol.iterator] === "function"
            ? ρσ_Iter0 instanceof Map
              ? ρσ_Iter0.keys()
              : ρσ_Iter0
            : Object.keys(ρσ_Iter0);
        for (var ρσ_Index0 of ρσ_Iter0) {
          name = ρσ_Index0;
          (ρσ_expr_temp = String.prototype)[
            typeof name === "number" && name < 0
              ? ρσ_expr_temp.length + name
              : name
          ] = (ρσ_expr_temp = ρσ_str.prototype)[
            typeof name === "number" && name < 0
              ? ρσ_expr_temp.length + name
              : name
            ];
        }
      }
      if (!strings.__module__)
        Object.defineProperties(strings, {
          __module__: { value: "pythonize" },
        });

      ρσ_modules.pythonize.strings = strings;
    })();
    async function __main__() {
      "use strict";
      var display = canvas;
      var scene = canvas();

      var version,
        print,
        arange,
        __name__,
        type,
        ρσ_ls,
        canva1,
        distancia_i,
        velocidad_i,
        tiempo_i,
        tiempo_f,
        fuerza,
        deltaTiempo,
        tiempo_estudio,
        distancia_f,
        velocidad_f,
        g,
        plot1,
        g2,
        plot2;
      version = ρσ_list_decorate(["3.2", "glowscript"]);
      Array.prototype["+"] = function (r) {
        return this.concat(r);
      };
      Array.prototype["*"] = function (r) {
        return __array_times_number(this, r);
      };
      window.__GSlang = "vpython";
      print = GSprint;
      arange = range;
      __name__ = "__main__";
      type = pytype;
      var strings = ρσ_modules.pythonize.strings;

      strings();
      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          background: vector(250, 250, 250),
        }),
      ]);
      velocidad_i = parseFloat(velocidad_2.value);
      tiempo_i = 0;
      tiempo_f = parseFloat(Ttotal.value);
      fuerza = parseFloat(fuerzas_2.value);
      deltaTiempo = tiempo_f["-"]((1)["*"](tiempo_i));
      tiempo_estudio = parseFloat(tEstudio.value);
      distancia_f = 0;
      velocidad_f = 0;
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Posicion</i>",
          xmin: tiempo_i,
          xmax: deltaTiempo,
          fast: true,
          width: 330
        }),
      ]);
      plot1 = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          graph: g,
          color: color.blue,
          dot: true,
          dot_color: color.blue,
        }),
      ]);
      g2 = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Velocidad</i>",
          xmin: tiempo_i,
          xmax: deltaTiempo,
          fast: true,
          width: 350
        }),
      ]);
      plot2 = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          graph: g2,
          color: color.blue,
          dot: true,
          dot_color: color.blue,
        }),
      ]);
      while (tiempo_i["<"](deltaTiempo)) {
        await rate(5);
        tiempo_i = tiempo_i + 1
        distancia_f = distancia_f + (velocidad_f * tiempo_i) + ((1 / 2) * (0 * Math.pow(tiempo_i, 2)))
        velocidad_f = velocidad_i + tiempo_i
        if (tiempo_i === tiempo_estudio) {
          distancia_f = distancia_f + (velocidad_i * tiempo_i) + ((1 / 2) * (fuerza * Math.pow(tiempo_i, 2)))
          velocidad_f = velocidad_i + (fuerza * tiempo_i)
          tiempo_i = tiempo_i + 1
        }
        plot1.plot(tiempo_i, distancia_f);
        plot2.plot(tiempo_i, velocidad_f);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-p-l-mru").removeAttr("id"),
      };
      __main__();
    });
  })();
}

tEstudio.addEventListener('change', (event) => {
  segunda_simulacion()
})
Ttotal.addEventListener('change', (event) => {
  segunda_simulacion()
})
fuerzas_2.addEventListener('change', (event) => {
  segunda_simulacion()
})
velocidad_2.addEventListener('change', (event) => {
  segunda_simulacion()
})

const boton2 = document.getElementById("Reiniciar-Simulacion2")
boton2.addEventListener('click', (event) => {
  if (velocidad_2.value != "" && Ttotal.value != "" && fuerzas_2 != "" && tEstudio.value != "") {
    segunda_simulacion()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE LOS DATOS PARA LA SIMULACIÓN',
      confirmButtonColor: "#020887"
    })
  }
})
