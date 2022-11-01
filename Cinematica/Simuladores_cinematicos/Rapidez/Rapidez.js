const boton = document.getElementById("Resultado")
boton.addEventListener("click", Calcular);
var resultado

function Calcular() {
    count = 0
    const Distancia = parseFloat(document.getElementById("Distancia").value);
    const T_i = parseFloat(document.getElementById("T_i").value);
    const T_f = parseFloat(document.getElementById("T_f").value);
    resultado = (Distancia / (T_f - T_i));
    document.getElementById("Respuesta-valor").innerHTML = resultado.toFixed(2) + "m/s"
    simulacion()
}


function simulacion (){
    !(function() {;
        var ρσ_modules = {};
        ρσ_modules.pythonize = {};
        
        let simu = document.getElementById('Simulacion');
        if (simu == null) {
            $('.Simulacion').attr('id', 'Simulacion');
            const myNode = document.getElementById("Simulacion");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
        }
        
        (function(){
            function strings() {
                var string_funcs, exclude, name;
                string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
                if (!arguments.length) {
                    exclude = (function(){
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
                __module__ : {value: "pythonize"}
            });
        
            ρσ_modules.pythonize.strings = strings;
        })();
        async function __main__() {
        "use strict";
            var display = canvas;
            var scene = canvas();
        
            var version, print, arange, __name__, type, ρσ_ls, p_i, final, speed, r, radi, pelota2, wall, flecha;
            version = ρσ_list_decorate([ "3.2", "glowscript" ]);
            Array.prototype['+'] = function(r) {return this.concat(r)}
            Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
            window.__GSlang = "vpython";
            print = GSprint;
            arange = range;
            __name__ = "__main__";
            type = pytype;
            var strings = ρσ_modules.pythonize.strings;
        
            strings();
            ρσ_interpolate_kwargs.call(this, display, [ρσ_desugar_kwargs({background: vector(250, 250, 250)})]);
            "2";
            p_i = vector(0, 0, 0);
            "3";
            final = parseFloat(document.getElementById("Distancia").value);;
            "4";
            speed = resultado;
            "5";
            r = p_i;
            "6";
            radi = final["/"](10);
            "7";
            print(radi);
            "9";
            pelota2 = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: p_i, color: color.blue, radius: radi,make_trail: true})]);
            "10";
            "11";
            flecha = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: p_i, size: vector(final/2, 10, 0), axis: vector(1, 0, 0), color: color.red})]);
            "13";
            print("RECORRIDO");
            "14";
            while (r.x["<="](final)) {
                "15";
                (await rate(speed));
                "16";
                pelota2.pos = r;
                "17";
                flecha.pos = r;
                "18";
                print(r.x["+"]("m"));
                "19";
                r.x = r.x["+"](1);
            }
        };
        if (!__main__.__module__) Object.defineProperties(__main__, {
            __module__ : {value: null}
        });
        
        ;$(function(){ window.__context = { glowscript_container: $("#Simulacion").removeAttr("id") }; __main__() })})()
}


