window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#preloader").style.display = "none";
  }, 100);
});

const iconoMenu = document.querySelector("#icono-menu");
const menu = document.querySelector("#menu");
let isOpen = false;

function cerrarMenu() {
  if (isOpen) {
    menu.classList.remove("active_nav");
    document.body.classList.remove("opacity");
    isOpen = false;
  }
}

const enlacesMenu = document.querySelectorAll("#menu a");
enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    cerrarMenu();
  });
});

iconoMenu.addEventListener("click", (e) => {
  e.preventDefault();
  // Alternamos estilos para el menú y body
  menu.classList.toggle("active_nav");
  document.body.classList.toggle("opacity");
  // Alternamos su atributo 'src' para el ícono del menú
  e.target.setAttribute("src", isOpen ? "/img/3869892-200.png" : "/img/close-circle-line.png");
  isOpen = !isOpen;
});

window.addEventListener("scroll", () => {
  cerrarMenu();
});




var Textos = new Array();
// Enter the names of the images below
Textos[0] = "Desarrollo<br>web";
Textos[1] = "Ciencia de<br>datos";
Textos[2] = "Diseño<br>multimedia";

var nuevoTexto = -1; // para empezar en el primer texto -1, con 0 comienza por mostrar el segundo
var totalTextos = Textos.length;
var fadeDuration = 3000; // duración de la animación en milisegundos

function repetir() {
  nuevoTexto++;
  if (nuevoTexto == totalTextos) {
    nuevoTexto = 0;
  }
  var elemento = document.getElementById("text_rotate");
  elemento.style.opacity = 0;
  setTimeout(function () {
    elemento.innerHTML = Textos[nuevoTexto];
    elemento.style.opacity = 1;
  }, fadeDuration / 2);
  setTimeout(repetir, 3 * 1000);
}

window.onload = repetir;