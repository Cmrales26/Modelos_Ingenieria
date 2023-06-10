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
        scene,
        ppax,
        ppay,
        pyax,
        pyay,
        ppbx,
        ppby,
        pybx,
        pyby,
        punto_partida_A,
        punto_llegada_A,
        punto_partida_B,
        punto_llegada_B,
        escala_x,
        escala_y,
        vector_A,
        vector_B,
        tiempo_inicial,
        tiempo_final,
        velocidad_resultante,
        esfera_partida,
        flecha_resultante;
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
      ("5");
      scene = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 520,
          height: 420,
          background: color.white,
        }),
      ]);


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



      ppax = vix;
      ppay = viy;
      pyax = vfx;
      pyay = vfy;


      ppbx = vix2;
      ppby = viy2;
      pybx = vfx2;
      pyby = vfy2;



      punto_partida_A = vector(ppax, ppay, 0);
      punto_llegada_A = vector(pyax, pyay, 0);
      punto_partida_B = vector(ppbx, ppby, 0);
      punto_llegada_B = vector(pybx, pyby, 0);


      if (pyax["<"](50) || pyay["<"](50) || pybx["<"](50) || pyby["<"](50)) {
        escala_x = 5["/"](max(abs(punto_llegada_A.x), abs(punto_llegada_B.x)));
        escala_y = 5["/"](max(abs(punto_llegada_A.y), abs(punto_llegada_B.y)));
        print("< 50");
    }
    if (pyax[">"](50) || pyay[">"](50) || pybx[">"](50) || pyby[">"](50)) {
        escala_x = 20["/"](max(abs(punto_llegada_A.x), abs(punto_llegada_B.x)));
        escala_y = 20["/"](max(abs(punto_llegada_A.y), abs(punto_llegada_B.y)));
    }



      punto_partida_A = punto_partida_A["*"](escala_x)["*"](escala_y);
      punto_llegada_A = punto_llegada_A["*"](escala_x)["*"](escala_y);
      punto_partida_B = punto_partida_B["*"](escala_x)["*"](escala_y);
      punto_llegada_B = punto_llegada_B["*"](escala_x)["*"](escala_y);
      vector_A = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([punto_partida_A, punto_llegada_A]),
          color: color.orange,
          radius: 0.02,
        }),
      ]);
      vector_B = ρσ_interpolate_kwargs.call(this, curve, [
        ρσ_desugar_kwargs({
          pos: ρσ_list_decorate([punto_partida_B, punto_llegada_B]),
          color: color.green,
          radius: 0.02,
        }),
      ]);

      tiempo_inicial = ti 
      tiempo_final = tf

      velocidad_resultante = punto_llegada_B["-"]((1)["*"](punto_llegada_A))[
        "/"
      ](tiempo_final["-"]((1)["*"](tiempo_inicial)));
      esfera_partida = ρσ_interpolate_kwargs.call(this, sphere, [
        ρσ_desugar_kwargs({
          pos: punto_llegada_A,
          color: color.red,
          radius: 0.05,
        }),
      ]);
      flecha_resultante = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: punto_llegada_A,
          axis: vector(0, 0, 0),
          color: color.red,
          shaftwidth: 0.02,
          headwidth: 0.06,
        }),
      ]);

      // scene.camera.follow(flecha_resultante);

      async function animar_vector_resultante() {
        var ρσ_ls, t;
        t = tiempo_inicial;
        ("60");
        await rate(30);
        while (t["<="](tiempo_final)) {
          await rate(30);
          flecha_resultante.axis = velocidad_resultante["*"](t);
          t = t["+"](0.1);
        }
      }
      if (!animar_vector_resultante.__module__)
        Object.defineProperties(animar_vector_resultante, {
          __module__: { value: null },
        });

      await animar_vector_resultante();
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
