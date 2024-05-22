// $(window).on('load resize', function(){
//     var winW = $(window).width();
//     var devW = 767;
//     if (winW <= devW) {
//        // スマホ用（767px以下）のスクリプトはここに
//        $('.voice-items').slick();
//     } else {
//   // PC用（768px以上）のスクリプトはここに
//   $('.voice-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 2
//   });
//     }
//   });
  

$('.voice-slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: '<img src="../assets/image/arrow_left_circle_sp_01.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../assets/image/arrow_right_circle_sp_01.png" class="slide-arrow next-arrow">',
  fade: true
});


$('.accordion-title').on('click', function(e) {
  var mark = $(this).find("i");
  mark.toggleClass("change-parts-rotate");
  var content = $(this).next();
  content.slideToggle();
});

// 省略
// カルーセル
// $('.cover-slick').slick({
//   infinite: true,
//   dots: true,
//   arrows: true,
//   prevArrow: '<img src="assets/image/arrow_left_circle_sp_01.png" class="slide-arrow prev-arrow">',
//   nextArrow: '<img src="assets/image/arrow_right_circle_sp_01.png" class="slide-arrow next-arrow">',
//   fade: true
// });


$('.cover-slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: true,
  arrows: true,
  prevArrow: '<img src="assets/image/arrow_left_circle_sp_01.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow_right_circle_sp_01.png" class="slide-arrow next-arrow">',
  fade: true
});