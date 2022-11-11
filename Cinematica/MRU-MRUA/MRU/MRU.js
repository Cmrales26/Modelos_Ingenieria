let Velocidad = document.getElementById("Velocidad");
let tiempo = document.getElementById("Tiempo");
let v_vs_t = document.getElementById("grficav-vs-t");
let dist_movil = document.getElementById("dist-movil");


function distanciamovil(params) {
  let velocidad = Velocidad.value;
  let time = tiempo.value;

  let distancia = velocidad * time;
  return distancia;
}

function simulador1(params) {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion1");
    if (simu == null) {
      $(".simulacion1").attr("id", "simulacion1");
      const myNode = document.getElementById("simulacion1");
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
        p_i,
        distancia,
        time,
        canva1,
        bolita,
        g,
        plot1;
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
      p_i = vector(0, 0, 0);
      distancia = parseFloat(Velocidad.value);
      time = parseFloat(tiempo.value);

      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 480,
          height: 150,
          background: vector(250, 250, 250),
        }),
      ]);
      bolita = ρσ_interpolate_kwargs.call(this, sphere, [
        ρσ_desugar_kwargs({
          pos: p_i,
          color: color.blue,
          radius: 1,
          make_trail: true,
        }),
      ]);
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 480,
          height: 150,
          xtitle: "<i>Tiempo(s)</i>",
          ytitle: "<i>Velocidad(m/s)</i>",
          xmin: 0,
          xmax: distancia,
          fast: true,
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
      plot1.plot(p_i.x, time);
      while (p_i.x["<"](distancia)) {
        await rate(time);

        bolita.pos = p_i;

        p_i.x = p_i.x["+"](1);

        plot1.plot(p_i.x, time);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion1").removeAttr("id"),
      };
      __main__();
    });
  })();
}


function grafv_vs_t(params) {
  if (Velocidad.value == NaN) {
    alert("NADA");
  }
  var PC = {
    x: [0, parseFloat(Velocidad.value)],
    y: [parseFloat(tiempo.value), parseFloat(tiempo.value)],
    mode: "lines",
    marker: {
      color: "#020887",
    },
  };

  var layout = {
    width: 720,
    height: 310,
    plot_bgcolor: "white",
    paper_bgcolor: "transparent",
    showlegend: false,
    margin: {
      l: 50,
      r: 50,
      t: 50,
    },
  };
  var data = [PC];

  Plotly.newPlot(v_vs_t, data, layout);
}

Velocidad.addEventListener("change", (event) => {
  let simu = document.getElementById("simulacion1");
  simulador1();
  grafv_vs_t();
  dist_movil.innerHTML = "" + distanciamovil() + "m";
});

tiempo.addEventListener("change", (event) => {
  simulador1();
  grafv_vs_t();
  dist_movil.innerHTML = "" + distanciamovil() + "m";
});

let poi = document.getElementById("Poi");
let velo = document.getElementById("Velo");
let tii = document.getElementById("Tii");
let tif = document.getElementById("Tif");
let respen = document.getElementById("resultadopendiete");

poi.addEventListener("change", (event) => {
  let simu = document.getElementById("simulacion-pt");
  if (simu == null) {
    $(".simulacion-pt").attr("id", "simulacion-pt");
    const myNode = document.getElementById("simulacion-pt");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
  grafp_vs_t();
  pendiente();
  respen.innerHTML = pendiente() + " m/s";
});

velo.addEventListener("change", (event) => {
  let simu = document.getElementById("simulacion-pt");
  if (simu == null) {
    $(".simulacion-pt").attr("id", "simulacion-pt");
    const myNode = document.getElementById("simulacion-pt");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
  grafp_vs_t();
  pendiente();
  respen.innerHTML = pendiente() + " m/s";
});

tii.addEventListener("change", (event) => {
  let simu = document.getElementById("simulacion-pt");
  if (simu == null) {
    $(".simulacion-pt").attr("id", "simulacion-pt");
    const myNode = document.getElementById("simulacion-pt");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
  grafp_vs_t();
  pendiente();
  respen.innerHTML = pendiente() + " m/s";
});

tif.addEventListener("change", (event) => {
  let simu = document.getElementById("simulacion-pt");
  if (simu == null) {
    $(".simulacion-pt").attr("id", "simulacion-pt");
    const myNode = document.getElementById("simulacion-pt");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
  grafp_vs_t();
  pendiente();
  respen.innerHTML = pendiente() + " m/s";
});

function grafp_vs_t() {
  // START JAVASCRIPT
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

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
        p_i,
        velocidad,
        tiempoin,
        tiempofin,
        ratspeed,
        vport,
        res,
        g,
        plot1;
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
      ("2");
      p_i = parseFloat(poi.value);
      ("3");
      velocidad = parseFloat(velo.value);
      ("4");
      tiempoin = parseFloat(tii.value);
      ("5");
      tiempofin = parseFloat(tif.value);
      ("6");
      ratspeed = 10;
      ("8");
      vport = velocidad["*"](tiempofin["-"]((1)["*"](tiempoin)));
      ("9");
      res = p_i["+"](vport);
      ("11");
      if (res["<"](0)) {
        ("12");
        g = ρσ_interpolate_kwargs.call(this, graph, [
          ρσ_desugar_kwargs({
            width: 600,
            height: 225,
            xtitle: "<i>Tiempo</i>",
            ytitle: "<i>Posicion</i>",
            xmin: p_i,
            xmax: tiempofin,
            fast: true,
          }),
        ]);
        ("13");
        plot1 = ρσ_interpolate_kwargs.call(this, gcurve, [
          ρσ_desugar_kwargs({
            graph: g,
            color: color.blue,
            dot: true,
            dot_color: color.blue,
          }),
        ]);
        ("14");
      } else {
        ("15");
        g = ρσ_interpolate_kwargs.call(this, graph, [
          ρσ_desugar_kwargs({
            width: 600,
            height: 225,
            xtitle: "<i>Tiempo</i>",
            ytitle: "<i>Posicion</i>",
            xmin: p_i,
            xmax: tiempofin,
            fast: true,
          }),
        ]);
        ("16");
        plot1 = ρσ_interpolate_kwargs.call(this, gcurve, [
          ρσ_desugar_kwargs({
            graph: g,
            color: color.blue,
            dot: true,
            dot_color: color.blue,
          }),
        ]);
      }
      ("18");
      plot1.plot(tiempoin, p_i);
      ("20");
      while (tiempoin["<="](tiempofin)) {
        ("21");
        await rate(10);
        ("22");
        plot1.plot(tiempoin, p_i);
        ("23");
        p_i = p_i["+"](velocidad);
        ("24");
        tiempoin = tiempoin["+"](1);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });
    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-pt").removeAttr("id"),
      };
      __main__();
    });
  })();
}

function pendiente() {
  let posiini = parseFloat(poi.value);
  let velociej = parseFloat(velo.value);
  let tiempoini = parseFloat(tii.value);
  let tiempo_fini = parseFloat(tif.value);

  let vport = velociej * (tiempo_fini - tiempoini);
  let resultadopt = posiini + vport;

  document.getElementById("Posiini").innerHTML = posiini;
  document.getElementById("Posifini").innerHTML = resultadopt;
  document.getElementById("tienini").innerHTML = tiempoini;
  document.getElementById("tienfi").innerHTML = tiempo_fini;

  let num = resultadopt - posiini;
  let den = tiempo_fini - tiempoini;

  let pendiente = num / den;
  return pendiente;
}
