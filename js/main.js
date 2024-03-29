window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#preloader").style.display = "none";
  }, 2000);
});


let Textos = new Array();
// Enter the names of the images below
Textos[0] = "Desarrollo web";
Textos[1] = "UX/UI";
Textos[2] = "Diseño multimedia";

let nuevoTexto = -1; // para empezar en el primer texto -1, con 0 comienza por mostrar el segundo
let totalTextos = Textos.length;
let fadeDuration = 2000; // duración de la animación en milisegundos

function repetir() {
  nuevoTexto++;
  if (nuevoTexto == totalTextos) {
    nuevoTexto = 0;
  }
  let elemento = document.getElementById("text_rotate");
  elemento.style.opacity = 0;
  setTimeout(function () {
    elemento.innerHTML = Textos[nuevoTexto];
    elemento.style.opacity = 1;
  }, fadeDuration / 2);
  setTimeout(repetir, 3 * 1000);
}

window.onload = repetir;


let colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

let step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
let colorIndices = [0,1,2,3];

//transition speed
let gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
let c0_0 = colors[colorIndices[0]];
let c0_1 = colors[colorIndices[1]];
let c1_0 = colors[colorIndices[2]];
let c1_1 = colors[colorIndices[3]];

let istep = 1 - step;
let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
let color1 = "rgb("+r1+","+g1+","+b1+")";

let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
let color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);


