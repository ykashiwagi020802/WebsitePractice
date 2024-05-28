$('.accordion-title').on('click', function(e) {
  var mark = $(this).find("i");
  mark.toggleClass("change-parts-rotate");
  var content = $(this).next();
  content.slideToggle();
});

$('.cover-slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: true,
  centerPadding: '200px',
  prevArrow: '<img src="assets/image/arrow_left_circle_sp_01.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow_right_circle_sp_01.png" class="slide-arrow next-arrow">',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


