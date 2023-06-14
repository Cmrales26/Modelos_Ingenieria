function SeleccionCinema() {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Qué quieres hacer primero?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ver simuladores',
    cancelButtonText: 'Ver tutorial',
    width: 600,
    padding: '3em',
    color: '#716add',
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        window.location.href = "./Cinematica/cinematica.html"
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        window.location.href = "./ComoUsar/ComoUsarCinematica.html"
      )
    }
  })
}
function SeleccionNewton() {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Qué quieres hacer primero?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ver simuladores',
    cancelButtonText: 'Ver tutorial',
    width: 600,
    padding: '3em',
    color: '#716add',
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        window.location.href = "./Newton/newton.html"
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        window.location.href = "./ComoUsar/ComoUsarNewton.html"
      )
    }
  })
}
