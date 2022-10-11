const boton = document.getElementById("aggv1")
boton.addEventListener("click", AddVector)

function AddVector() {

    //PRIMER VECTOR
    var vix = document.getElementById("ppx").value; 
    var viy = document.getElementById("ppy").value;
    var vfx = document.getElementById("pllx").value;
    var vfy = document.getElementById("plly").value;

    //SEGUNDO VECTOR
    var vix2 = document.getElementById("ppx2").value; 
    var viy2 = document.getElementById("ppy2").value;
    var vfx2 = document.getElementById("pllx2").value;
    var vfy2 = document.getElementById("plly2").value;

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
        x: [vfx, vfx2 ],
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
    var data = [p_0, A,B,PC];

    Plotly.newPlot(Plot, data, layout);
}