let f1 = document.getElementById("fuerza-1");
let a1 = document.getElementById("angulo-1");
let f2 = document.getElementById("fuerza-2");
let a2 = document.getElementById("angulo-2");
let f3 = document.getElementById("fuerza-3");
let a3 = document.getElementById("angulo-3");


const fuerzamayor = () =>{
  let fuerzamayor = Math.max(parseFloat(f1.value) ,parseFloat(f2.value),parseFloat(f3.value))
  return fuerzamayor
}


function dibujar_fuerzas(params) {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-fuerzas");
    if (simu == null) {
      $(".simulacion-fuerzas").attr("id", "simulacion-fuerzas");
      const myNode = document.getElementById("simulacion-fuerzas");
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

      var version, print, arange, __name__, type, ρσ_ls, canva1;
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
      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 600, height: 225, background: vector(250, 250, 250) })]);
      (await make_grid());
      (await mag_degrees(parseFloat(f1.value), parseFloat(a1.value), color.red));
      (await mag_degrees(parseFloat(f2.value), parseFloat(a2.value), color.green));
      (await mag_degrees(parseFloat(f3.value), parseFloat(a3.value), color.blue));
      async function make_grid() {
        var ρσ_ls, thickness, dx, xmax, x, y, gridline;
        scene.background = color.white;
        thickness = .01;
        dx = 1;
        xmax = fuerzamayor();
        x = 1["-u"]()["*"](xmax);
        while (x["<="](xmax)) {
          y = 1["-u"]()["*"](xmax);
          gridline = ρσ_interpolate_kwargs.call(this, curve, [ρσ_desugar_kwargs({ pos: ρσ_list_decorate([vector(x, y, 1["-u"]()["*"](thickness))]), color: color.black, radius: thickness })]);
          while (y["<="](xmax)) {
            gridline.append(vector(x, y, 1["-u"]()["*"](thickness)));
            y = y["+"](dx);
          }
          x = x["+"](dx);
        }
        y = 1["-u"]()["*"](xmax);
        while (y["<="](xmax)) {
          x = 1["-u"]()["*"](xmax);
          gridline = ρσ_interpolate_kwargs.call(this, curve, [ρσ_desugar_kwargs({ pos: ρσ_list_decorate([vector(x, y, 1["-u"]()["*"](thickness))]), color: color.black, radius: thickness })]);
          while (x["<="](xmax)) {
            gridline.append(vector(x, y, 1["-u"]()["*"](thickness)));
            x = x["+"](dx);
          }
          y = y["+"](dx);
        }
        return;
      };
      if (!make_grid.__module__) Object.defineProperties(make_grid, {
        __module__: { value: null }
      });

      async function mag_degrees(mag, degrees, color) {
        var ρσ_ls, vec;
        (await sleep(1));
        vec = (await make_vector("mag-degrees", mag, degrees, color));
        return vec;
      };
      if (!mag_degrees.__argnames__) Object.defineProperties(mag_degrees, {
        __argnames__: { value: ["mag", "degrees", "color"] },
        __module__: { value: null }
      });

      async function make_vector(instruction, in1, in2, color) {
        var ρσ_ls, mag, angle, xcomp, ycomp, start, end, vec;

        if ((instruction === "mag-degrees" || typeof instruction === "object" && ρσ_equals(instruction, "mag-degrees"))) {
          mag = in1;
          angle = in2;
          xcomp = mag["*"](cos(angle["*"](pi)["/"](180)));
          ycomp = mag["*"](sin(angle["*"](pi)["/"](180)));
          start = vector(0, 0, 0);
          end = vector(xcomp["+"](start.x), ycomp["+"](start.y), 0);
        } else if ((instruction === "x-y" || typeof instruction === "object" && ρσ_equals(instruction, "x-y"))) {
          xcomp = in1;
          ycomp = in2;
          mag = Math.pow((Math.pow(xcomp, 2)["+"](Math.pow(ycomp, 2))), .5);
          angle = atan(ycomp["/"](xcomp))["*"](180)["/"](pi);
          start = vector(0, 0, 0);
          end = vector(xcomp["+"](start.x), ycomp["+"](start.y), 0);
        } else if ((instruction === "start-end" || typeof instruction === "object" && ρσ_equals(instruction, "start-end"))) {
          start = vector(ρσ_getitem(in1, 0), ρσ_getitem(in1, 1), 0);
          end = vector(ρσ_getitem(in2, 0), ρσ_getitem(in2, 1), 0);
          xcomp = end.x["-"](1["*"](start.x));
          ycomp = end.y["-"](1["*"](start.y));
          mag = Math.pow((Math.pow(xcomp, 2)["+"](Math.pow(ycomp, 2))), .5);
          angle = atan(ycomp["/"](xcomp))["*"](180)["/"](pi);
        } else {
          print("error in make_vector! instructions not supplied");
          return;
        }
        vec = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({ pos: start, axis: vector(xcomp, ycomp, 0), color: color, shaftwidth: .1 })]);
        vec.xcomp = xcomp;
        vec.ycomp = ycomp;
        vec.mag = mag;
        vec.degrees = angle;
        vec.radians = angle["*"](pi)["/"](180);
        vec.start = start;
        vec.end = end;
        ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({ pos: end, text: "Fuerza = "["+"](ρσ_str.format("{}", mag))["+"](""), box: false, color: vector(0, 0, 0) })]);
        ρσ_interpolate_kwargs.call(this, label, [ρσ_desugar_kwargs({ pos: start["+"](end["-"](1["*"](start))["/"](2)), text: ""["+"](ρσ_str.format("{}", angle))["+"]("°"), box: false, color: vector(0, 0, 0) })]);
        return vec;
      };
      if (!make_vector.__argnames__) Object.defineProperties(make_vector, {
        __argnames__: { value: ["instruction", "in1", "in2", "color"] },
        __module__: { value: null }
      });

    };
    if (!__main__.__module__) Object.defineProperties(__main__, {
      __module__: { value: null }
    });
    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-fuerzas").removeAttr("id"),
      };
      __main__();
    });
  })();
}

const boton1 = document.getElementById("Reiniciar-Simulacion1")

boton1.addEventListener('click', (event) => {
  if (f1.value != "" && a1.value != "" && f2.value != "" && a2.value != "" && f3.value != "" && a3.value != "") {
    dibujar_fuerzas()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'INGRESE LOS DATOS PARA LA SIMULACIÓN',
      confirmButtonColor: "#020887"
    })
  }
})


f1.addEventListener('change', (event) => {
  dibujar_fuerzas()
  console.log(fuerzamayor())
})
f2.addEventListener('change', (event) => {
  dibujar_fuerzas()
  console.log(fuerzamayor())
})
f3.addEventListener('change', (event) => {
  dibujar_fuerzas()
  console.log(fuerzamayor())
})
a1.addEventListener('change', (event) => {
  dibujar_fuerzas()
})
a2.addEventListener('change', (event) => {
  dibujar_fuerzas()
})
a3.addEventListener('change', (event) => {
  dibujar_fuerzas()
})
