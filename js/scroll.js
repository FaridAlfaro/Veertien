document.addEventListener('DOMContentLoaded', function() {
  let controller = new ScrollMagic.Controller();
  let $nav = document.querySelector("nav");
  let ubicacionPrincipal = window.pageYOffset;
  let botonFlotante = document.getElementById("shareButtonJS")

  let scene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    reverse: true
  })
  .on("update", function(e) {
    /* --donde nos encontramos actualmente */
    let desplazamientoActual = e.scrollPos;

    /* --condicion para ocultar o mostrar el menu */
    if (desplazamientoActual === 0) {
      botonFlotante.style.backgroundColor = "transparent";
      $nav.style.backgroundColor = "transparent";
    } else if (ubicacionPrincipal >= desplazamientoActual) {
      botonFlotante.style.backgroundColor = "";
      $nav.style.backgroundColor = "#0A0D13";
      $nav.style.top = "0px";
      console.log('Ubicacion Principal');
      console.log(ubicacionPrincipal);
      console.log('desplazamiento');
      console.log(desplazamientoActual);
    } else {
      botonFlotante.style.backgroundColor = "";
      $nav.style.top = "-80px";
      $nav.style.backgroundColor = "transparent";
      console.log('Ubicacion Principal');
      console.log(ubicacionPrincipal);
      console.log('desplazamiento');
      console.log(desplazamientoActual);
    }

    /* --actualizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
  })
  .addTo(controller);
});
