const wrapperEl = document.querySelector('.wrapper');
const numberOfEls = 50;
const duration = 6000;
const delay = 100;

let tl = {
  restart: function() {
    this.currentTime = 0;
    this.play();
  },
  currentTime: 0,
  play: function() {
    for (let i = 0; i < numberOfEls; i++) {
      const el = wrapperEl.children[i];
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;
      const hue = Math.round(360 / numberOfEls * i);
      const beginTime = delay * i;
      animateElement(el, hue, rotate, translateY, duration, beginTime);
    }
    this.currentTime += duration;
  }
};

function createEl(i) {
  let el = document.createElement('div');
  const rotate = (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = Math.round(360 / numberOfEls * i);
  el.classList.add('el');
  el.style.width = "100%";
  el.style.scale = .5;
  el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
  el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
  wrapperEl.appendChild(el);
};

function animateElement(el, hue, rotate, translateY, duration, beginTime) {
  const keyframes = [
    { backgroundColor: 'hsl(' + hue + ', 40%, 60%)', transform: 'rotate(' + rotate + 'deg) translateY(' + translateY + '%) scale(1)' },
    { backgroundColor: 'hsl(' + hue + ', 60%, 80%)', transform: 'rotate(' + (rotate + 10) + 'deg) translateY(' + (translateY + 5) + '%) scale(1.4)' },
    { backgroundColor: 'hsl(' + hue + ', 40%, 60%)', transform: 'rotate(' + rotate + 'deg) translateY(' + translateY + '%) scale(1)' }
  ];
  const options = {
    duration: duration * .3,
    delay: beginTime,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.2)'
  };
  el.animate(keyframes, options);
}
function crearOla (){
    for (let i = 0; i < numberOfEls; i++) createEl(i);
}
const animationDuration = numberOfEls + duration + delay * 27.5;
function repeatWithDelay(func) {
  setTimeout(function() {
    func();
    repeatWithDelay(func);
  }, animationDuration);
}
crearOla()
tl.play()
// repeatWithDelay(crearOla);
repeatWithDelay(tl.play.bind(tl));





function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  var footer = document.querySelector('footer');
  if(scrollY >= heightFooter) {
      footer.style.bottom = '0px';
  } else {
      footer.style.bottom = '-' + heightFooter + 'px';
  }
}

window.addEventListener('load', function() {
  var windowHeight = window.innerHeight,
      footerHeight = document.querySelector('footer').offsetHeight,
      contentHeight = document.querySelector('.content').offsetHeight,
      heightDocument = windowHeight + contentHeight + footerHeight - 20;

  // Definindo o tamanho do elemento pra animar
  document.querySelector('#scroll-animate, #scroll-animate-main').style.height = heightDocument + 'px';

  // Definindo o tamanho dos elementos header e conteúdo
  var header = document.querySelector('header');
  header.style.height = windowHeight + 'px';
  header.style.lineHeight = windowHeight + 'px';

  var wrapperParallax = document.querySelector('.wrapper-parallax');
  wrapperParallax.style.marginTop = windowHeight + 'px';

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  window.onscroll = function() {
      var scroll = window.scrollY;

      document.querySelector('#scroll-animate-main').style.top = '-' + scroll + 'px';

      var backgroundPositionY = 50 - (scroll * 100 / heightDocument) + '%';
      header.style.backgroundPositionY = backgroundPositionY;

      scrollFooter(scroll, footerHeight);
  };
});
