let masa_sim_peso = document.getElementById("Masa-sim-peso");
const reiniciar_sim_1 = document.getElementById("Reiniciar-sim-1");

function Simulacion1() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-peso");
    if (simu == null) {
      $(".simulacion-peso").attr("id", "simulacion-peso");
      const myNode = document.getElementById("simulacion-peso");
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
        spring_stiffness,
        spring_length,
        block_mass,
        grav,
        holder,
        block,
        spring,
        t,
        delta_t,
        stretch;
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
      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 300,
          background: vector(250, 250, 250),
        }),
      ]);
      ("4");
      spring_stiffness = 1;
      ("5");
      spring_length = 1;
      ("6");
      block_mass = parseFloat(masa_sim_peso.value);
      ("7");
      grav = 1;
      ("9");
      holder = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vec(0, 0, 0),
          size: vec(10, 0.05, 1),
          color: color.black,
        }),
      ]);
      ("10");
      block = ρσ_interpolate_kwargs.call(this, box, [
        ρσ_desugar_kwargs({
          pos: vector(0, 0, 0),
          velocity: vector(0, 0, 0),
          color: color.blue,
          make_trail: false,
          force: vector(0, 0, 0),
          canvas: canva1,
        }),
      ]);
      ("11");
      ρσ_interpolate_kwargs.call(
        this,
        attach_arrow,
        [block, "force"].concat([
          ρσ_desugar_kwargs({ scale: 2, color: color.blue, shaftwidth: 0.1 }),
        ])
      );
      ("12");
      spring = ρσ_interpolate_kwargs.call(this, helix, [
        ρσ_desugar_kwargs({
          pos: holder.pos,
          radius: 0.4,
          texture: textures.metal,
          color: color.black,
        }),
      ]);
      ("14");
      scene.camera.follow(block);
      ("16");
      spring.axis = block.pos["-"]((1)["*"](spring.pos));
      ("17");
      t = 0;
      ("18");
      delta_t = 0.01;
      ("19");
      while (t["<"](100)) {
        ("20");
        await rate(200);
        ("21");
        stretch = spring_length["-"]((1)["*"](abs(spring.axis.y)));
        ("22");
        block.force.y = (1)
          ["-u"]()
          ["*"](spring_stiffness)
          ["*"](stretch)
          ["-"]((1)["*"](block_mass)["*"](grav));
        ("23");
        block.velocity.y = block.velocity.y["+"](
          block.force.y["*"](delta_t)["/"](block_mass)
        );
        ("24");
        block.pos.y = block.pos.y["+"](block.velocity.y["*"](delta_t));
        ("25");
        spring.axis = block.pos["-"]((1)["*"](spring.pos));
        ("26");
        t = t["+"](delta_t);
        ("27");
        print(t);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-peso").removeAttr("id"),
      };
      __main__();
    });
  })();
}

// * Graficas Simulacion resorte

function GraficaFuerza() {
  (function () {
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-peso-grafica");
    if (simu == null) {
      $(".simulacion-peso-grafica").attr("id", "simulacion-peso-grafica");
      const myNode = document.getElementById("simulacion-peso-grafica");
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
        spring_stiffness,
        spring_length,
        block_mass,
        grav,
        graph_force,
        force_curve,
        block_pos,
        block_velocity,
        block_force,
        t,
        delta_t,
        stretch;
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
      spring_stiffness = 1;
      spring_length = 1;
      block_mass = parseFloat(masa_sim_peso.value);
      grav = 9.8;
      graph_force = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 300,
          xtitle: "Tiempo",
          ytitle: "Fuerza",
          background: vector(250, 250, 250),
        }),
      ]);
      force_curve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({ color: color.blue }),
      ]);
      block_pos = 0;
      block_velocity = 0;
      block_force = 0;
      t = 0;
      delta_t = 0.01;
      while (t["<"](100)) {
        await rate(200);

        stretch = spring_length["-"]((1)["*"](abs(block_pos)));

        block_force = (1)
          ["-u"]()
          ["*"](spring_stiffness)
          ["*"](stretch)
          ["-"]((1)["*"](block_mass)["*"](grav));

        block_velocity = block_velocity["+"](
          block_force["*"](delta_t)["/"](block_mass)
        );

        block_pos = block_pos["+"](block_velocity["*"](delta_t));

        t = t["+"](delta_t);

        force_curve.plot(t, block_force);
      }
    }
    if (!__main__.__module__)
      Object.defineProperties(__main__, {
        __module__: { value: null },
      });

    $(function () {
      window.__context = {
        glowscript_container: $("#simulacion-peso-grafica").removeAttr("id"),
      };
      __main__();
    });
  })();
}

function resultado_sim1(params) {
  let resultado = masa_sim_peso.value * 9.8;
  document.getElementById("Resultado-peso").innerHTML =
    "Peso = " + resultado.toFixed(2) + "N";
}
masa_sim_peso.addEventListener("change", (event) => {
  if (parseFloat(masa_sim_peso.value) > 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE VALORES ENTRE 0 Y 10",
      confirmButtonColor: "#020887",
    });
  } else {
    Simulacion1();
    GraficaFuerza();
    resultado_sim1();
  }
});
reiniciar_sim_1.addEventListener("click", (event) => {
  if (masa_sim_peso.value != "") {
    if (parseFloat(masa_sim_peso.value) > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "INGRESE VALORES ENTRE 0 Y 10",
        confirmButtonColor: "#020887",
      });
    } else {
      Simulacion1();
      GraficaFuerza();
      resultado_sim1();
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE VALORES ENTRE 0 Y 10",
      confirmButtonColor: "#020887",
    });
  }
});

// ! SEGUNDA SIMULACION

// * Recoleccion de datos
let fuerza_sim2 = document.getElementById("Fuerza_sim2");
let friccion_sim2 = document.getElementById("Friccion_sim2");
let masa_sim2 = document.getElementById("Masa_sim2");
const reiniciar_sim_2 = document.getElementById("Reiniciar-sim-2");

// * SIMULACION

function Simulacion2(params) {
  (function () {
    var ρσ_modules = {};
    var time_step, time;
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("simulacion-dos-newton");
    if (simu == null) {
      $(".simulacion-dos-newton").attr("id", "simulacion-dos-newton");
      const myNode = document.getElementById("simulacion-dos-newton");
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
        xmax,
        ymax,
        fuerza,
        friccion,
        masa,
        canva1,
        crate,
        time,
        time_step,
        arrow_force,
        arrow_friction,
        grid,
        grid_size,
        grid_color,
        i,
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
      xmax = 10;
      ymax = xmax["/"](2);
      fuerza = parseFloat(fuerza_sim2.value);
      friccion = parseFloat(friccion_sim2.value);
      masa = parseFloat(masa_sim2.value);
      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 600,
          height: 300,
          background: vector(250, 250, 250),
        }),
      ]);

      async function force(name) {
        var ρσ_ls, push, friction, total_force;

        push = await v(fuerza, 0);

        friction = await v((1)["-u"]()["*"](friccion), 0);

        total_force = push["+"](friction);
        return total_force;
      }
      if (!force.__argnames__)
        Object.defineProperties(force, {
          __argnames__: { value: ["name"] },
          __module__: { value: null },
        });

      crate = await marker(0, 0, masa, color.blue);
      crate.vx = 0;
      crate.vy = 0;
      time = 0;
      time_step = 0.02;
      arrow_force = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: crate.pos,
          axis: vector(fuerza, 0, 0),
          color: color.red,
          shaftwidth: 0.1,
        }),
      ]);
      arrow_friction = ρσ_interpolate_kwargs.call(this, arrow, [
        ρσ_desugar_kwargs({
          pos: crate.pos,
          axis: vector((1)["-u"]()["*"](friccion), 0, 0),
          color: color.orange,
          shaftwidth: 0.1,
        }),
      ]);
      grid = ρσ_list_decorate([]);
      grid_size = 1;
      grid_color = color.black;

      var ρσ_Iter1 = range((1)["-u"]()["*"](xmax), xmax["+"](1), grid_size);
      ρσ_Iter1 =
        typeof ρσ_Iter1[Symbol.iterator] === "function"
          ? ρσ_Iter1 instanceof Map
            ? ρσ_Iter1.keys()
            : ρσ_Iter1
          : Object.keys(ρσ_Iter1);
      for (var ρσ_Index1 of ρσ_Iter1) {
        i = ρσ_Index1;

        grid.append(
          ρσ_interpolate_kwargs.call(this, box, [
            ρσ_desugar_kwargs({
              pos: vector(i, 0, (1)["-u"]()["*"](0.5)),
              size: vector(0.05, ymax["*"](2), 0.05),
              color: grid_color,
            }),
          ])
        );
      }

      var ρσ_Iter2 = range(
        (1)["-u"]()["*"](int(ymax)),
        int(ymax)["+"](1),
        grid_size
      );
      ρσ_Iter2 =
        typeof ρσ_Iter2[Symbol.iterator] === "function"
          ? ρσ_Iter2 instanceof Map
            ? ρσ_Iter2.keys()
            : ρσ_Iter2
          : Object.keys(ρσ_Iter2);
      for (var ρσ_Index2 of ρσ_Iter2) {
        i = ρσ_Index2;

        grid.append(
          ρσ_interpolate_kwargs.call(this, box, [
            ρσ_desugar_kwargs({
              pos: vector(0, i, (1)["-u"]()["*"](0.5)),
              size: vector(xmax["*"](2), 0.05, 0.05),
              color: grid_color,
            }),
          ])
        );
      }

      while (
        crate.pos.x["<="](xmax) &&
        crate.pos.x[">="]((1)["-u"]()["*"](xmax))
      ) {
        await rate(100);

        arrow_force.pos = crate.pos;

        arrow_friction.pos = crate.pos;

        await accelerate(crate);

        dx = crate.vx["*"](time_step);

        dy = crate.vy["*"](time_step);

        await move(crate, dx, dy);

        time = time["+"](time_step);
      }

      async function v(x, y) {
        return vector(x, y, 0);
      }
      if (!v.__argnames__)
        Object.defineProperties(v, {
          __argnames__: { value: ["x", "y"] },
          __module__: { value: null },
        });

      async function marker(x, y, mass, col) {
        var ρσ_ls, a;

        await sleep(0.1);

        a = ρσ_interpolate_kwargs.call(this, box, [
          ρσ_desugar_kwargs({
            pos: vector(x, y["+"](0.25), 0),
            size: vector(0.5, 0.5, 0.5),
            color: col,
            make_trail: true,
            interval: 4,
            initial_pos: vector(x, y, 0),
            distance: 0,
            mass: mass,
          }),
        ]);

        return a;
      }
      if (!marker.__argnames__)
        Object.defineProperties(marker, {
          __argnames__: { value: ["x", "y", "mass", "col"] },
          __module__: { value: null },
        });
      async function accelerate(name) {
        var ρσ_ls, f, dvx, dvy;

        f = await force(name);
        dvx = f.x["/"](name.mass)["*"](time_step);
        dvy = f.y["/"](name.mass)["*"](time_step);
        name.vx = name.vx["+"](dvx);
        name.vy = name.vy["+"](dvy);
        return;
      }
      if (!accelerate.__argnames__)
        Object.defineProperties(accelerate, {
          __argnames__: { value: ["name"] },
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

      async function displacement(name) {
        var ρσ_ls, dx, dy;

        dx = name.pos.x["-"]((1)["*"](name.initial_pos.x));

        dy = name.pos.y["-"]((1)["*"](name.initial_pos.y));
        return;
      }
      if (!displacement.__argnames__)
        Object.defineProperties(displacement, {
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
        glowscript_container: $("#simulacion-dos-newton").removeAttr("id"),
      };
      __main__();
    });
  })();
}

reiniciar_sim_2.addEventListener("click", (event) => {
  if (
    fuerza_sim2.value != "" &&
    friccion_sim2.value != "" &&
    masa_sim2.value != ""
  ) {
    Simulacion2();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
  }
});
fuerza_sim2.addEventListener("change", (event) => {
  Simulacion2();
});
friccion_sim2.addEventListener("change", (event) => {
  Simulacion2();
});
masa_sim2.addEventListener("change", (event) => {
  Simulacion2();
});

// ! GRAFICAS SIMULACION 2
// const  = document.getElementById("")
const ver_graficas_sim2 = document.getElementById("Ver-graficas-sim2");

function Graficas_sim2(params) {
  (function () {
    var ρσ_modules = {};
    var time_step, time;
    ρσ_modules.pythonize = {};

    let simu = document.getElementById("graficas-sim2");
    if (simu == null) {
      $(".graficas-sim2").attr("id", "graficas-sim2");
      const myNode = document.getElementById("graficas-sim2");
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
        xmax,
        ymax,
        fuerza,
        friccion,
        masa,
        position_graph,
        velocity_graph,
        force_graph,
        crate,
        time,
        time_step,
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
      ("3");
      canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
        ρσ_desugar_kwargs({
          width: 0,
          height: 0,
          background: vector(250, 250, 250),
        }),
      ]);
      xmax = 10;
      ymax = xmax / 2;
      fuerza = parseFloat(fuerza_sim2.value);
      friccion = parseFloat(friccion_sim2.value);
      masa = parseFloat(masa_sim2.value);
      async function force(name) {
        var ρσ_ls, push, friction, total_force;
        push = await v(fuerza, 0);
        friction = await v((1)["-u"]()["*"](friccion), 0);
        total_force = push["+"](friction);
        return total_force;
      }
      if (!force.__argnames__)
        Object.defineProperties(force, {
          __argnames__: { value: ["name"] },
          __module__: { value: null },
        });

      position_graph = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          xtitle: "tiempo",
          ytitle: "posisicion",
          width: 400,
          height: 200,
        }),
      ]);
      velocity_graph = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          xtitle: "tiempo",
          ytitle: "velocidad",
          width: 400,
          height: 200,
        }),
      ]);
      force_graph = ρσ_interpolate_kwargs.call(this, graph, [
        ρσ_desugar_kwargs({
          xtitle: "tiempo",
          ytitle: "Fuerza Neta",
          width: 400,
          height: 200,
        }),
      ]);
      crate = await marker(0, 0, masa, color.red);
      crate.vx = 0;
      crate.vy = 0;
      crate.xcurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          color: color.blue,
          graph: position_graph,
        }),
      ]);
      crate.vxcurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          color: color.blue,
          graph: velocity_graph,
        }),
      ]);
      ("35");
      crate.fxcurve = ρσ_interpolate_kwargs.call(this, gcurve, [
        ρσ_desugar_kwargs({
          color: color.blue,
          graph: force_graph,
        }),
      ]);
      ("38");
      time = 0;
      ("39");
      time_step = 0.02;
      ("41");
      while (
        crate.pos.x["<="](xmax) &&
        crate.pos.x[">="]((1)["-u"]()["*"](xmax))
      ) {
        await accelerate(crate);
        dx = crate.vx["*"](time_step);
        dy = crate.vy["*"](time_step);
        await move(crate, dx, dy);
        ρσ_interpolate_kwargs.call(crate.xcurve, crate.xcurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, crate.pos.x] }),
        ]);
        ρσ_interpolate_kwargs.call(crate.vxcurve, crate.vxcurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, crate.vx] }),
        ]);
        ρσ_interpolate_kwargs.call(crate.fxcurve, crate.fxcurve.plot, [
          ρσ_desugar_kwargs({ pos: [time, (await force(crate)).x] }),
        ]);
        time = time["+"](time_step);
      }
      async function v(x, y) {
        return vector(x, y, 0);
      }
      if (!v.__argnames__)
        Object.defineProperties(v, {
          __argnames__: { value: ["x", "y"] },
          __module__: { value: null },
        });

      async function marker(x, y, mass, col) {
        var ρσ_ls, a;
        await sleep(0.1);
        a = ρσ_interpolate_kwargs.call(this, box, [
          ρσ_desugar_kwargs({
            pos: vector(x, y["+"](0.25), 0),
            size: vector(0.5, 0.5, 0.5),
            color: col,
            make_trail: true,
            trail_type: "points",
            interval: 4,
            initial_pos: vector(x, y, 0),
            distance: 0,
            mass: mass,
          }),
        ]);
        return a;
      }
      if (!marker.__argnames__)
        Object.defineProperties(marker, {
          __argnames__: { value: ["x", "y", "mass", "col"] },
          __module__: { value: null },
        });

      async function accelerate(name) {
        var ρσ_ls, f, dvx, dvy;
        f = await force(name);

        dvx = f.x["/"](name.mass)["*"](time_step);
        dvy = f.y["/"](name.mass)["*"](time_step);
        name.vx = name.vx["+"](dvx);
        name.vy = name.vy["+"](dvy);
        return;
      }
      if (!accelerate.__argnames__)
        Object.defineProperties(accelerate, {
          __argnames__: { value: ["name"] },
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

      ("95");
      async function displacement(name) {
        var ρσ_ls, dx, dy;
        dx = name.pos.x["-"]((1)["*"](name.initial_pos.x));
        dy = name.pos.y["-"]((1)["*"](name.initial_pos.y));
        return sqrt(Math.pow(dx, 2)["+"](Math.pow(dy, 2)));
      }
      if (!displacement.__argnames__)
        Object.defineProperties(displacement, {
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
        glowscript_container: $("#graficas-sim2").removeAttr("id"),
      };
      __main__();
    });
  })();
}

ver_graficas_sim2.addEventListener("click", (event) => {
  if (
    fuerza_sim2.value != "" &&
    friccion_sim2.value != "" &&
    masa_sim2.value != ""
  ) {
    Graficas_sim2();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "NO SE ENCONTRARON DATOS EN LA SIMULACIÓN",
      confirmButtonColor: "#020887",
    });
  }
});
