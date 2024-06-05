$('.cover-slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,    

  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 767.5,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,        
        centerPadding:"8.5%",
      }
    }
  ]
});


