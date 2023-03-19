const pasos = document.querySelectorAll('.pasos'); /* Obtenemos todos los elementos con la clase "pasos" */
const pasosArray = Array.from(pasos); /* Convertimos la lista en un array para poder recorrerlo */

pasosArray.forEach(function(paso){ /* Recorremos cada elemento con la clase "pasos" */
  const pasoTop = paso.offsetTop; /* Obtenemos la posición del elemento respecto al borde superior del documento */
  const pasoBottom = pasoTop + paso.offsetHeight; /* Obtenemos la posición del borde inferior del elemento */

  /* Función que se activa cuando se hace scroll */
  window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY; /* Obtenemos la posición actual del scroll */
    if(scrollPos >= pasoTop && scrollPos < pasoBottom){ /* Si el scroll está en la sección actual... */
      paso.querySelector('.paso').classList.add('active'); /* Agregamos la clase "active" al elemento con la clase "paso" */
    } else {
      paso.querySelector('.paso').classList.remove('active'); /* Eliminamos la clase "active" si el scroll está en otra sección */
    }
  });
});
const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active_nav');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '/img/3869892-200.png'){
        e.target.setAttribute('src','/img/open-menu2.png');
    }else{
        e.target.setAttribute('src','/img/3869892-200.png');
    }
});

//nav scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navPrincipal").style.top = "0";
  } else {
    document.getElementById("navPrincipal").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



var Textos = new Array();
  // Enter the names of the images below
  Textos[0]="Desarrollo<br>web";
  Textos[1]="Ciencia de<br>datos";
  Textos[2]="Diseño<br>multimedia";
 
var nuevoTexto = -1; // para empezar en el primer texto -1, con 0 comienza por mostrar el segundo
var totalTextos = Textos.length;
 
function repetir() {
  nuevoTexto++;
  if (nuevoTexto == totalTextos) {
    nuevoTexto = 0;
  }
  document.getElementById('text_rotate').innerHTML=Textos[nuevoTexto];
// cambiar 4 por el valor en segundos
  setTimeout("repetir()", 3*1000);
  
}
window.onload=repetir;
//]]>