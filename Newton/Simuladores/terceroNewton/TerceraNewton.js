let fuera_cohete = document.getElementById("Fuerz-Cohete");
const Reniciar_cohete = document.getElementById("Reinicia_cohete");

function Cohete() {
    (function () {
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

        let simu = document.getElementById("simulador-cohete");
        if (simu == null) {
            $(".simulador-cohete").attr("id", "simulador-cohete");
            const myNode = document.getElementById("simulador-cohete");
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
                fuerza,
                cohete_punta,
                cohete_cuerpo,
                accion,
                reaccion,
                fuerza_v,
                fuerza_v2,
                fuerza_v1,
                time,
                dt;
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
            fuerza = parseFloat(fuera_cohete.value);
            cohete_punta = ρσ_interpolate_kwargs.call(this, cone, [
                ρσ_desugar_kwargs({
                    pos: vector(0, 0, 0),
                    axis: vector(0, fuerza["/"](2), 0),
                    color: color.blue,
                    radius: 1,
                    make_trail: true,
                    trial_color: color.blue,
                    trail_type: "points",
                    interval: 1,
                }),
            ]);
            cohete_cuerpo = ρσ_interpolate_kwargs.call(this, cylinder, [
                ρσ_desugar_kwargs({
                    pos: vector(0, (1)["-u"]()["*"](fuerza), 0),
                    axis: vector(0, fuerza, 0),
                    color: color.blue,
                }),
            ]);
            accion = ρσ_interpolate_kwargs.call(this, arrow, [
                ρσ_desugar_kwargs({
                    pos: vector(0, fuerza["/"](2), 0),
                    axis: vector(0, fuerza, 0),
                    color: color.red,
                    shaftwidth: 0.4,
                }),
            ]);
            reaccion = ρσ_interpolate_kwargs.call(this, arrow, [
                ρσ_desugar_kwargs({
                    pos: vector(0, (1)["-u"]()["*"](fuerza), 0),
                    axis: vector(0, (1)["-u"]()["*"](fuerza), 0),
                    color: color.green,
                    shaftwidth: 0.4,
                }),
            ]);
            fuerza_v = vector(0, 0, 0);
            fuerza_v1 = vector(0, (1)["-u"]()["*"](fuerza), 0);
            fuerza_v2 = vector(0, fuerza["/"](2), 0);
            canva1.range = fuerza["*"](2.5);
            time = 0;
            dt = 1;
            while (time["<"](40)) {
                await rate(10);
                canva1.camera.follow(cohete_punta);
                canva1.camera.follow(cohete_cuerpo);
                cohete_punta.pos = fuerza_v;
                cohete_cuerpo.pos = fuerza_v1;
                accion.pos = fuerza_v2;
                reaccion.pos = fuerza_v1;
                fuerza_v.y = fuerza_v.y["+"](1);
                fuerza_v1.y = fuerza_v1.y["+"](1);
                fuerza_v2.y = fuerza_v2.y["+"](1);
                time = time["+"](dt);
            }
        }
        if (!__main__.__module__)
            Object.defineProperties(__main__, {
                __module__: { value: null },
            });

        $(function () {
            window.__context = {
                glowscript_container: $("#simulador-cohete").removeAttr("id"),
            };
            __main__();
        });
    })();
}

fuera_cohete.addEventListener("change", (event) => {
    if (
        parseFloat(fuera_cohete.value) > 0 &&
        parseFloat(fuera_cohete.value) <= 15
    ) {
        Cohete();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE VALORES ENTRE 0 Y 15",
            confirmButtonColor: "#020887",
        });
    }
});
Reniciar_cohete.addEventListener("click", (event) => {
    if (fuera_cohete.value != "") {
        if (
            parseFloat(fuera_cohete.value) > 0 &&
            parseFloat(fuera_cohete.value) <= 15
        ) {
            Cohete();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "INGRESE VALORES ENTRE 0 Y 15",
                confirmButtonColor: "#020887",
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
            confirmButtonColor: "#020887",
        });
    }
});

let fuera_bloque = document.getElementById("Fuerz-bloques");
const Reniciar_bloque = document.getElementById("Reinicia_bloques");

function bloques(params) {
    (function () {
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

        let simu = document.getElementById("simulador-bloques");
        if (simu == null) {
            $(".simulador-bloques").attr("id", "simulador-bloques");
            const myNode = document.getElementById("simulador-bloques");
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
                fuerza,
                objeto,
                fuerza_v,
                time,
                i,
                fuerza_r,
                fuerza_a,
                piso;
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
            fuerza = parseFloat(fuera_bloque.value);
            objeto = ρσ_interpolate_kwargs.call(this, box, [
                ρσ_desugar_kwargs({
                    pos: vector(0, 5, 0),
                    color: color.blue,
                    size: vector(10, 10, 0.01),
                    make_trail: false,
                }),
            ]);
            fuerza_v = vector(0, 5, 0);
            time = 50;
            canva1.camera.follow(objeto);
            i = 0;
            fuerza_r = ρσ_interpolate_kwargs.call(this, arrow, [
                ρσ_desugar_kwargs({
                    pos: vector((1)["-u"]()["*"](6), 7, 0),
                    axis: vector((1)["-u"]()["*"](fuerza), 0, 0),
                    color: color.green,
                    shaftwidth: 1,
                }),
            ]);
            fuerza_a = ρσ_interpolate_kwargs.call(this, arrow, [
                ρσ_desugar_kwargs({
                    pos: vector((1)["-u"]()["*"](6)["-"]((1)["*"](fuerza)), 3, 0),
                    axis: vector(fuerza, 0, 0),
                    color: color.red,
                    shaftwidth: 1,
                }),
            ]);
            piso = ρσ_interpolate_kwargs.call(this, box, [
                ρσ_desugar_kwargs({
                    pos: vector(0, 0, 0),
                    color: color.black,
                    size: vector(time["*"](2.5), 1, 0.1),
                }),
            ]);
            if (fuerza[">"](0)) {
                while (i["<"](time)) {
                    await rate(10);
                    objeto.pos = fuerza_v;
                    fuerza_a.pos = fuerza_a.pos;
                    fuerza_r.pos = fuerza_r.pos;
                    fuerza_v.x = fuerza_v.x["+"](1);
                    fuerza_a.pos.x = fuerza_a.pos.x["+"](1);
                    fuerza_r.pos.x = fuerza_r.pos.x["+"](1);
                    i = i["+"](1);
                }
            }
        }
        if (!__main__.__module__)
            Object.defineProperties(__main__, {
                __module__: { value: null },
            });

        $(function () {
            window.__context = {
                glowscript_container: $("#simulador-bloques").removeAttr("id"),
            };
            __main__();
        });
    })();
}

fuera_bloque.addEventListener("change", (event) => {
    if (
        parseFloat(fuera_bloque.value) >= 10 &&
        parseFloat(fuera_bloque.value) <= 50
    ) {
        bloques();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE VALORES ENTRE 10 Y 50",
            confirmButtonColor: "#020887",
        });
    }
});
Reniciar_bloque.addEventListener("click", (event) => {
    if (fuera_bloque.value != "") {
        if (
            parseFloat(fuera_bloque.value) >= 10 &&
            parseFloat(fuera_bloque.value) <= 50
        ) {
            bloques();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "INGRESE VALORES ENTRE 10 Y 50",
                confirmButtonColor: "#020887",
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
            confirmButtonColor: "#020887",
        });
    }
});

let masa_sol = document.getElementById("masa-sol");
let masa_planeta = document.getElementById("masa-planeta");
const Reinicia_planetas = document.getElementById("Reinicia_planetas");

function planetas(params) {
    (function () {
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

        let simu = document.getElementById("simulador-planetas");
        if (simu == null) {
            $(".simulador-planetas").attr("id", "simulador-planetas");
            const myNode = document.getElementById("simulador-planetas");
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
                Masa_sol,
                masa_Tierra,
                canva1,
                Sol,
                Tierra,
                delta_t;
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
            Masa_sol = parseFloat(masa_sol.value);
            masa_Tierra = parseFloat(masa_planeta.value);
            canva1 = ρσ_interpolate_kwargs.call(this, canvas, [
                ρσ_desugar_kwargs({
                    width: 600,
                    height: 225,
                    background: vector(250, 250, 250),
                }),
            ]);
            ("6");
            Sol = ρσ_interpolate_kwargs.call(this, sphere, [
                ρσ_desugar_kwargs({
                    pos: vector((1)["-u"]()["*"](1), 0, 0),
                    velocity: vector(0, 0, 0),
                    mass: Masa_sol,
                    radius: 0.6,
                    color: color.yellow,
                    force: vector(0, 0, 0),
                }),
            ]);
            ("10");
            Tierra = ρσ_interpolate_kwargs.call(this, sphere, [
                ρσ_desugar_kwargs({
                    pos: vector(3, 2, 0),
                    velocity: vector((1)["-u"]()["*"](3), 5, 0),
                    mass: masa_Tierra,
                    radius: 0.4,
                    color: color.blue,
                    make_trail: true,
                    force: vector(0, 0, 0),
                }),
            ]);
            ("13");
            ρσ_interpolate_kwargs.call(
                this,
                attach_arrow,
                [Tierra, "force"].concat([
                    ρσ_desugar_kwargs({
                        scale: 0.05,
                        color: color.blue,
                        shaftwidth: 0.1,
                    }),
                ])
            );
            ("14");
            ρσ_interpolate_kwargs.call(
                this,
                attach_arrow,
                [Sol, "force"].concat([
                    ρσ_desugar_kwargs({
                        scale: 0.05,
                        color: color.yellow,
                        shaftwidth: 0.1,
                    }),
                ])
            );
            delta_t = 0.01;
            while (true) {
                await rate(50);
                Sol.force = await gforce(Sol, Tierra);
                Tierra.force = await gforce(Tierra, Sol);
                Tierra.velocity = Tierra.velocity["+"](
                    Tierra.force["*"](delta_t)["/"](Tierra.mass)
                );
                Tierra.pos = Tierra.pos["+"](Tierra.velocity["*"](delta_t));
            }
            async function gforce(object1, object2) {
                var ρσ_ls, G, distance, force_mag, force_vec;
                G = 1;
                distance = object2.pos["-"]((1)["*"](object1.pos));
                force_mag = G["*"](object1.mass)
                ["*"](object2.mass)
                ["/"](Math.pow(mag(distance), 2));
                force_vec = force_mag["*"](hat(distance));
                return force_vec;
            }
            if (!gforce.__argnames__)
                Object.defineProperties(gforce, {
                    __argnames__: { value: ["object1", "object2"] },
                    __module__: { value: null },
                });
        }
        if (!__main__.__module__)
            Object.defineProperties(__main__, {
                __module__: { value: null },
            });

        $(function () {
            window.__context = {
                glowscript_container: $("#simulador-planetas").removeAttr("id"),
            };
            __main__();
        });
    })();
}

const ms = masa_sol.addEventListener("change", (event) => {
    if (parseFloat(masa_sol.value) >= 200 && parseFloat(masa_sol.value) <= 500) {
        planetas()
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE VALORES ENTRE 200 Y 500 PARA LA MASA DEL SOL",
            confirmButtonColor: "#020887",
        });
        masa_sol.value = ""
    }
});

masa_planeta.addEventListener("change", (event) => {
    if (parseFloat(masa_planeta.value) >= 1 && parseFloat(masa_planeta.value) <= 10) {
        planetas()
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE VALORES ENTRE 1 Y 10 PARA LA MASA DEL PLANETA",
            confirmButtonColor: "#020887",
        });
        masa_planeta.value = ""
    }
});

Reinicia_planetas.addEventListener("click", (event) => {
    if (masa_planeta.value != "" && masa_sol.value != "") {
        if ( parseFloat(masa_planeta.value) >= 1 && parseFloat(masa_planeta.value) <= 10 && parseFloat(masa_sol.value) >= 200 && parseFloat(masa_sol.value) <= 500) {
            planetas();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "INGRESE VALORES ENTRE 1 Y 10 PARA LA MASA DEL PLANETA",
                confirmButtonColor: "#020887",
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "INGRESE LOS DATOS PARA LA SIMULACIÓN",
            confirmButtonColor: "#020887",
        });
    }
});
