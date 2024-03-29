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
    aceleracionp_vs_t.value != ""
  ) {
    updategrficap_vs_t();
    grficap_vs_t();
    grficap_vs_t_speeds();
  } else {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
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

  let velocidad_m = Posicion_f / deltat;
  out_vm.innerHTML = velocidad_m + " m/s";

  const expression =
    v_i.toString() + "*t+(1/2)*" + aceleracion.toString() + "*t^2";
  console.log(expression);
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
    updategrfica_v_vs_t();
    updategrfica_v_vs_t_neg();
    grafica_v_vs_t();
    grafica_v_vs_t_n();
  } else {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
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

const boton3 = document.getElementById("Reiniciar-Simulacion3");
boton3.addEventListener("click", (event) => {
  if (velocidadFinala_vs_t.value != "" && tiempoFinala_vs_t.value != "") {
    updategrfica_a_vs_t();
    grafica_a_vs_t();
  } else {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
  }
});
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
boton.addEventListener("click", (event) => {
  if (
    altura_y_s.value != "" &&
    velocidad_i_y.value != "" &&
    Velocidad_i_x.value != ""
  ) {
    Graficas();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE HAN ENCONTRADO VALORES PARA GRAFICAR",
      confirmButtonColor: "#020887",
    });
  }
});

const boton4 = document.getElementById("Reiniciar-Simulacion4");

boton4.addEventListener("click", (event) => {
  if (
    altura_y_s.value != "" &&
    Velocidad_i_x.value != "" &&
    velocidad_i_y.value != ""
  ) {
    simulacionCaidaL();
  } else {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
  }
});

var theta = document.getElementById("rampa_grados"); // Ángulo en grados
var b = document.getElementById("rampa_long"); // Longitud del cateto adyacente

const simulacionRampa = () => {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    // Convertir el ángulo a radianes
    var radianes = theta.value * (Math.PI / 180);

    //Calculat El valot de la tangente
    var tan = Math.tan(radianes);

    var a = tan * b.value;

    var hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b.value, 2));

    //Calculo de la aceleración
    var aceleracion = 9.8 * Math.sin(radianes);
    console.log(aceleracion);

    //Calculo del tiempo
    var tiempo = Math.sqrt((2 * hipotenusa) / aceleracion);

    let simu = document.getElementById("simulacionCaidarampa");
    if (simu == null) {
      $(".simulacionCaidarampa").attr("id", "simulacionCaidarampa");
      const myNode = document.getElementById("simulacionCaidarampa");
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
        punto_inicio,
        punto_fin,
        Punto_inicio_o,
        Punto_fin_o,
        Punto_inicio_h,
        Punto_fin_h,
        Adyacente,
        Opuesto,
        Hipotenusa,
        cubo,
        direccion,
        distancia,
        delta,
        angulo,
        delta_x,
        delta_y,
        arrow_up,
        arrow_down,
        arrow_forward,
        t_inicial;
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

      scene.background = color.white;
      scene.width = 700;
      scene.height = 200;
      punto_inicio = vector(parseFloat(b.value), 0, 0);
      punto_fin = vector(0, 0, 0);
      Punto_inicio_o = punto_fin;
      Punto_fin_o = vector(punto_fin.x, a, 0);
      Punto_inicio_h = punto_inicio;
      Punto_fin_h = Punto_fin_o;
      Adyacente = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([punto_inicio, punto_fin]),
          color: color.black,
          radius: 0.1,
        }),
      ]);
      Opuesto = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([Punto_inicio_o, Punto_fin_o]),
          color: color.red,
          radius: 0.1,
        }),
      ]);
      Hipotenusa = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([Punto_inicio_h, Punto_fin_h]),
          color: color.green,
          radius: 0.1,
        }),
      ]);
      cubo = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(punto_fin.x["+"](0.5), Punto_fin_o.y["+"](0.5), 0),
          size: vector(1, 1, 1),
          color: color.blue,
        }),
      ]);
      direccion = norm(punto_inicio["-"]((1)["*"](Punto_fin_o)));
      distancia = mag(punto_inicio["-"]((1)["*"](Punto_fin_o)));
      delta = (0.01)["*"](distancia)["/"](tiempo);
      angulo = radianes;
      delta_x = delta["*"](cos(angulo));
      delta_y = delta["*"](sin(angulo));
      ρσ_interpolate_kwargs.call(cubo, cubo.rotate, [
        ρσ_desugar_kwargs({ angle: -angulo, axis: vector(0, 0, 1) }),
      ]);
      arrow_up = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(2, 2, 0),
          color: color.orange,
          shaftwidth: 0.1,
        }),
      ]);
      arrow_down = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(0, (1)["-u"]()["*"](2), 0),
          color: color.purple,
          shaftwidth: 0.1,
        }),
      ]);
      arrow_forward = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(3, (1)["-u"]()["*"](0.7), 0),
          color: color.cyan,
          shaftwidth: 0.1,
        }),
      ]);
      t_inicial = 0;
      while (t_inicial["<="](tiempo)) {
        await rate((1)["/"](0.01));
        cubo.pos.x = cubo.pos.x["+"](delta_x);
        cubo.pos.y = cubo.pos.y["-"](delta_y);
        t_inicial = t_inicial["+"](0.01);
        arrow_up.pos = cubo.pos;
        arrow_down.pos = cubo.pos;
        arrow_forward.pos = cubo.pos;
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });
    $(function () {
      window.__context = {
        glowscript_container: $("#simulacionCaidarampa").removeAttr("id"),
      };
      __main__();
    });
  })();
};

const graficav_t_ram = () => {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    // Convertir el ángulo a radianes
    var radianes = theta.value * (Math.PI / 180);

    //Calculat El valot de la tangente
    var tan = Math.tan(radianes);

    var a = tan * b.value;

    var hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b.value, 2));

    //Calculo de la aceleración
    var aceleracion = 9.8 * Math.sin(radianes);

    //Calculo del tiempo
    var tiempo = Math.sqrt((2 * hipotenusa) / aceleracion);

    let simu = document.getElementById("graficatiemmpoverl-ram");
    if (simu == null) {
      $(".graficatiemmpoverl-ram").attr("id", "graficatiemmpoverl-ram");
      const myNode = document.getElementById("graficatiemmpoverl-ram");
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
        v_0,
        a,
        grafica_velocidad,
        curva_velocidad,
        t,
        dt,
        v;
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
      v_0 = 0;
      a = aceleracion;
      async function calcular_velocidad(t) {
        return v_0["+"](a["*"](t));
      }
      if (!calcular_velocidad.__argnames__)
        Object.defineProperties(calcular_velocidad, {
          __argnames__: { value: ["t"] },
          __module__: { value: null },
        });

      grafica_velocidad = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 500,
          height: 300,
          xtitle: "Tiempo",
          ytitle: "Velocidad",
        }),
      ]);

      curva_velocidad = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({ color: color.blue }),
      ]);
      t = 0;
      dt = 0.1;
      while (t["<="](tiempo)) {
        await rate(10);
        v = await calcular_velocidad(t);
        curva_velocidad.plot(t, v);
        t = t["+"](dt);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#graficatiemmpoverl-ram").removeAttr("id"),
      };
      __main__();
    });
  })();
};

const graficap_t_ram = () => {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    // Convertir el ángulo a radianes
    var radianes = theta.value * (Math.PI / 180);

    //Calculat El valot de la tangente
    var tan = Math.tan(radianes);

    var a = tan * b.value;

    var hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b.value, 2));

    //Calculo de la aceleración
    var aceleracion = 9.8 * Math.sin(radianes);

    //Calculo del tiempo
    var tiempo = Math.sqrt((2 * hipotenusa) / aceleracion);

    let simu = document.getElementById("graficatiemmpoverl-ram");
    if (simu == null) {
      $(".graficatiemmpoverl-ram").attr("id", "graficatiemmpoverl-ram");
      const myNode = document.getElementById("graficatiemmpoverl-ram");
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
        x_0,
        v_0,
        a,
        grafica_distancia,
        curva_distancia,
        t,
        dt,
        x;
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
      x_0 = 0;
      v_0 = 0;
      a = aceleracion;
      async function calcular_posicion(t) {
        return x_0["+"](v_0["*"](t))["+"]((0.5)["*"](a)["*"](Math.pow(t, 2)));
      }
      if (!calcular_posicion.__argnames__)
        Object.defineProperties(calcular_posicion, {
          __argnames__: { value: ["t"] },
          __module__: { value: null },
        });

      grafica_distancia = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 500,
          height: 300,
          xtitle: "Tiempo",
          ytitle: "Distancia",
        }),
      ]);
      curva_distancia = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({ color: color.blue }),
      ]);
      t = 0;
      dt = 0.1;
      while (t["<="](tiempo)) {
        await rate(10);
        x = await calcular_posicion(t);
        curva_distancia.plot(t, x);
        t = t["+"](dt);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#graficatiemmpoverl-ram").removeAttr("id"),
      };
      __main__();
    });
  })();
};

//TABLAS
let tiempos = [];
let velocidades = [];
let distancias = [];
let linealizacion = [];

//Ejecuciones

theta.addEventListener("change", (event) => {
  simulacionRampa();
  graficav_t_ram();
  graficap_t_ram();
  if (b.value != "") {
    tablavvst(0.1);
  }
  if (tiempos.length > 0) {
    linealizacionDistancia(tiempos, distancias);
  }

  if (linealizacion.length > 0 && tiempos.length > 0) {
    llenartabla(
      tiempos,
      gettiempocuadrado(tiempos),
      linealizacion,
      getzt(tiempos, linealizacion),
      getformulota(tiempos, linealizacion, getPendiente(), getintercepto())
    );
    getincertidumbre();
  }
});

b.addEventListener("change", (event) => {
  simulacionRampa();
  graficav_t_ram();
  graficap_t_ram();
  if (theta.value != "") {
    tablavvst(0.1);
  }

  if (tiempos.length > 0) {
    linealizacionDistancia(tiempos, distancias);
  }

  if (linealizacion.length > 0 && tiempos.length > 0) {
    llenartabla(
      tiempos,
      gettiempocuadrado(tiempos),
      linealizacion,
      getzt(tiempos, linealizacion),
      getformulota(tiempos, linealizacion, getPendiente(), getintercepto())
    );
    getincertidumbre();
  }
});

//TABLAS
const tablavvst = (intervalo) => {
  var radianes = theta.value * (Math.PI / 180);
  var tan = Math.tan(radianes);
  var a = tan * b.value;
  var hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b.value, 2));
  var aceleracion = 9.8 * Math.sin(radianes);
  var tiempo = Math.sqrt((2 * hipotenusa) / aceleracion);

  let tiempoi = 0;

  if (tiempos.length >= 1) {
    tiempos = [];
    velocidades = [];
    distancias = [];
    linealizacion = [];
  }

  for (tiempoi; tiempoi <= tiempo; tiempoi += intervalo) {
    if (tiempos.length >= 7) {
      break; // Rompe el bucle si se alcanza el máximo de 7 valores
    }

    let distancia = 0.5 * (aceleracion * Math.pow(tiempoi, 2));
    let velocidad = aceleracion * tiempoi;
    velocidades.push(velocidad.toFixed(2));
    tiempos.push(parseFloat(tiempoi.toFixed(2)));
    distancias.push(distancia.toFixed(2));
  }

  if (
    document.getElementById("tablaTiempotsv").childElementCount > 0 ||
    document.getElementById("tablaTiempotvsd").childElementCount > 0
  ) {
    document.getElementById("tablaTiempotsv").innerHTML = " ";
    document.getElementById("tablaTiempotvsd").innerHTML = " ";
    const tablaHTML = document.createElement("table");
    tablaHTML.style.borderCollapse = "collapse";

    // Insertar fila de tiempos
    const filaTiempos = tablaHTML.insertRow();
    for (let i = 0; i < tiempos.length; i++) {
      const celdaTiempo = filaTiempos.insertCell();
      if (i !== 0) {
        celdaTiempo.textContent = tiempos[i];
      } else {
        celdaTiempo.textContent = "Tiempos";
      }
    }

    // Insertar fila de velocidades
    const filaVelocidades = tablaHTML.insertRow();
    for (let i = 0; i < velocidades.length; i++) {
      const celdaVelocidad = filaVelocidades.insertCell();
      if (i !== 0) {
        celdaVelocidad.textContent = velocidades[i];
      } else {
        celdaVelocidad.textContent = "Velocidad";
      }
    }

    document.getElementById("tablaTiempotsv").appendChild(tablaHTML);
  } else {
    const tablaHTML = document.createElement("table");
    tablaHTML.style.borderCollapse = "collapse";

    // Insertar fila de tiempos
    const filaTiempos = tablaHTML.insertRow();
    for (let i = 0; i < tiempos.length; i++) {
      const celdaTiempo = filaTiempos.insertCell();
      if (i !== 0) {
        celdaTiempo.textContent = tiempos[i];
      } else {
        celdaTiempo.textContent = "t (s)";
      }
    }

    // Insertar fila de velocidades
    const filaVelocidades = tablaHTML.insertRow();
    for (let i = 0; i < velocidades.length; i++) {
      const celdaVelocidad = filaVelocidades.insertCell();
      if (i !== 0) {
        celdaVelocidad.textContent = velocidades[i];
      } else {
        celdaVelocidad.textContent = "v ";
      }
    }

    document.getElementById("tablaTiempotsv").appendChild(tablaHTML);
  }

  const tablaDt = document.createElement("table");
  tablaDt.style.borderCollapse = "collapse";

  // Insertar fila de tiempos
  const filaTiempos = tablaDt.insertRow();
  for (let i = 0; i < tiempos.length; i++) {
    const celdaTiempo = filaTiempos.insertCell();
    if (i !== 0) {
      celdaTiempo.textContent = tiempos[i];
    } else {
      celdaTiempo.textContent = "t (s)";
    }
  }

  // Insertar fila de velocidades
  const filaVelocidades = tablaDt.insertRow();
  for (let i = 0; i < distancias.length; i++) {
    const celdaVelocidad = filaVelocidades.insertCell();
    if (i !== 0) {
      celdaVelocidad.textContent = distancias[i];
    } else {
      celdaVelocidad.textContent = "x (cm)";
    }
  }

  document.getElementById("tablaTiempotvsd").appendChild(tablaDt);
};

const linealizacionDistancia = (tiempo, distancia) => {
  if (tiempo.length > 0 && distancia.length > 0) {
    for (i = 0; i < tiempo.length; i++) {
      let distanciaL = distancia[i] / tiempo[i];
      linealizacion.push(parseFloat(distanciaL.toFixed(2)));
      if (typeof (linealizacion[0] != "number")) {
        linealizacion[0] = 0;
      }
    }
    console.log(tiempos);
    console.log(linealizacion);
  } else {
    return [];
  }

  if (document.getElementById("tablaTiempotvsd-lin").childElementCount > 0) {
    document.getElementById("tablaTiempotvsd-lin").innerHTML = " ";
    const tablaHTML = document.createElement("table");
    tablaHTML.style.borderCollapse = "collapse";

    // Insertar fila de tiempos
    const filaTiempos = tablaHTML.insertRow();
    for (let i = 0; i < tiempos.length; i++) {
      const celdaTiempo = filaTiempos.insertCell();
      if (i !== 0) {
        celdaTiempo.textContent = tiempos[i];
      } else {
        celdaTiempo.textContent = "t (s)";
      }
    }

    // Insertar fila de velocidades
    const filaVelocidades = tablaHTML.insertRow();
    for (let i = 0; i < linealizacion.length; i++) {
      const celdaVelocidad = filaVelocidades.insertCell();
      if (i !== 0) {
        celdaVelocidad.textContent = linealizacion[i];
      } else {
        celdaVelocidad.textContent = "x/t (cm/s)";
      }
    }

    document.getElementById("tablaTiempotvsd-lin").appendChild(tablaHTML);
  } else {
    const tablaHTML = document.createElement("table");
    tablaHTML.style.borderCollapse = "collapse";

    // Insertar fila de tiempos
    const filaTiempos = tablaHTML.insertRow();
    for (let i = 0; i < tiempos.length; i++) {
      const celdaTiempo = filaTiempos.insertCell();
      if (i !== 0) {
        celdaTiempo.textContent = tiempos[i];
      } else {
        celdaTiempo.textContent = "t (s)";
      }
    }

    // Insertar fila de velocidades
    const filaVelocidades = tablaHTML.insertRow();
    for (let i = 0; i < linealizacion.length; i++) {
      const celdaVelocidad = filaVelocidades.insertCell();
      if (i !== 0) {
        celdaVelocidad.textContent = linealizacion[i];
      } else {
        celdaVelocidad.textContent = "x/t (cm/s)";
      }
    }

    document.getElementById("tablaTiempotvsd-lin").appendChild(tablaHTML);
  }
};

const getintercepto = () => {
  var tiempo = tiempos;
  var distancia = linealizacion;

  // Ajuste de la recta utilizando el método de mínimos cuadrados
  var sumX = 0;
  var sumY = 0;
  var sumXY = 0;
  var sumXX = 0;

  for (var i = 0; i < tiempo.length; i++) {
    sumX += tiempo[i];
    sumY += distancia[i];
    sumXY += tiempo[i] * distancia[i];
    sumXX += tiempo[i] * tiempo[i];
  }

  var n = tiempo.length;
  var m = getPendiente();
  var c = (sumY - m * sumX) / n;

  return c;
};

const getPendiente = () => {
  var tiempo = tiempos;
  var distancia = linealizacion;

  // Ajuste de la recta utilizando el método de mínimos cuadrados
  var sumX = 0;
  var sumY = 0;
  var sumXY = 0;
  var sumXX = 0;

  for (var i = 0; i < tiempo.length; i++) {
    sumX += tiempo[i];
    sumY += distancia[i];
    sumXY += tiempo[i] * distancia[i];
    sumXX += tiempo[i] * tiempo[i];
  }

  var n = tiempo.length;
  var m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

  return m;
};

const graficoDistanciaLineal = () => {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("graftalin");
    if (simu == null) {
      $(".graftalin").attr("id", "graftalin");
      const myNode = document.getElementById("graftalin");
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
        tiempo,
        distancia,
        pendiente,
        intercepto,
        scene,
        graph,
        curve,
        curve2,
        ρσ_unpack,
        t,
        d;
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
      tiempo = tiempos;
      distancia = linealizacion;

      pendiente = getPendiente().toFixed(3);
      intercepto = getintercepto().toFixed(3);

      scene = ρσ_interpolate_kwargs.call(this, display, [
        ρσ_desugar_kwargs({
          title: "Gráfico de tiempo vs distancia",
          width: 600,
          height: 400,
        }),
      ]);
      graph = ρσ_interpolate_kwargs.call(this, gdisplay, [
        ρσ_desugar_kwargs({
          x: 0,
          y: 0,
          width: 800,
          height: 400,
          title: "Gráfico de tiempo vs distancia",
          xtitle: "Tiempo",
          ytitle: "Distancia",
          fast: false,
          scroll: true,
          xmin: 0,
          xmax: tiempo,
        }),
      ]);
      curve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          color: color.red,
          label: "Pendiente: "["+"](str(pendiente)),
        }),
      ]);
      curve2 = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          color: color.blue,
          label: "Intercepto: "["+"](str(intercepto)),
        }),
      ]);
      var ρσ_Iter1 = await zip(tiempo, distancia);
      ρσ_Iter1 =
        typeof ρσ_Iter1[Symbol.iterator] === "function"
          ? ρσ_Iter1 instanceof Map
            ? ρσ_Iter1.keys()
            : ρσ_Iter1
          : Object.keys(ρσ_Iter1);
      for (var ρσ_Index1 of ρσ_Iter1) {
        ρσ_unpack = ρσ_Index1;
        t = ρσ_unpack[0];
        d = ρσ_unpack[1];
        curve.plot(t, d);
        curve2.plot(t, d);
      }
      while (true) {
        await rate(10);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#graftalin").removeAttr("id"),
      };
      __main__();
    });
  })();
};

// ! MINIMOS CUADRADOS
let tabletiempo = tiempos;
let tabladistancia = linealizacion;
let tablatiempoCuadrado = [];
let tablazt = [];
let tablaFormulota = [];

const gettiempocuadrado = (tiempos) => {
  if (tablatiempoCuadrado.length >= 1) {
    tablatiempoCuadrado = [];
  }

  for (let i = 0; i < tiempos.length; i++) {
    let tcua = Math.pow(tiempos[i], 2);
    tablatiempoCuadrado.push(tcua.toFixed(2));
  }
  return tablatiempoCuadrado;
};

const getzt = (tiempo, distancia) => {
  if (tablazt.length >= 1) {
    tablazt = [];
  }
  for (let i = 0; i < tiempo.length; i++) {
    let zt = distancia[i] * tiempo[i];
    tablazt.push(zt.toFixed(2));
  }
  return tablazt;
};

const getformulota = (tiempo, distancia, m, c) => {
  if (tablaFormulota.length >= 1) {
    tablaFormulota = [];
  }

  for (let i = 0; i < tiempo.length; i++) {
    let formulota = Math.pow(distancia[i] - m * tiempo[i] - c, 2);
    tablaFormulota.push(formulota.toFixed(5));
  }
  console.log("FORMULOTAAAA " + sumformu);
  return tablaFormulota;
};

let sumt = 0;
let sumz = 0;
let sumt2 = 0;
let sumzt = 0;
let sumformu = 0;
let aceleracion = 0;
let resultadoreal = 0;

const llenartabla = (tiempo, tiempocuadrado, linealizacion, zt, formulota) => {
  sumt = 0;
  sumz = 0;
  sumt2 = 0;
  sumzt = 0;
  sumformu = 0;
  (aceleracion = 0), (resultadoreal = 0);
  var tiempoCells = document.getElementsByClassName("tiempo");
  var tiempocuadradoCells = document.getElementsByClassName("tiempocuadrado");
  var ztablaCells = document.getElementsByClassName("ztabla");
  var zttablaCells = document.getElementsByClassName("zttabla");
  var formulotaCells = document.getElementsByClassName("formulota");

  for (var i = 0; i < tiempoCells.length; i++) {
    tiempoCells[i].innerHTML = tiempo[i];
    tiempocuadradoCells[i].innerHTML = tiempocuadrado[i];
    ztablaCells[i].innerHTML = linealizacion[i];
    zttablaCells[i].innerHTML = zt[i];
    formulotaCells[i].innerHTML = formulota[i];
  }

  //!SUMATORIAS
  var sumtCells = document.getElementsByClassName("sumt");
  for (var i = 0; i < tiempo.length; i++) {
    sumt += tiempo[i];
  }

  var sumzCells = document.getElementsByClassName("sumz");
  for (var i = 0; i < linealizacion.length; i++) {
    sumz += linealizacion[i];
  }

  var sumt2Cells = document.getElementsByClassName("sumt2");
  for (var i = 0; i < tiempocuadrado.length; i++) {
    sumt2 += parseFloat(tiempocuadrado[i]);
  }

  var sumztCells = document.getElementsByClassName("sumzt");
  for (var i = 0; i < zt.length; i++) {
    sumzt += parseFloat(zt[i]);
  }

  var sumformuCells = document.getElementsByClassName("sumformu");
  for (var i = 0; i < formulota.length; i++) {
    sumformu += parseFloat(formulota[i]);
  }

  sumtCells[0].innerHTML = sumt.toFixed(2);
  sumzCells[0].innerHTML = sumz.toFixed(2);
  sumt2Cells[0].innerHTML = sumt2.toFixed(2);
  sumztCells[0].innerHTML = sumzt.toFixed(2);
  sumformuCells[0].innerHTML = sumformu.toFixed(6);

  resultadoreal =
    (tiempo.length * sumzt - sumt * sumz) /
    (tiempo.length * sumt2 - Math.pow(sumt, 2));

  const Resultado = document.getElementById("respuestaejemploxd");
  Resultado.innerHTML = `m = (${tiempo.length}(${sumzt.toFixed(
    2
  )})-(${sumt.toFixed(2)})(${sumz.toFixed(2)}))/(${
    tiempo.length
  }(${sumt2.toFixed(2)})-(${Math.pow(sumt, 2)})) =  ${resultadoreal.toFixed(
    3
  )}`;

  console.log(resultadoreal);

  aceleracion = 2 * resultadoreal;
  document.getElementById(
    "Aceleracionejercicio"
  ).innerHTML = `${aceleracion.toFixed(2)}`;

  const origen = { x: 0, y: aceleracion };
  const destino = { x: tiempo.length, y: aceleracion };

  // Crear los datos de la línea
  const trace = {
    x: [origen.x, destino.x],
    y: [origen.y, destino.y],
    mode: "lines",
  };

  // Crear el diseño de la gráfica
  const layout = {
    xaxis: { range: [0, tiempo.length] },
    yaxis: { range: [0, aceleracion + 5] },
  };

  // Crear el arreglo de datos
  const data = [trace];

  Plotly.newPlot("grafica-aceleracionrampa", data, layout);
};

const getincertidumbre = () => {
  // Agregar el valor de formulota al html
  document.getElementById("numeradorgamma").innerHTML = `${sumformu.toFixed(
    5
  )}`;
  document.getElementById("denominadorgamma").innerHTML = `${
    tiempos.length - 2
  }`;

  //CALCULO GAMMA
  let gamma = Math.sqrt(sumformu / (tiempos.length - 2));
  document.getElementById("ResultadoGamma").innerHTML = `${gamma.toFixed(5)}`;

  //LLENAR TABLA
  let n_incer = document.getElementsByClassName("n_incer");
  let gamma_incer = document.getElementsByClassName("gamma_incer");
  let sumax2 = document.getElementsByClassName("sumax2");
  let sumax = document.getElementsByClassName("sumax");
  let denominadorincer = Math.abs(tiempos.length * sumt2 - Math.pow(sumt, 2));
  let totalincer =
    (gamma * Math.sqrt(tiempos.length)) / Math.sqrt(denominadorincer);

  n_incer[0].innerHTML = tiempos.length;
  gamma_incer[0].innerHTML = gamma.toFixed(5);
  sumax2[0].innerHTML = sumt2.toFixed(2);
  sumax[0].innerHTML = sumt;

  var gammaFixed = gamma.toFixed(5);
  var tiemposLength = tiempos.length;
  var sumt2Fixed = sumt2.toFixed(2);
  var denominadorIncer = denominadorincer.toFixed(3);
  var totalIncer = totalincer.toFixed(3);
  var totalIncerTimes2 = (2 * totalIncer).toFixed(3);
  var aceleracionFixed = aceleracion.toFixed(3);

  var formula1 = `\\Delta m = \\left( \\frac{1}{2} \\right)\\Delta a = \\frac{${gammaFixed} \\sqrt{${tiemposLength}}}{\\sqrt{${tiemposLength}(${sumt2Fixed})-(${sumt})^2}} = \\frac{${gammaFixed} \\sqrt{${tiemposLength}}}{\\sqrt{${denominadorIncer}}} \\approx ${totalIncer}`;
  renderMathJax("Resulincer", formula1);

  var formula2 = `\\Delta a = 2(${totalIncer})\\ cm/s^2 \\rightarrow \\Delta a = ${totalIncerTimes2}\\ cm/s^2`;
  renderMathJax("Incertidumbre_aceleracion", formula2);

  var resultado = `a = (${aceleracionFixed} \\pm ${totalIncerTimes2})\\ cm/s^2`;
  renderMathJax("Resultado-incertidumbre-masmeno", resultado);

  var errorporcentual = `\\%\\varepsilon _r = \\left ( \\frac{${totalIncerTimes2}}{${aceleracionFixed}} \\times 100\\right)\\% \\rightarrow \\%\\varepsilon _r = ${(
    (totalIncerTimes2 / aceleracionFixed) *
    100
  ).toFixed(1)}\\%`;
  renderMathJax("errorporcentualaceleracion", errorporcentual);

  var velocidad_inicial = `b=v_0=\\frac{(${sumz.toFixed(
    2
  )})-${resultadoreal.toFixed(2)}(${sumt})}{${tiempos.length}} = ${(
    (sumz - resultadoreal * sumt) /
    tiempos.length
  ).toFixed(3)}\\ cm/s`;
  renderMathJax("Velocidad_inicial", velocidad_inicial);

  var incertidumbre_velocidad_inicial = `\\Delta b = ${totalIncer} \\sqrt{\\frac{${sumt2Fixed} }{${tiemposLength}}}= ${(
    totalIncer * Math.sqrt(sumt2Fixed / tiemposLength)
  ).toFixed(3)}\\ cm/s`;
  renderMathJax("incertidumbreVelocidad", incertidumbre_velocidad_inicial);

  var inicialterminada = `v_0 = (${(
    (sumz - resultadoreal * sumt) /
    tiempos.length
  ).toFixed(3)} \\pm ${(
    totalIncer * Math.sqrt(sumt2Fixed / tiemposLength)
  ).toFixed(3)}\\ cm/s)`;
  renderMathJax("velocidadinicialterminada", inicialterminada);
};

function renderMathJax(elementId, formula) {
  var element = document.getElementById(elementId);
  element.innerHTML = "\\(" + formula + "\\)";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
}

//LABORATORIO

const ejemplolab = () => {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("LaboratorioejemploSim");
    if (simu == null) {
      $(".LaboratorioejemploSim").attr("id", "LaboratorioejemploSim");
      const myNode = document.getElementById("LaboratorioejemploSim");
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
        punto_inicio,
        punto_fin,
        Punto_inicio_o,
        Punto_fin_o,
        Punto_inicio_h,
        Punto_fin_h,
        Adyacente,
        Opuesto,
        Hipotenusa,
        cubo,
        direccion,
        distancia,
        delta,
        angulo,
        delta_x,
        delta_y,
        arrow_up,
        arrow_down,
        arrow_forward,
        t_inicial;
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
      scene.background = color.white;
      scene.width = 900;
      scene.height = 200;
      punto_inicio = vector(30, 0, 0);
      punto_fin = vector(0, 0, 0);
      Punto_inicio_o = punto_fin;
      Punto_fin_o = vector(punto_fin.x, 8, 0);
      Punto_inicio_h = punto_inicio;
      Punto_fin_h = Punto_fin_o;
      Adyacente = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([punto_inicio, punto_fin]),
          color: color.black,
          radius: 0.1,
        }),
      ]);
      Opuesto = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([Punto_inicio_o, Punto_fin_o]),
          color: color.red,
          radius: 0.1,
        }),
      ]);
      Hipotenusa = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([Punto_inicio_h, Punto_fin_h]),
          color: color.green,
          radius: 0.1,
        }),
      ]);
      cubo = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(punto_fin.x["+"](0.5), Punto_fin_o.y["+"](0.5), 0),
          size: vector(1, 1, 1),
          color: color.blue,
        }),
      ]);
      direccion = norm(punto_inicio["-"]((1)["*"](Punto_fin_o)));
      distancia = mag(punto_inicio["-"]((1)["*"](Punto_fin_o)));
      delta = (0.01)["*"](distancia)["/"](5);
      angulo = await radians(15);
      delta_x = delta["*"](cos(angulo));
      delta_y = delta["*"](sin(angulo));
      ρσ_interpolate_kwargs.call(cubo, cubo.rotate, [
        ρσ_desugar_kwargs({
          angle: await radians((1)["-u"]()["*"](15)),
          axis: vector(0, 0, 1),
        }),
      ]);
      arrow_up = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(2, 2, 0),
          color: color.orange,
          shaftwidth: 0.1,
        }),
      ]);
      arrow_down = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(0, (1)["-u"]()["*"](2), 0),
          color: color.purple,
          shaftwidth: 0.1,
        }),
      ]);
      arrow_forward = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: cubo.pos,
          axis: vector(3, (1)["-u"]()["*"](0.7), 0),
          color: color.cyan,
          shaftwidth: 0.1,
        }),
      ]);
      t_inicial = 0;
      while (t_inicial["<="](5)) {
        await rate((1)["/"](0.01));
        cubo.pos.x = cubo.pos.x["+"](delta_x);
        cubo.pos.y = cubo.pos.y["-"](delta_y);
        t_inicial = t_inicial["+"](0.01);
        arrow_up.pos = cubo.pos;
        arrow_down.pos = cubo.pos;
        arrow_forward.pos = cubo.pos;
        print("Tiempo transcurrido:", t_inicial, "segundos");
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#LaboratorioejemploSim").removeAttr("id"),
      };
      __main__();
    });
  })();
};