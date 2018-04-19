$(document).ready(function(){

  "use strict";

  /******************************/

  /* PRELOADER JS */

  /******************************/

  $(window).on("load", function () {
      $('.ps_spinner').fadeOut();
      $('.ps_preloader').delay(450).fadeOut('slow');
  });

  /******************************/

  /* NAV COLLAPSE JS */

  /******************************/

  $('.nav_trigger').on("click", function () {
      $('.ps_main__header').toggleClass('nav_closed');
      $('.nav_trigger').toggleClass('nav_opened');
  });

  /******************************/

  /* SMOTH SCROOL JS */

  /******************************/

  $('a.scroll_to__section').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
  });

  /******************************/

  /* MAGNIFIC POPUP */

  /******************************/

  $('.ps_gallery__item').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
  });

  /******************************/

  /* HEADER CAROUSEL ( SLIDER ) */

  /******************************/

  $('.ps_hero__slider').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 5500,
    prevArrow: '<div class="prev_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
  });


  /******************************/

  /* ON SCROLL ANIMATION */

  /******************************/

  AOS.init();


});
