let Distancia = document.getElementById("Distancia")
let T_i = document.getElementById("T_i")
let T_f = document.getElementById("T_f")

function Calcular() {
  let resultado = (parseFloat(Distancia.value) / (parseFloat(T_f.value) - parseFloat(T_i.value)));
  document.getElementById("Respuesta-valor").innerHTML = resultado.toFixed(2) + "m/s";
  simulacion();
}

function simulacion() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};
    let simu = document.getElementById("Simulacion");
    if (simu == null) {
      $(".Simulacion").attr("id", "Simulacion");
      const myNode = document.getElementById("Simulacion");
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
        distancia,
        tiempo_i,
        tiempo_f,
        deltat,
        rapidez,
        rapidez_v,
        objeto,
        i,
        rapidez_c;
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
      distancia = parseFloat(Distancia.value);
      tiempo_i = parseFloat(T_i.value);
      tiempo_f = parseFloat(T_f.value);
      deltat = tiempo_f["-"]((1)["*"](tiempo_i));
      rapidez = distancia["/"](deltat);
      rapidez_v = vector(0, 0, 0);
      objeto = ρσ_interpolate_kwargs.call(this, sphere, [
        ρσ_desugar_kwargs({
          pos: vector(0, 0, 0),
          color: color.blue,
          radius: rapidez["/"](3),
          make_trail: true,
        }),
      ]);
      canva1.camera.follow(objeto);
      i = 0;
      if (rapidez[">="](0)) {
        rapidez_c = ρσ_interpolate_kwargs.call(this, arrow, [
          ρσ_desugar_kwargs({
            pos: vector(0, 0, 0),
            axis: vector(rapidez["*"](2), 0, 0),
            color: color.blue,
            shaftwidth: rapidez["/"](5),
          }),
        ]);
        while (i["<"](deltat)) {
          await rate(rapidez);
          objeto.pos = rapidez_v;
          rapidez_c.pos = rapidez_v;
          rapidez_v.x = rapidez_v.x["+"](1);
          i = i["+"](1);
        }
      } else if (rapidez["<="]((1)["-u"]()["*"](0))) {
        rapidez_c = ρσ_interpolate_kwargs.call(this, arrow, [
          ρσ_desugar_kwargs({
            pos: vector(0, 0, 0),
            axis: vector(rapidez["*"](2), 0, 0),
            color: color.blue,
            shaftwidth: rapidez["*"]((1)["-u"]())["*"](1)["/"](5),
          }),
        ]);
        while (i[">"](deltat)) {
          await rate(rapidez["*"]((1)["-u"]())["*"](1));
          objeto.pos = rapidez_v;
          rapidez_c.pos = rapidez_v;
          rapidez_v.x = rapidez_v.x["-"](1);
          i = i["-"](1);
        }
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#Simulacion").removeAttr("id"),
      };
      __main__();
    });
  })();
}
const boton = document.getElementById("Resultado");
boton.addEventListener("click", Calcular);
