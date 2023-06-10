const simulacionZoom = () => {
    ; (function () {
        ;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

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

            var version, print, arange, __name__, type, ρσ_ls, scene, floor, square;
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
            scene = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 500, height: 216, background: color.white })]);
            // floor = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({length: 10, width: 10, height: .1, color: color.black})]);
            square = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ length: 1, width: 1, height: 1, pos: vector(0, 0, 0), color: vector(2["/"](255), 8["/"](255), 135["/"](255)) })]);
            while (true) {
                (await rate(60));
                ρσ_interpolate_kwargs.call(square, square.rotate, [ρσ_desugar_kwargs({ angle: (await radians(1)), axis: vector(0, 1, 0) })]);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__: { value: null }
        });

        ; $(function () { window.__context = { glowscript_container: $("#simulacion-zoom").removeAttr("id") }; __main__() })
    })()
}

simulacionZoom();

const simulacionRotar = () => {
    ; (function () {
        ;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

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

            var version, print, arange, __name__, type, ρσ_ls, scene, floor, square;
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
            scene = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 500, height: 216, background: color.white })]);
            floor = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({length: 10, width: 10, height: .1, color: color.black})]);
            square = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ length: 1, width: 1, height: 1, pos: vector(0, .5, 0), color: vector(2["/"](255), 8["/"](255), 135["/"](255)) })]);
            while (true) {
                (await rate(60));
                ρσ_interpolate_kwargs.call(square, square.rotate, [ρσ_desugar_kwargs({ angle: (await radians(1)), axis: vector(0, 1, 0) })]);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__: { value: null }
        });

        ; $(function () { window.__context = { glowscript_container: $("#simulacion-rotar").removeAttr("id") }; __main__() })
    })()
}

simulacionRotar()

const simulacionMover = () =>{
    ; (function () {
        ;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};

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

            var version, print, arange, __name__, type, ρσ_ls, scene, floor, square;
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
            scene = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({ width: 500, height: 216, background: color.white })]);
            floor = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({length: 10, width: 10, height: .1, color: color.black})]);
            square = ρσ_interpolate_kwargs.call(this, box, [ρσ_desugar_kwargs({ length: 1, width: 1, height: 1, pos: vector(0, .5, 0), color: vector(2["/"](255), 8["/"](255), 135["/"](255)) })]);
            while (true) {
                (await rate(60));
                ρσ_interpolate_kwargs.call(square, square.rotate, [ρσ_desugar_kwargs({ angle: (await radians(1)), axis: vector(0, 1, 0) })]);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__: { value: null }
        });

        ; $(function () { window.__context = { glowscript_container: $("#simulacion-mover").removeAttr("id") }; __main__() })
    })()
}

simulacionMover()