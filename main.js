window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
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
var fadeDuration = 3000; // duración de la animación en milisegundos

function repetir() {
  nuevoTexto++;
  if (nuevoTexto == totalTextos) {
    nuevoTexto = 0;
  }
  var elemento = document.getElementById('text_rotate');
  elemento.style.opacity = 0;
  setTimeout(function() {
    elemento.innerHTML = Textos[nuevoTexto];
    elemento.style.opacity = 1;
  }, fadeDuration / 2);
  setTimeout(repetir, 3*1000);
}

window.onload = repetir;