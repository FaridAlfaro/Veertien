let $nav = document.querySelector("nav");
let logo = document.getElementById("logo1")
/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(desplazamientoActual === 0 && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            $nav.style.display = "";
            $nav.style.backgroundColor = "transparent";
        logo.style.filter = "brightness(100)";
    }
    else if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
            $nav.style.display = "";
            $nav.style.backgroundColor = "#44b9e5";
            $nav.style.top = "0px";S
            console.log('Ubicacion Principal')
            console.log(ubicacionPrincipal)
            console.log('desplazamiento')
            console.log(desplazamientoActual)
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-80px";
        $nav.style.display = "transparent";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)

    }


    /* --actulizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});