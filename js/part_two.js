// wow js
  new WOW().init();


// main menu
  //initiating jQuery
  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });


  // jQuery
$(document).ready(function () {
// owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
// magnify popup
// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
  });
});
// two











})