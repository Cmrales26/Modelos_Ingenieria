let velocidadpp_vs_t = document.getElementById("velocidadp-vs-t");
let tiempop_vs_t = document.getElementById("tiempop-vs-t");
let aceleracionp_vs_t = document.getElementById("aceleracionp-vs-t");
let respuesta = document.getElementById("vig");
let tiempo_estudio = document.getElementById("vi-pt-dat");

function updategrficap_vs_t(params) {
  let simu = document.getElementById("grficap-vs-t");
  if (simu == null) {
    $(".grficap-vs-t").attr("id", "grficap-vs-t");
    const myNode = document.getElementById("grficap-vs-t");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
}

const boton1 = document.getElementById("Reiniciar-Simulacion1");
boton1.addEventListener("click", (event) => {
  if (
    velocidadpp_vs_t.value != "" &&
    tiempop_vs_t.value != "" &&
    aceleracionp_vs_t != ""
  ) {
    updategrficap_vs_t();
    grficap_vs_t();
    grficap_vs_t_speeds();
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
  }
});

velocidadpp_vs_t.addEventListener("change", (event) => {
  updategrficap_vs_t();
  grficap_vs_t();
  grficap_vs_t_speeds();
});
tiempop_vs_t.addEventListener("change", (event) => {
  updategrficap_vs_t();
  grficap_vs_t();
  grficap_vs_t_speeds();
});
aceleracionp_vs_t.addEventListener("change", (event) => {
  updategrficap_vs_t();
  grficap_vs_t();
  grficap_vs_t_speeds();
});
tiempo_estudio.addEventListener("change", (event) => {
  grficap_vs_t_speeds();
});

function grficap_vs_t() {
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
        posicion_i,
        velocidad_i,
        tiempo_i,
        tiempo_f,
        aceleracion,
        deltaTiempo,
        distancia_f,
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
      posicion_i = 0;
      velocidad_i = parseFloat(velocidadpp_vs_t.value);
      tiempo_i = 0;
      tiempo_f = parseFloat(tiempop_vs_t.value);
      aceleracion = parseFloat(aceleracionp_vs_t.value);
      deltaTiempo = tiempo_f["-"]((1)["*"](tiempo_i));
      ("9");
      distancia_f = 0;
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Posicion</i>",
          xmin: tiempo_i,
          xmax: deltaTiempo,
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
      plot1.plot(tiempo_i, distancia_f);
      while (tiempo_i["<"](deltaTiempo)) {
        await rate(10);
        tiempo_i = tiempo_i["+"](1);
        distancia_f = posicion_i["+"](velocidad_i["*"](tiempo_i))["+"](
          (1)["/"](2)["*"](aceleracion)["*"](Math.pow(tiempo_i, 2))
        );
        plot1.plot(tiempo_i, distancia_f);
        print(distancia_f);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#grficap-vs-t").removeAttr("id"),
      };
      __main__();
    });
  })();
}
function grficap_vs_t_speeds() {
  const out_vm = document.getElementById("vmg");
  const out_pf = document.getElementById("PosicionFinal");
  let v_i = parseFloat(velocidadpp_vs_t.value);
  let deltat = parseFloat(tiempop_vs_t.value);
  let aceleracion = parseFloat(aceleracionp_vs_t.value);
  let tiempo_estudio = document.getElementById("vi-pt-dat");

  const Posicion_f =
    v_i * deltat + (1 / 2) * (aceleracion * Math.pow(deltat, 2));

  out_pf.innerHTML = Posicion_f + " m";

  let velocidad_m = (Posicion_f - v_i) / deltat;
  out_vm.innerHTML = velocidad_m + " m/s";

  const expression =
    v_i.toString() + "*t+(1/2)" + aceleracion.toString() + "*t^2";
  Resultado = math
    .derivative(expression, "t")
    .evaluate({ t: tiempo_estudio.value });
  respuesta.innerHTML = Resultado + " m/s";
}

const ac_v_vs_t = document.getElementById("ac-v-vs-t");
const ti_v_vs_t = document.getElementById("ti-v-vs-t");
const velocidad_f_out = document.getElementById("VelocidadFinal");

function updategrfica_v_vs_t(params) {
  let simu = document.getElementById("grficap-vs-t-out");
  if (simu == null) {
    $(".grficap-vs-t-out").attr("id", "grficap-vs-t-out");
    const myNode = document.getElementById("grficap-vs-t-out");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
}
function updategrfica_v_vs_t_neg(params) {
  let simu = document.getElementById("grficap-vs-t-out-neg");
  if (simu == null) {
    $(".grficap-vs-t-out-neg").attr("id", "grficap-vs-t-out-neg");
    const myNode = document.getElementById("grficap-vs-t-out-neg");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
}
const boton2 = document.getElementById("Reiniciar-Simulacion2");
boton2.addEventListener("click", (event) => {
  if (ac_v_vs_t.value != "" && ti_v_vs_t.value != "") {
    updategrfica_v_vs_t();updategrfica_v_vs_t_neg();grafica_v_vs_t();grafica_v_vs_t_n();
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
  }
});
ac_v_vs_t.addEventListener("change", (event) => {
  updategrfica_v_vs_t();
  updategrfica_v_vs_t_neg();
  grafica_v_vs_t();
  velocidad_f_out.innerHTML = velocidadFinalv_vs_t() + " m/s";
  grafica_v_vs_t_n();
  aceleracionv_vs_t();
});
ti_v_vs_t.addEventListener("change", (event) => {
  updategrfica_v_vs_t();
  updategrfica_v_vs_t_neg();
  grafica_v_vs_t();
  velocidad_f_out.innerHTML = velocidadFinalv_vs_t() + " m/s";
  grafica_v_vs_t_n();
  aceleracionv_vs_t();
});

function grafica_v_vs_t() {
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
        velocidad_i,
        aceleracion,
        tiempo,
        t_i,
        velocidad_f,
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
      velocidad_i = 0;
      aceleracion = parseFloat(ac_v_vs_t.value);
      tiempo = parseFloat(ti_v_vs_t.value);
      t_i = 0;
      velocidad_f = 0;
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Velocidad</i>",
          xmin: 0,
          xmax: tiempo,
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
      plot1.plot(t_i, velocidad_f);
      while (t_i["<="](tiempo)) {
        await rate(10);
        velocidad_f = velocidad_i["+"](aceleracion["*"](t_i));
        plot1.plot(t_i, velocidad_f);
        t_i = t_i["+"](1);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#grficap-vs-t-out").removeAttr("id"),
      };
      __main__();
    });
  })();
}
function velocidadFinalv_vs_t() {
  let velocidad_f = parseFloat(ac_v_vs_t.value) * parseFloat(ti_v_vs_t.value);
  return velocidad_f;
}
function aceleracionv_vs_t() {
  const aceleracion_v_vs_t_out = document.getElementById("Aceleracion_v_vs_t");
  let deltav = velocidadFinalv_vs_t();
  let deltat = parseFloat(ti_v_vs_t.value);
  aceleracion_v_vs_t_out.innerHTML = deltav / deltat;
}

function grafica_v_vs_t_n() {
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
        velocidad_i,
        aceleracion,
        tiempo,
        t_i,
        velocidad_f,
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
      velocidad_i = velocidadFinalv_vs_t();
      aceleracion = parseFloat(ac_v_vs_t.value);
      tiempo = parseFloat(ti_v_vs_t.value);
      t_i = 0;
      velocidad_f = 0;
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Velocidad</i>",
          xmin: 0,
          xmax: tiempo,
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
      plot1.plot(t_i, velocidad_f);
      while (t_i["<="](tiempo)) {
        await rate(10);
        velocidad_f = velocidad_i["+"]((1)["-u"]()["*"](aceleracion)["*"](t_i));
        plot1.plot(t_i, velocidad_f);
        t_i = t_i["+"](1);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#grficap-vs-t-out-neg").removeAttr("id"),
      };
      __main__();
    });
  })();
  // END JAVASCRIPT
}

const velocidadFinala_vs_t = document.getElementById("velocidadavst");
const tiempoFinala_vs_t = document.getElementById("tiempoavst");

function updategrfica_a_vs_t() {
  let simu = document.getElementById("grafica-a-vs-t");
  if (simu == null) {
    $(".grafica-a-vs-t").attr("id", "grafica-a-vs-t");
    const myNode = document.getElementById("grafica-a-vs-t");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
}

const boton3 = document.getElementById("Reiniciar-Simulacion3")
boton3.addEventListener("click", (event)=>{
  if (velocidadFinala_vs_t.value != "" && tiempoFinala_vs_t.value != "") {
    updategrfica_a_vs_t();
    grafica_a_vs_t();
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
  }
  
})
velocidadFinala_vs_t.addEventListener("change", (event) => {
  updategrfica_a_vs_t();
  grafica_a_vs_t();
});
tiempoFinala_vs_t.addEventListener("change", (event) => {
  updategrfica_a_vs_t();
  grafica_a_vs_t();
});

function grafica_a_vs_t(params) {
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
        pr,
        velocidadFinal,
        tiempoFinal,
        aceleracion,
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
      pr = 0;
      velocidadFinal = parseFloat(velocidadFinala_vs_t.value);
      tiempoFinal = parseFloat(tiempoFinala_vs_t.value);
      aceleracion = velocidadFinal["/"](tiempoFinal);
      g = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 225,
          xtitle: "<i>Tiempo</i>",
          ytitle: "<i>Aceleracion</i>",
          xmin: pr,
          xmax: tiempoFinal,
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
      plot1.plot(pr, aceleracion);
      while (pr["<="](tiempoFinal)) {
        await rate(10);
        plot1.plot(pr, aceleracion);
        pr = pr["+"](1);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#grafica-a-vs-t").removeAttr("id"),
      };
      __main__();
    });
  })();
}

let altura_y_s = document.getElementById("Altura");
let Velocidad_i_x = document.getElementById("v_x");
let velocidad_i_y = document.getElementById("v_y");

// function updatesimulacionCaida() {
//   let simu = document.getElementById("simulacionCaidaLibre");
//   if (simu == null) {
//     $(".simulacionCaidaLibre").attr("id", "simulacionCaidaLibre");
//     const myNode = document.getElementById("simulacionCaidaLibre");
//     while (myNode.firstChild) {
//       myNode.removeChild(myNode.lastChild);
//     }
//   }
// }

function simulacionCaidaL() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};
    let simu = document.getElementById("simulacionCaidaLibre");
    if (simu == null) {
      $(".simulacionCaidaLibre").attr("id", "simulacionCaidaLibre");
      const myNode = document.getElementById("simulacionCaidaLibre");
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
        ground,
        altura,
        Safi,
        time,
        time_step,
        dvx,
        dvy,
        dx,
        dy;
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
          width: 700,
          height: 300,
          background: vector(250, 250, 250),
        }),
      ]);
      ground = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(0, 0, 0),
          color: color.blue,
          size: vector(10000, 0.5, 0.01),
        }),
      ]);
      canva1.range = 4;
      altura = parseFloat(altura_y_s.value);
      Safi = await marker(0, altura, color.blue);
      canva1.camera.follow(Safi);
      Safi.vx = parseFloat(Velocidad_i_x.value);
      Safi.vy = parseFloat(velocidad_i_y.value);
      Safi.ax = 0;
      Safi.ay = (1)["-u"]()["*"](9.8);
      time = 0;
      time_step = 0.02;
      while (Safi.pos.y[">="](ground.pos.y)) {
        dvx = Safi.ax["*"](time_step);
        dvy = Safi.ay["*"](time_step);
        await accelerate(Safi, dvx, dvy);
        dx = Safi.vx["*"](time_step);
        dy = Safi.vy["*"](time_step);
        await move(Safi, dx, dy);
        time = time["+"](time_step);
      }
      async function marker(x, y, col) {
        var ρσ_ls, a;
        await sleep(0.1);
        a = ρσ_interpolate_kwargs.call(this, sphere, [
          ρσ_desugar_kwargs({
            pos: vector(x, y, 0),
            radius: 0.2,
            color: col,
            make_trail: true,
            trail_type: "points",
            interval: 5,
            initial_pos: vector(x, y, 0),
            distance: 0,
          }),
        ]);
        return a;
      }
      if (!marker.__argnames__)
        Object.defineProperties(marker, {
          __argnames__: { value: ["x", "y", "col"] },
          __module__: { value: null },
        });

      async function accelerate(name, dvx, dvy) {
        name.vx = name.vx["+"](dvx);
        name.vy = name.vy["+"](dvy);
        return;
      }
      if (!accelerate.__argnames__)
        Object.defineProperties(accelerate, {
          __argnames__: { value: ["name", "dvx", "dvy"] },
          __module__: { value: null },
        });

      async function move(name, dx, dy) {
        await sleep(0.005);
        name.pos = name.pos["+"](vector(dx, dy, 0));
        name.distance = name.distance["+"](
          sqrt(Math.pow(dx, 2)["+"](Math.pow(dy, 2)))
        );
        return;
      }
      if (!move.__argnames__)
        Object.defineProperties(move, {
          __argnames__: { value: ["name", "dx", "dy"] },
          __module__: { value: null },
        });

      async function distance(name) {
        return name.distance;
      }
      if (!distance.__argnames__)
        Object.defineProperties(distance, {
          __argnames__: { value: ["name"] },
          __module__: { value: null },
        });
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacionCaidaLibre").removeAttr("id"),
      };
      __main__();
    });
  })();
}

function Graficas(params) {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("distanciavstiempocaidaL");
    if (simu == null) {
      $(".distanciavstiempocaidaL").attr("id", "distanciavstiempocaidaL");
      const myNode = document.getElementById("distanciavstiempocaidaL");
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
        ground,
        altura,
        posicion_inicial_x,
        position_graph,
        velocity_graph,
        Safi,
        time,
        time_step,
        dvx,
        dvy,
        dx,
        dy;
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
          width: 100,
          height: 68.6,
          background: vector(250, 250, 250),
          resizable: false,
        }),
      ]);
      canva1.visible = false;
      ground = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(0, 0, 0),
          color: color.blue,
          size: vector(20, 0.2, 0.01),
        }),
      ]);
      altura = parseFloat(altura_y_s.value);
      posicion_inicial_x = 0;
      position_graph = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({ xtitle: "tiempo", ytitle: "posicion", width: 475 }),
      ]);
      velocity_graph = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({ xtitle: "tiempo", ytitle: "velocidad" }),
      ]);
      Safi = await marker(0.5, altura, color.red);
      Safi.vx = parseFloat(Velocidad_i_x.value);
      Safi.vy = parseFloat(velocidad_i_y.value);
      Safi.ax = 0;
      Safi.ay = (1)["-u"]()["*"](9.8);
      Safi.xcurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          label: "aceleracion x",
          color: color.red,
          graph: position_graph,
          dot: true,
          dot_color: color.red,
        }),
      ]);
      Safi.ycurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          label: "aceleracion y",
          color: color.blue,
          graph: position_graph,
          dot: true,
          dot_color: color.blue,
        }),
      ]);
      Safi.vxcurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          label: "velocidad x",
          color: color.red,
          graph: velocity_graph,
          dot: true,
          dot_color: color.red,
        }),
      ]);
      Safi.vycurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          label: "velocidad y",
          color: color.blue,
          graph: velocity_graph,
          dot: true,
          dot_color: color.blue,
        }),
      ]);
      time = 0;
      time_step = 0.01;
      while (Safi.pos.y[">="](ground.pos.y)) {
        dvx = Safi.ax["*"](time_step);
        dvy = Safi.ay["*"](time_step);
        await accelerate(Safi, dvx, dvy);
        dx = Safi.vx["*"](time_step);
        dy = Safi.vy["*"](time_step);
        await move(Safi, dx, dy);
        ρσ_interpolate_kwargs.call(Safi.xcurve, Safi.xcurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, Safi.pos.x] }),
        ]);
        ρσ_interpolate_kwargs.call(Safi.ycurve, Safi.ycurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, Safi.pos.y] }),
        ]);
        ρσ_interpolate_kwargs.call(Safi.vxcurve, Safi.vxcurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, Safi.vx] }),
        ]);
        ρσ_interpolate_kwargs.call(Safi.vycurve, Safi.vycurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, Safi.vy] }),
        ]);
        time = time["+"](time_step);
      }
      async function marker(x, y, col) {
        var ρσ_ls, a;
        await sleep(0.1);
        a = ρσ_interpolate_kwargs.call(this, sphere, [
          ρσ_desugar_kwargs({
            pos: vector(x, y, 0),
            radius: 0,
            initial_pos: vector(x, y, 0),
            distance: 0,
          }),
        ]);
        return a;
      }
      if (!marker.__argnames__)
        Object.defineProperties(marker, {
          __argnames__: { value: ["x", "y", "col"] },
          __module__: { value: null },
        });

      async function accelerate(name, dvx, dvy) {
        name.vx = name.vx["+"](dvx);
        name.vy = name.vy["+"](dvy);
        return;
      }
      if (!accelerate.__argnames__)
        Object.defineProperties(accelerate, {
          __argnames__: { value: ["name", "dvx", "dvy"] },
          __module__: { value: null },
        });

      async function move(name, dx, dy) {
        await sleep(0.005);
        name.pos = name.pos["+"](vector(dx, dy, 0));
        name.distance = name.distance["+"](
          sqrt(Math.pow(dx, 2)["+"](Math.pow(dy, 2)))
        );
        return;
      }
      if (!move.__argnames__)
        Object.defineProperties(move, {
          __argnames__: { value: ["name", "dx", "dy"] },
          __module__: { value: null },
        });

      ("70");
      async function distance(name) {
        "71";
        return name.distance;
      }
      if (!distance.__argnames__)
        Object.defineProperties(distance, {
          __argnames__: { value: ["name"] },
          __module__: { value: null },
        });
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#distanciavstiempocaidaL").removeAttr("id"),
      };
      __main__();
    });
  })();
  // END JAVASCRIPT
}
altura_y_s.addEventListener("change", (event) => {
  simulacionCaidaL();
});
Velocidad_i_x.addEventListener("change", (event) => {
  simulacionCaidaL();
});
velocidad_i_y.addEventListener("change", (event) => {
  simulacionCaidaL();
});
const boton = document.getElementById("Ver_graficas");
boton.addEventListener("click", Graficas);

const boton4 = document.getElementById("Reiniciar-Simulacion4")
boton4.addEventListener("click", (event)=>{
  if (altura_y_s.value != "" && Velocidad_i_x.value != "" && velocidad_i_y.value != "") {
    simulacionCaidaL();
  } else {
    alert("INGRESE LOS DATOS PARA LA SIMULACIÓN");
  }
})
