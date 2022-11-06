const boton = document.getElementById("aggv1");
const boton1 = document.getElementById("ResultadoV");
boton.addEventListener("click", AddVector);
boton1.addEventListener("click", Solver);

function AddVector() {
  var vix = parseFloat(document.getElementById("ppx").value);
  var viy = parseFloat(document.getElementById("ppy").value);
  var vfx = parseFloat(document.getElementById("pllx").value);
  var vfy = parseFloat(document.getElementById("plly").value);

  //SEGUNDO VECTOR
  var vix2 = parseFloat(document.getElementById("ppx2").value);
  var viy2 = parseFloat(document.getElementById("ppy2").value);
  var vfx2 = parseFloat(document.getElementById("pllx2").value);
  var vfy2 = parseFloat(document.getElementById("plly2").value);

  //TIEMPO
  var ti = parseFloat(document.getElementById("ti").value);
  var tf = parseFloat(document.getElementById("tf").value);
  var mg1;
  var mg2;

  if (isNaN(vix2)) {
    mg1 = TmagnitudV(vix, vfx, viy, vfy);
  } else {
    mg1 = TmagnitudV(vix, vfx, viy, vfy);
    mg2 = TmagnitudV(vix2, vfx2, viy2, vfy2);
  }

  var ba;
  if (mg2 > mg1) {
    ba = mg2 - mg1;
  } else {
    ba = mg1 - mg2;
  }
  if (mg2 == undefined) {
    Salidas(vix, vfx, viy, vfy, "", "", "", "", mg1.toFixed(2), "", "", ti, tf);
  } else {
    Salidas(
      vix,
      vfx,
      viy,
      vfy,
      vix2,
      vfx2,
      viy2,
      vfy2,
      mg1.toFixed(2),
      mg2.toFixed(2),
      ba.toFixed(2),
      ti,
      tf
    );
  }
  Plot = document.getElementById("plot");

  console.log(mg2);

  if (mg2 == undefined) {
    var p_0 = {
      x: [0, 0],
      y: [0, 0],
      name: "0,0",
    };

    var A = {
      x: [vix, vfx],
      y: [viy, vfy],
      mode: "lines",
      name: "A",
      // connectgaps: true
    };

    var B = {
      x: [vix2, vfx2],
      y: [viy2, vfy2],
      mode: "lines",
      name: "B",
    };

    var PC = {
      x: [vfx, vfx2],
      y: [vfy, vfy2],
      mode: "",
      name: "B-A",
    };

    var layout = {
      plot_bgcolor: "white",
      paper_bgcolor: "transparent",
      showlegend: false,
      width: 400,
      height: 500,
      annotations: [
        {
          x: vfx,
          y: vfy,
          xref: "x",
          yref: "y",
          text: "",
          showarrow: true,
          arrowhead: 7,
          ax: 0,
          ay: -6,
          arrowcolor: "#FF7F0E",
        },
      ],
      xaxis: {
        // showgrid: false
      },
      margin: {
        l: 25,
        r: 25,
        b: 100,
        t: 20,
        // pad: 5
      },
    };
    // var data = [A,B,PC];
    var data = [p_0, A, B, PC];

    Plotly.newPlot(Plot, data, layout);
  } else {
    var p_0 = {
      x: [0, 0],
      y: [0, 0],
      name: "0,0",
    };

    var A = {
      x: [vix, vfx],
      y: [viy, vfy],
      mode: "lines",
      name: "A",
      // connectgaps: true
    };

    var B = {
      x: [vix2, vfx2],
      y: [viy2, vfy2],
      mode: "lines",
      name: "B",
    };

    var PC = {
      x: [vfx, vfx2],
      y: [vfy, vfy2],
      mode: "",
      name: "B-A",
    };

    var layout = {
      plot_bgcolor: "white",
      paper_bgcolor: "transparent",
      showlegend: false,
      width: 400,
      height: 500,
      annotations: [
        {
          x: vfx,
          y: vfy,
          xref: "x",
          yref: "y",
          text: "",
          showarrow: true,
          arrowhead: 7,
          ax: 0,
          ay: -6,
          arrowcolor: "#FF7F0E",
        },
        {
          x: vfx2,
          y: vfy2,
          xref: "x",
          yref: "y",
          text: "",
          showarrow: true,
          arrowhead: 7,
          ax: 0,
          ay: -6,
          arrowcolor: "#2CA02C",
        },
      ],
      xaxis: {
        // showgrid: false
      },
      margin: {
        l: 40,
        r: 25,
        b: 100,
        t: 20,
        // pad: 5
      },
    };
    // var data = [A,B,PC];
    var data = [p_0, A, B, PC];

    Plotly.newPlot(Plot, data, layout);
  }
}

function respuesta() {
  var vix = parseFloat(document.getElementById("ppx").value);
  var viy = parseFloat(document.getElementById("ppy").value);
  var vfx = parseFloat(document.getElementById("pllx").value);
  var vfy = parseFloat(document.getElementById("plly").value);

  //SEGUNDO VECTOR
  var vix2 = parseFloat(document.getElementById("ppx2").value);
  var viy2 = parseFloat(document.getElementById("ppy2").value);
  var vfx2 = parseFloat(document.getElementById("pllx2").value);
  var vfy2 = parseFloat(document.getElementById("plly2").value);

  var ti = parseFloat(document.getElementById("ti").value);
  var tf = parseFloat(document.getElementById("tf").value);
  var mg1;
  var mg2;
  var respuesta;

  if (isNaN(vix2)) {
    mg1 = TmagnitudV(vix, vfx, viy, vfy);
  } else {
    mg1 = TmagnitudV(vix, vfx, viy, vfy);
    mg2 = TmagnitudV(vix2, vfx2, viy2, vfy2);
  }
  var T = tf - ti;
  var D;
  if (mg2 > mg1) {
    D = mg2 - mg1;
  } else {
    D = mg1 - mg2;
  }
  var respu = document.getElementById("Respuesta-valor");
  if (mg2 == undefined) {
    respuesta = mg1 / T;
    respu.innerHTML =
      "Vm = ΔD/ΔT = " +
      mg1.toFixed(2) +
      "m /" +
      T.toFixed(2) +
      "s = " +
      respuesta.toFixed(2) +
      "m/s";
  } else {
    respuesta = D / T;
    respu.innerHTML =
      "Vm = ΔD/ΔT = " +
      D.toFixed(2) +
      "m /" +
      T.toFixed(2) +
      "s = " +
      respuesta.toFixed(2) +
      "m/s";
  }
  return respuesta;
}

function Solver() {
  respuesta();
  AddVector();
  Simular();
}

function TmagnitudV(vix, vfx, viy, vfy) {
  var magnitud;
  if (vix > vfx && viy > vfy) {
    var rx1 = vix - vfx;
    var ry1 = viy - vfy;
    magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
  } else if (vix < vfx && viy < vfy) {
    var rx1 = vfx - vix;
    var ry1 = vfy - viy;
    magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
  } else if (vix < vfx && viy > vfy) {
    var rx1 = vfx - vix;
    var ry1 = viy - vfy;
    magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
  } else if (vix > vfx && viy < vfy) {
    var rx1 = vix - vfx;
    var ry1 = vfy - viy;
    magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
  } else {
    if (vix == vfx) {
      var rx1 = 0;
      if (viy > vfy) {
        var ry1 = viy - vfy;
      } else {
        var ry1 = vfy - viy;
      }
      magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
    } else if (viy == vfy) {
      ry1 = 0;
      if (vix > vfx) {
        var rx1 = vix - vfx;
      } else {
        var rx1 = vfx - vix;
      }
      magnitud = Math.sqrt(Math.pow(rx1, 2) + Math.pow(ry1, 2));
    }
  }
  return magnitud;
}
function Salidas(
  vix,
  vfx,
  viy,
  vfy,
  vix2,
  vfx2,
  viy2,
  vfy2,
  LongitudV1,
  LongitudV2,
  ba,
  ti,
  tf
) {
  var outs = document.getElementById("Salidas");
  outs.innerHTML =
    "<h1> VECTORES </h1> <br> Vector A = (" +
    vix +
    " , " +
    viy +
    ") - (" +
    vfx +
    " , " +
    vfy +
    ")<br> Vector B = (" +
    vix2 +
    "," +
    viy2 +
    ") - (" +
    vfx2 +
    " , " +
    vfy2 +
    ")<br> Vector A - B = (" +
    vfx +
    " , " +
    vfy +
    ") - (" +
    vfx2 +
    " , " +
    vfy2 +
    ") <br><br> <h1> Longitudes </h1><br> Longitud A = " +
    LongitudV1 +
    "m <br> Longitud B = " +
    LongitudV2 +
    "m <br> Longitud B-A = " +
    ba +
    "m<br><br> <h1>Tiempo</h1><br> Tiempo 1 = " +
    ti +
    "s<br> Tiempo 2 = " +
    tf +
    "s <br>";
}

function Simular() {
  !(function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("SimulacionV");
    if (simu == null) {
      $(".SimulacionV").attr("id", "SimulacionV");
      const myNode = document.getElementById("SimulacionV");
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
        p_ix,
        p_iy,
        speed,
        p_fx,
        p_fy,
        movil,
        r;
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
      sleep(0.1);
      ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 520,
          height: 420,
          background: vector(250, 250, 250),
        }),
      ]);
      p_ix = parseFloat(document.getElementById("pllx").value);
      p_iy = parseFloat(document.getElementById("plly").value);
      speed = respuesta();
      p_fx = parseFloat(document.getElementById("pllx2").value);
      p_fy = parseFloat(document.getElementById("plly2").value);
      movil = ρσ_interpolate_kwargs.call(this, sphere, [
        ρσ_desugar_kwargs({
          pos: vector(p_ix, p_iy, 0),
          radius: 5,
          color: color.blue,
          make_trail: true,
        }),
      ]);
      r = vector(p_ix, p_iy, 0);
      if (r.x[">"](p_fx) && r.y[">"](p_fy)) {
        while (r.x[">"](p_fx) && r.y[">"](p_fy)) {
          await rate(speed);
          movil.pos = r;
          r.x = r.x["-"]((1)["*"](1));
          r.y = r.y["-"]((1)["*"](1));
          print(r);
        }
      } else if (r.x["<"](p_fx) && r.y["<"](p_fy)) {
        while (r.x["<"](p_fx) && r.y["<"](p_fy)) {
          await rate(speed);
          movil.pos = r;
          r.x = r.x["+"](1);
          r.y = r.y["+"](1);
          print(r);
        }
      } else if (r.x[">"](p_fx) && r.y["<"](p_fy)) {
        console.log("HOLA x > fx");
        while (r.x[">"](p_fx) && r.y["<"](p_fy)) {
          await rate(speed);
          movil.pos = r;
          r.x = r.x["-"]((1)["*"](1));
          r.y = r.y["+"](1);
          print(r);
        }
      } else if (r.x["<"](p_fx) && r.y[">"](p_fy)) {
        console.log("HOLA x < fx");
        while (r.x["<"](p_fx) && r.y[">"](p_fy)) {
          await rate(speed);
          movil.pos = r;
          r.x = r.x["+"](1);
          r.y = r.y["-"]((1)["*"](1));
          print(r);
        }
      } else if (
        r.x === p_fx ||
        (typeof r.x === "object" && ρσ_equals(r.x, p_fx))
      ) {
        print("HOLA x");
        print("inicial x:"["+"](p_ix), "inicial y: "["+"](p_iy), p_fx, p_fy);
        if (r.y["<"](p_fy)) {
          while (r.y["<"](p_fy)) {
            await rate(speed);
            movil.pos = r;
            r.y = r.y["+"](1);
            print(r);
          }
        } else if (r.y[">"](p_fy)) {
          while (r.y[">"](p_fy)) {
            await rate(speed);
            movil.pos = r;
            r.y = r.y["-"]((1)["*"](1));
            print(r);
          }
        }
      } else if (
        r.y === p_fy ||
        (typeof r.y === "object" && ρσ_equals(r.y, p_fy))
      ) {
        print("HOLA Y");
        if (r.x["<"](p_fx)) {
          while (r.x["<"](p_fx)) {
            await rate(speed);
            movil.pos = r;
            r.x = r.x["+"](1);
            print(r);
          }
        } else if (r.x[">"](p_fx)) {
          while (r.x[">"](p_fx)) {
            await rate(speed);
            movil.pos = r;
            r.x = r.x["-"]((1)["*"](1));
            print(r);
          }
        }
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#SimulacionV").removeAttr("id"),
      };
      __main__();
    });
  })();
}
