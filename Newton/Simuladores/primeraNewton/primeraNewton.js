// PRIMERA SIMULACION
let fuerza_externa1 = document.getElementById("fuerza-p-l-i");

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

      function input(arg) {
        arg = arg || {};
        if (arg.prompt !== undefined && arg.prompt != "")
          return prompt(arg.prompt);
        else if (typeof arg === "string") return prompt(arg);
        else return prompt();
      }

      var version,
        print,
        arange,
        __name__,
        type,
        ρσ_ls,
        canva1,
        objeto,
        gravedad,
        reaccion,
        fuerza,
        fuerza_v,
        time,
        i,
        fuerza_c,
        piso;
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
      objeto = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(0, 3, 0),
          color: color.blue,
          size: vector(5, 5, 0.01),
          make_trail: true,
        }),
      ]);
      gravedad = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: vector(0, 3, 0),
          axis: vector(0, (1)["-u"]()["*"](9.8), 0),
          color: color.red,
          shaftwidth: 1,
        }),
      ]);
      reaccion = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: vector(0, 3, 0),
          axis: vector(0, 9.8, 0),
          color: color.green,
          shaftwidth: 1,
        }),
      ]);
      await sleep(0.1);
      fuerza = parseFloat(fuerza_externa1.value);
      fuerza_v = vector(0, 3, 0);
      time = 50;
      canva1.camera.follow(objeto);
      i = 0;
      fuerza_c = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: vector(0, 3, 0),
          axis: vector(fuerza, 0, 0),
          color: color.blue,
          shaftwidth: 1,
        }),
      ]);
      piso = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(0, 0, 0),
          color: color.black,
          size: vector(time["*"](2.5), 1, 0.1),
        }),
      ]);
      if (fuerza[">="](1)) {
        while (i["<"](time)) {
          await rate(10);
          objeto.pos = fuerza_v;
          gravedad.pos = fuerza_v;
          reaccion.pos = fuerza_v;
          fuerza_c.pos = fuerza_v;
          fuerza_v.x = fuerza_v.x["+"](1);
          i = i["+"](1);
        }
      } else if (fuerza["<="](-1)) {
        while (i["<"](time)) {
          await rate(10);
          objeto.pos = fuerza_v;
          gravedad.pos = fuerza_v;
          reaccion.pos = fuerza_v;
          fuerza_c.pos = fuerza_v;
          fuerza_v.x = fuerza_v.x["-"](1);

          i = i["+"](1);
        }
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
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
  primera_simulacion();
});

const boton1 = document.getElementById("Reiniciar-Simulacion1")
boton1.addEventListener('click', (event)=>{
  if (fuerza_externa1.value != "") {
      primera_simulacion()
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
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
        tiempo_i =tiempo_i+1
        distancia_f = distancia_f + (velocidad_f*tiempo_i)+((1/2)*(0*Math.pow(tiempo_i,2)))
        velocidad_f = velocidad_i + tiempo_i
        if (tiempo_i === tiempo_estudio) {
          distancia_f = distancia_f + (velocidad_i*tiempo_i)+((1/2)*(fuerza*Math.pow(tiempo_i,2)))
          velocidad_f = velocidad_i + (fuerza * tiempo_i)
          tiempo_i =tiempo_i+1
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

tEstudio.addEventListener('change', (event) =>{
    segunda_simulacion()
})
Ttotal.addEventListener('change', (event) =>{
    segunda_simulacion()
})
fuerzas_2.addEventListener('change', (event) =>{
    segunda_simulacion()
})
velocidad_2.addEventListener('change', (event) =>{
    segunda_simulacion()
})

const boton2 = document.getElementById("Reiniciar-Simulacion2")
boton2.addEventListener('click', (event)=>{
  if (velocidad_2.value != "" && Ttotal.value != ""&& fuerzas_2 != "" && tEstudio.value != "") {
    segunda_simulacion()
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
  }
})
