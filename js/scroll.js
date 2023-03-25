document.addEventListener('DOMContentLoaded', function() {
  let controller = new ScrollMagic.Controller();
  let $nav = document.querySelector("nav");
  let ubicacionPrincipal = window.pageYOffset;
  let botonFlotante = document.getElementById("shareButtonJS")
  let progreso = document.getElementById("progress_JS")

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
      progreso.style.backgroundColor = "transparent";
      botonFlotante.style.backgroundColor = "transparent";
      $nav.style.backgroundColor = "transparent";
    } else if (ubicacionPrincipal >= desplazamientoActual) {
      progreso.style.backgroundColor = "0A0D13";
      botonFlotante.style.backgroundColor = "transparent";
      botonFlotante.style.backgroundColor = "";
      $nav.style.backgroundColor = "#0A0D13";
      $nav.style.top = "0px";
      console.log('Ubicacion Principal');
      console.log(ubicacionPrincipal);
      console.log('desplazamiento');
      console.log(desplazamientoActual);
    } else {
      botonFlotante.style.backgroundColor = "";
      progreso.style.backgroundColor = "0A0D13";
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

const progressBarText = document.querySelectorAll('.progress-bar-text span');

window.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement;
  
  progressBarText.forEach((text, index) => {
    const sectionHeight = document.querySelector(`#section-${index + 1}`).offsetHeight;
    const sectionTop = document.querySelector(`#section-${index + 1}`).offsetTop;
    if (scrollTop >= sectionTop && scrollTop < (sectionTop + sectionHeight)) {
      text.classList.add('active');
    } else {
      text.classList.remove('active');
    }
  });
});
