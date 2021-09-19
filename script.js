$(document).ready(function () {
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
   });
   $('.header__menu').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
   });
});