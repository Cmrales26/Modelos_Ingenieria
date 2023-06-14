let Distancia_i = document.getElementById("Distancia_i");
let Distancia_f = document.getElementById("Distancia_f");
let T_i = document.getElementById("T_i");
let T_f = document.getElementById("T_f");

function Calcular() {
  console.log(T_f.value);
  console.log(T_i.value);
  let resultado =
    (parseFloat(Distancia_f.value) - parseFloat(Distancia_i.value)) /
    (parseFloat(T_f.value) - parseFloat(T_i.value));
  document.getElementById("Respuesta-valor").innerHTML =
    resultado.toFixed(2) + "m/s";
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
        tiempo_inicial,
        tiempo_final,
        distancia_inicial,
        distancia_final,
        distancia,
        velocidad,
        direccion,
        tiempo_simulacion,
        scene,
        num_filas,
        num_columnas,
        tamaño_caja,
        caja,
        columna,
        fila,
        objeto,
        etiqueta_distancia,
        vector_velocidad,
        etiqueta_velocidad,
        tiempo,
        distancia_recorrida;
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
      tiempo_inicial = parseFloat(T_i.value)
      tiempo_final = parseFloat(T_f.value);
      distancia_inicial = parseFloat(Distancia_i.value);
      distancia_final = parseFloat(Distancia_f.value);
      distancia = distancia_final["-"]((1)["*"](distancia_inicial));
      velocidad = distancia["/"](
        abs(tiempo_final["-"]((1)["*"](tiempo_inicial)))
      );
      direccion = tiempo_final[">="](tiempo_inicial) ? 1 : (1)["-u"]()["*"](1);
      tiempo_simulacion = abs(tiempo_final["-"]((1)["*"](tiempo_inicial)));
      scene = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({ width: 600, height: 225, background: color.white }),
      ]);
      num_filas = 10;
      num_columnas = 30;
      tamaño_caja = distancia["/"](num_columnas);
      for (var ρσ_Index1 = 0; ρσ_Index1["<"](num_filas); ρσ_Index1++) {
        fila = ρσ_Index1;
        for (var ρσ_Index2 = 0; ρσ_Index2["<"](num_columnas); ρσ_Index2++) {
          columna = ρσ_Index2;
          caja = ρσ_interpolate_kwargs.call(this, box, [
            ρσ_desugar_kwargs({
              pos: vector(
                columna["-"]((1)["*"](num_columnas)["/"](2))
                  ["+"](0.5)
                  ["*"](tamaño_caja),
                fila["-"]((1)["*"](num_filas)["/"](2))
                  ["+"](0.5)
                  ["*"](tamaño_caja),
                0
              ),
              size: vector(tamaño_caja, tamaño_caja, 0.1),
              color: color.gray(0.7),
              visible: false,
            }),
          ]);
        }
      }
      objeto = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector((1)["-u"]()["*"](distancia)["/"](2), 0, 0),
          size: vector(1, 1, 1),
          color: color.blue,
        }),
      ]);
      etiqueta_distancia = ρσ_interpolate_kwargs.call(this, label, [
        ρσ_desugar_kwargs({
          pos: objeto.pos,
          text: "Distancia: "["+"](ρσ_str.format("{:.2f}", 0))["+"](" m"),
          box: false,
          height: 15,
          yoffset: 30,
        }),
      ]);
      vector_velocidad = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: objeto.pos,
          axis: vector(direccion["*"](velocidad)["*"](5), 0, 0),
          color: color.red,
          shaftwidth: 0.3,
        }),
      ]);
      etiqueta_velocidad = ρσ_interpolate_kwargs.call(this, label, [
        ρσ_desugar_kwargs({
          pos: vector_velocidad.pos,
          text: "Velocidad: "
            ["+"](ρσ_str.format("{:.2f}", direccion["*"](velocidad)))
            ["+"](" m/s"),
          box: false,
          height: 15,
          xoffset: 30,
        }),
      ]);
      tiempo = 0;
      distancia_recorrida = 0;
      while (
        tiempo["<="](tiempo_simulacion) &&
        distancia_recorrida["<"](distancia)
      ) {
        await rate(100);
        objeto.pos.x = (1)
          ["-u"]()
          ["*"](distancia)
          ["/"](2)
          ["+"](direccion["*"](distancia_recorrida));
        etiqueta_distancia.pos = objeto.pos;
        etiqueta_distancia.text = "Distancia: "
          ["+"](ρσ_str.format("{:.2f}", Math.ceil(distancia_recorrida)))
          ["+"](" m");
        vector_velocidad.pos = objeto.pos;
        vector_velocidad.axis = vector(direccion["*"](velocidad)["*"](5), 0, 0);
        etiqueta_velocidad.pos = objeto.pos["+"](
          vector((1)["-u"]()["*"](1), 0, 0)
        );
        etiqueta_velocidad.text = "Velocidad: "
          ["+"](ρσ_str.format("{:.2f}", direccion["*"](velocidad)))
          ["+"](" m/s");
        distancia_recorrida = velocidad["*"](tiempo);
        tiempo = tiempo["+"](0.1);
        scene.camera.pos = objeto.pos["+"](vector(0, 0, 10));
        scene.camera.axis = (1)["-u"]()["*"](vector(0, 0, 10));
        scene.camera.follow(objeto);
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

boton.addEventListener("click", (event) => {
  if (
    Distancia_i.value != "" &&
    T_f.value != "" &&
    T_i.value != "" &&
    Distancia_f.value != ""
  ) {
    Calcular();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
  }
});
