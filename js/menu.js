// const shareButton = document.querySelectorAll("button.shareButton")

// shareButton[0].addEventListener("click", (e) => {
//     for(const element of shareButton) {
//        element.classList.toggle("open")
//        shareButton[0].classList.remove("sent")
//     }
// })

// for( let i=1; i < shareButton.length; i++ ) {
   
//    shareButton[i].addEventListener("click", (e) => {
      
//    for(const element of shareButton) {
//       element.classList.toggle("open")
//    }
//    shareButton[0].classList.toggle("sent")
//    })
// }

const menuToggle = document.querySelector('[data-js="menu-toggle"]');

// Remove this setInterval to trigger the open/close manually through the UI
const interval = setInterval(function() {
  menuToggle.click();
}, 2000);

// Clear the interval on any click
document.body.addEventListener('click', function () {
   clearInterval(interval);
});

menuToggle.addEventListener('click', function () {
  document.body.classList.toggle('panel-open');
  menuToggle.classList.toggle('open');
});

const closePanel = document.querySelector('[data-js="hidden-panel-close"]');

closePanel.addEventListener('click', function () {
  document.body.classList.remove('panel-open');
  menuToggle.classList.remove('open');
});