document.addEventListener('DOMContentLoaded', function() {
  let controller = new ScrollMagic.Controller();

  let $nav = document.querySelector("nav");
  let logo = document.getElementById("logo1");
  let ubicacionPrincipal = window.pageYOffset;

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
      $nav.style.backgroundColor = "transparent";
      logo.style.filter = "brightness(100)";
    } else if (ubicacionPrincipal >= desplazamientoActual) {
      $nav.style.backgroundColor = "#44b9e5";
      $nav.style.top = "0px";
      console.log('Ubicacion Principal');
      console.log(ubicacionPrincipal);
      console.log('desplazamiento');
      console.log(desplazamientoActual);
    } else {
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
