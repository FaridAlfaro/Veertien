const menuToggle = document.querySelector('[data-js="menu-toggle"]');
$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
    $('.menu-toggle').toggleClass('active');
    $('.menu').toggleClass('active');
  });
});