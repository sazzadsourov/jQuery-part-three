// isotop start
// init Isotope
var $grid = $('.all_item').isotope({
  // options
});
// filter items on button click
$('.all_button_group').on( 'click', '#s_btn', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// isotop end








  // jQuery

$(document).ready(function () {
    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

// slik slider
$('.autoplay').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
// mixitup
var mixer = mixitup('.mixi_img');



})