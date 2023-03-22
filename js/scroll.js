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
    if (desplazamientoActual === 0 && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        $nav.style.display = "";
        $nav.style.backgroundColor = "transparent";
        logo.style.filter = "brightness(100)";
    } else if (ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muestra */
        $nav.style.display = "";
        $nav.style.backgroundColor = "#44b9e5";
        $nav.style.top = "0px";
        console.log('Ubicacion Principal');
        console.log(ubicacionPrincipal);
        console.log('desplazamiento');
        console.log(desplazamientoActual);
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-80px";
        $nav.style.display = "none";
        console.log('Ubicacion Principal');
        console.log(ubicacionPrincipal);
        console.log('desplazamiento');
        console.log(desplazamientoActual);
    }

    /* --actualizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
})
.addTo(controller);
