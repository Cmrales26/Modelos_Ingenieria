const boton = document.getElementById("aggv1")
const boton1 = document.getElementById("ResultadoV")
boton.addEventListener("click", AddVector)
boton1.addEventListener("click", Solver)

function AddVector() {
    var vix = document.getElementById("ppx").value;
    var viy = document.getElementById("ppy").value;
    var vfx = document.getElementById("pllx").value;
    var vfy = document.getElementById("plly").value;

    //SEGUNDO VECTOR
    var vix2 = document.getElementById("ppx2").value;
    var viy2 = document.getElementById("ppy2").value;
    var vfx2 = document.getElementById("pllx2").value;
    var vfy2 = document.getElementById("plly2").value;

    //TIEMPO
    var ti = parseFloat(document.getElementById("ti").value) 
    var tf = parseFloat(document.getElementById("tf").value)


    Plot = document.getElementById('plot');
    var p_0 = {
        x: [0, 0],
        y: [0, 0],
        name: '0,0'
    }

    var A = {
        x: [vix, vfx],
        y: [viy, vfy],
        // mode: 'lines',
        name: 'A',
        // connectgaps: true
    };

    var B = {
        x: [vix2, vfx2],
        y: [viy2, vfy2],
        name: 'B',
    };

    var PC = {
        x: [vfx, vfx2],
        y: [vfy, vfy2],
        mode: '',
        arrowhead: 2,
        name: "B-A"
    };

    var layout = {
        plot_bgcolor: "#fafafa",
        paper_bgcolor: "transparent",
        // showlegend: false,
        xaxis: {
            showgrid: false
        }
    }
    // var data = [A,B,PC];
    var data = [p_0, A, B, PC];

    Plotly.newPlot(Plot, data, layout);
    var mg1 = TmagnitudV(vix, vfx, viy,vfy); var mg2 = TmagnitudV(vix2, vfx2, viy2,vfy2);
    var ba = mg2 - mg1;
    if (mg2 == undefined) {
        Salidas(vix,vfx,viy,vfy,"","","","",mg1.toFixed(2),"","",ti,tf)
    }else{
        Salidas(vix,vfx,viy,vfy,vix2,vfx2,viy2,vfy2,mg1.toFixed(2),mg2.toFixed(2),ba.toFixed(2),ti,tf)
    }
    
}

function Solver() {
    AddVector()
    var vix = parseFloat(document.getElementById("ppx").value);
    var viy = parseFloat(document.getElementById("ppy").value);
    var vfx = parseFloat(document.getElementById("pllx").value);
    var vfy = parseFloat(document.getElementById("plly").value);

    //SEGUNDO VECTOR
    var vix2 = parseFloat(document.getElementById("ppx2").value);
    var viy2 = parseFloat(document.getElementById("ppy2").value);
    var vfx2 = parseFloat(document.getElementById("pllx2").value);
    var vfy2 = parseFloat(document.getElementById("plly2").value);

    var ti = parseFloat(document.getElementById("ti").value) 
    var tf = parseFloat(document.getElementById("tf").value)
    var respuesta;
    var mg1 = TmagnitudV(vix, vfx, viy,vfy);var mg2 = TmagnitudV(vix2, vfx2, viy2,vfy2);
    var T = tf - ti;
    var D = mg2 - mg1;
    var respu = document.getElementById("Respuesta-valor")
    if (mg2 == undefined) {
        respuesta = mg1/T
        respu. innerHTML = "Vm = ΔD/ΔT = " + mg1.toFixed(2) + "m /" + T.toFixed(2) + "s = " + respuesta.toFixed(2) + "m/s" 
    }else{
        respuesta = D/T
        respu. innerHTML = "Vm = ΔD/ΔT = " + D.toFixed(2) + "m /" + T.toFixed(2) + "s = " + respuesta.toFixed(2) + "m/s" 
    }
}

function TmagnitudV(vix, vfx, viy, vfy) {
    var magnitud;
    if (vix > vfx && viy > vfy) {
        var rx1 = vix - vfx;
        var ry1 = viy - vfy;
        magnitud = Math.sqrt((Math.pow(rx1, 2) + Math.pow(ry1, 2)))
    } else if (vix < vfx && viy < vfy) {
        var rx1 = vfx - vix;
        var ry1 = vfy - viy;
        magnitud = Math.sqrt((Math.pow(rx1, 2) + Math.pow(ry1, 2)))
    } else if (vix < vfx && viy > vfy) {
        var rx1 = vfx - vix;
        var ry1 = viy - vfy;
        magnitud = Math.sqrt((Math.pow(rx1, 2) + Math.pow(ry1, 2)))
    } else if (vix > vfx && viy < vfy) {
        var rx1 = vix - vfx;
        var ry1 = vfy - viy;
        magnitud = Math.sqrt((Math.pow(rx1, 2) + Math.pow(ry1, 2)))
    } else {
        // alert("VALORES NO ADMITIDOS")
    }
    return magnitud
}
function Salidas(vix, vfx, viy, vfy,vix2, vfx2, viy2, vfy2,LongitudV1, LongitudV2, ba, ti, tf) {
    var outs = document.getElementById("Salidas")
    outs.innerHTML = "<h1> VECTORES </h1> <br> Vector A = (" + vix + " , " +viy+") - (" + vfx + " , " + vfy + ")<br> Vector B = (" + vix2 + "," +viy2+") - (" + vfx2 + " , " + vfy2 + ")<br> Vector A - B = (" + vfx + " , " + vfy +") - (" + vfx2 + " , " + vfy2 + ") <br><br> <h1> Longitudes </h1><br> Longitud A = " + LongitudV1 +"m <br> Longitud B = " + LongitudV2 +"m <br> Longitud B-A = " + ba + "m<br><br> <h1>Tiempo</h1><br> Tiempo 1 = " + ti + "s<br> Tiempo 2 = " + tf + "s <br>"   ;
}