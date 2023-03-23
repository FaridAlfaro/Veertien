window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#preloader").style.display = "none";
  }, 2000);
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