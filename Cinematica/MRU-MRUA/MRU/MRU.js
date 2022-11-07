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
  ; (function () {
    ;
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

      function input(arg) {
        arg = arg || {}
        if (arg.prompt !== undefined && arg.prompt != '') return prompt(arg.prompt)
        else if (typeof arg === 'string') return prompt(arg)
        else return prompt()
      }

      var version, print, arange, __name__, type, ρσ_ls, p_ix, p_iy, speed, p_fx, p_fy, movil, r;
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
      "2";
      ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 600, height: 450, background: vector(250, 250, 250) })]);
      (await sleep(.1));
      "3";
      p_ix = int(input("Posicio inicial x"));
      (await sleep(.1));
      "4";
      p_iy = int(input("Posicion inicial y"));
      "5";
      speed = 10;
      (await sleep(.1));
      "6";
      p_fx = int(input("posicion final x"));
      (await sleep(.1));
      "7";
      p_fy = int(input("posicion final y"));
      "9";
      movil = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ pos: vector(p_ix, p_iy, 0), radius: 5, color: color.red, make_trail: true })]);
      "11";
      r = vector(p_ix, p_iy, 0);
      "13";
      if (r.x[">"](p_fx) || r.y[">"](p_fy)) {
        "14";
        while (r.x[">"](p_fx) || r.y[">"](p_fy)) {
          "15";
          (await rate(speed));
          "16";
          movil.pos = r;
          "17";
          r.x = r.x["-"](1["*"](1));
          "18";
          r.y = r.y["-"](1["*"](1));
          "19";
          print(r);
          "20";
        }
      } else if (r.x["<"](p_fx) && r.y["<"](p_fy)) {
        "21";
        while (r.x["<"](p_fx) || r.y["<"](p_fy)) {
          "22";
          (await rate(speed));
          "23";
          movil.pos = r;
          "24";
          r.x = r.x["+"](1);
          "25";
          r.y = r.y["+"](1);
          "26";
          print(r);
          "28";
        }
      } else if (r.x[">"](p_fx) && r.y["<"](p_fy)) {
        "29";
        while (r.x[">"](p_fx) && r.y["<"](p_fy)) {
          "30";
          (await rate(speed));
          "31";
          movil.pos = r;
          "32";
          r.x = r.x["-"](1["*"](1));
          "33";
          r.y = r.y["+"](1);
          "34";
          print(r);
          "36";
        }
      } else if (r.x["<"](p_fx) && r.y[">"](p_fy)) {
        "37";
        while (r.x["<"](p_fx) && r.y[">"](p_fy)) {
          "38";
          (await rate(speed));
          "39";
          movil.pos = r;
          "40";
          r.x = r.x["+"](1);
          "41";
          r.y = r.y["-"](1["*"](1));
          "42";
          print(r);
          "44";
        }
      } else if ((r.x === p_fx || typeof r.x === "object" && ρσ_equals(r.x, p_fx))) {
        "45";
        print("HOLA x");
        "46";
        print("inicial x:"["+"](p_ix), "inicial y: "["+"](p_iy), p_fx, p_fy);
        "47";
        if (r.y["<"](p_fy)) {
          "48";
          while (r.y["<"](p_fy)) {
            "49";
            (await rate(speed));
            "50";
            movil.pos = r;
            "51";
            r.y = r.y["+"](1);
            "52";
            print(r);
            "53";
          }
        } else if (r.y[">"](p_fy)) {
          "54";
          while (r.y[">"](p_fy)) {
            "55";
            (await rate(speed));
            "56";
            movil.pos = r;
            "57";
            r.y = r.y["-"](1["*"](1));
            "58";
            print(r);
            "60";
          }
        }
      } else if ((r.y === p_fy || typeof r.y === "object" && ρσ_equals(r.y, p_fy))) {
        "61";
        print("HOLA Y");
        "62";
        if (r.x["<"](p_fx)) {
          "63";
          while (r.x["<"](p_fx)) {
            "64";
            (await rate(speed));
            "65";
            movil.pos = r;
            "66";
            r.x = r.x["+"](1);
            "67";
            print(r);
            "68";
          }
        } else if (r.x[">"](p_fx)) {
          "69";
          while (r.x[">"](p_fx)) {
            "70";
            (await rate(speed));
            "71";
            movil.pos = r;
            "72";
            r.x = r.x["-"](1["*"](1));
            "73";
            print(r);
          }
        }
      }
    };
    if (!__main__.__module__) Object.defineProperties(__main__, {
      __module__: { value: null }
    });

    ; $(function () { window.__context = { glowscript_container: $("#simulacion1").removeAttr("id") }; __main__() })
  })()
  // END JAVASCRIPT
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

const boton = document.getElementById("prueba")
boton.addEventListener("click", (event) => {
  simulador1();
  grafv_vs_t();
  dist_movil.innerHTML = "" + distanciamovil() + "m";
  alert("HOLA")
})